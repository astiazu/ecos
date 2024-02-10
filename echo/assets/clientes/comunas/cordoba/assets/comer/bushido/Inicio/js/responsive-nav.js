$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};


jQuery(document).ready(function(){
	
	
	jQuery('#nav-button').click(function() {
			jQuery('#options').slideFadeToggle();
	});
	
	if ( jQuery(window).width() < 959) {
	jQuery('#options li a').click(function() {
			jQuery('#options').hide();
	});
	}
	
});	
	