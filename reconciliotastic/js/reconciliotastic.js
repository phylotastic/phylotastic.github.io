
function toggleDatasources() {
    var upload = document.dataform.elements['datasource'][0].checked;
    
    document.getElementById('demos').disabled = upload;
    document.getElementById('uploadFileName').disabled = !upload;
    document.getElementById('uploadSubmit').disabled = !upload;
}

$(function(){
    $('input.reconcileSubmit').click(function(){
        // close the about accordion
        if($('#accordion').accordion('option','active') == 0)
            $('#accordion').accordion('option','active',false);
            
        // remove old tabs
        var len = $("#tabs").tabs("length");
        for(var i = 0; i < len; i++)
            $("#tabs").tabs("remove",0);
        
        // make the new tabs
        var tabshtml = '';
        var tabs = ['Reconcile Tree','Gene Tree','Species Tree'];
        for(var i = 0; i < tabs.length; i++) {
            tabshtml = '<div ><img id=\"loading\" class=\"loading\" src=\"../images/loading.gif\"></div>';
            tabshtml += '<applet>';
            tabshtml += '</applet>';
            addTab(tabs[i].replace(' ',''),tabs[i],tabshtml);
        }
        
        $(function() {
        	$(".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *")
        		.removeClass("ui-corner-all ui-corner-top")
        		.addClass("ui-corner-bottom viz");
        });
    })
});