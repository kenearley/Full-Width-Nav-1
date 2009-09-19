// Namespacing
SENTIENTBIT = {
	features: {}
};


SENTIENTBIT.features.Navigation = function(element) {
	var navigation,
		topLevelLists;
	
	function init() {
		navigation = element;
		topLevelLists = YAHOO.util.Dom.getElementsByClassName("topLevel", "ul", navigation);
		
		YAHOO.util.Event.addListener(topLevelLists, "mouseover", showNav );
		YAHOO.util.Event.addListener(topLevelLists, "mouseout", hideNav );
	}

	function showNav(e) {
		for (var i=0; i<topLevelLists.length; i++) {
			YAHOO.util.Dom.removeClass(topLevelLists[i], "selected");
		}
		YAHOO.util.Dom.addClass(this, "selected");
	}
	
	function hideNav(e) {
		relatedTarget = YAHOO.util.Event.getRelatedTarget(e);
		if (!YAHOO.util.Dom.isAncestor("navigation", relatedTarget)) {
			self = this;
			setTimeout ( function() { YAHOO.util.Dom.removeClass(self, "selected"); }, 500 );
		}
	}

	init();
}