$(function() {
	$("#accordion").accordion({
		collapsible: true,
		fillSpace: true
	});
});

$(function() {
	$("#innerAccordion").accordion({
		collapsible: true,
	});
});

$(function() {
	$("#tabs").tabs();
	$(".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *")
		.removeClass("ui-corner-all ui-corner-top")
		.addClass("ui-corner-bottom");
});

$("#tabs span.ui-icon-close").live("click", function() {
	var index = $("li", $("#tabs")).index($(this).parent());
	$("#tabs").tabs("remove", index);
	enableOptimize();
});

function addTab(tid, title, content) {
    $('#tabs').tabs({
    tabTemplate: '<li><a id="#' + tid + '" href="#{href}">#{label}</a><span class=\'ui-icon ui-icon-close\'>Remove Tab</span></li>',
    add: function(event, ui) {
      var dataString = content;
      $(ui.panel).append(content);
    }
  });
  $('#tabs').tabs('add', '#'+tid, title);
  document.getElementById(tid).setAttribute('tabindex', 0);
  $(".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *")
		.removeClass("ui-corner-all ui-corner-top")
		.addClass("ui-corner-bottom");
}