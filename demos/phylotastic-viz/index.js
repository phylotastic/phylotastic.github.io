function init() {
    var myOptions = {
	     background: null,
		  viewMode: "circular cladogram",
		  threeD: true,
		  htuLabels: true,
		  leafLabels:  true,
		  branchColor: "white",
		  branchWidth: 0.2,
		  nodeRadius: 6,
		  title: "PhyloXML.org: Hominidae",
		  tools: true,
		  taxalist: false,
		  cladeinfo: false,
		  treeinfo: false,
		  feedback: false,
		  shadow: true
	 };
    var myPhylobox = new PhyBox("phylo_div", myOptions);
    
    //myPhylobox.drawTree("url","http://dl.dropbox.com/u/13724811/tree.xml");
    myPhylobox.drawTree("url","http://www.phylosoft.org/archaeopteryx/examples/data/multiple_supports.xml");
    
    //
    function myF( e, data ) {
        // do something...
        if (data.node.name) {
            console.log( "You clicked " + data.node.name + "!" );
            if (cartodb1_gmapsv3 !== null) {
                cartodb1_gmapsv3.setMap(null);   
            }
            if (cartodb2_gmapsv3 !== null) {
                cartodb2_gmapsv3.setMap(null);   
            }            
            addLayer(data.node.name.toLowerCase(), 'points');
            addLayer(data.node.name, 'range');
        } else {
            console.log( "You clicked " + data.node.id + "!" );
        }
    }
        
    // bind custom event handler to the phylobox "pb-nodeclick" event for this instance
    PbEvent.addListener( myPhylobox, "pb-nodeclick", myF );

    var map = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: new google.maps.LatLng(40, -98),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        }
    );

    var cartodb1_gmapsv3 = null;
    var cartodb2_gmapsv3 = null;
    
    var addLayer = function(name, type) {
        if (type === 'points') {
            cartodb1_gmapsv3 = new CartoDBLayer(
                {
                    map: map,
                    user_name:"mol",
                    table_name: 'gbif_import',
                    query: "SELECT cartodb_id, the_geom, st_transform(the_geom, 3785) AS the_geom_webmercator, identifier FROM {{table_name}} WHERE lower(scientificname)='" + name + "'",
                    layer_order: "top",
                    interactivity: "cartodb_id",
                    opacity: 1,
                    map_style: false,
                    auto_bound: false,
                    debug: false
                }
            );
        } else {
            cartodb2_gmapsv3 = new CartoDBLayer(
                {
                    map: map,
                    user_name:"mol",
                    table_name: 'polygons',
                    query: "SELECT * FROM {{table_name}} where scientificname = '" + name + "' and type = 'range' and provider = 'iucn'",
                    layer_order: "bottom",
                    interactivity: "cartodb_id",
                    opacity: 1,
                    map_style: false,
                    auto_bound: false,
                    debug: false
                }
            );
        }
    };    
}
