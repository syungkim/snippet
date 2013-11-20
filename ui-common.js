/*
 * return css3
 * translate & transition
 */
var CSS3 = {
	returnTranslate : function(x,y,z){
		return {
			'-webkit-transform': 'translate3d('+(x+'px')+', '+y+'px, '+z+'px)',
			'-moz-transform' : 'translate3d('+(x+'px')+', '+y+'px, '+z+'px)',
			'transform' : 'translate3d('+(x+'px')+', '+y+'px, '+z+'px)'
		}
	},
	returnAnimateSpeed : function(speed){
		return {
			'-webkit-transition' : '-webkit-transform '+speed+'ms ease-in-out',
			'-moz-transition': '-moz-transform '+speed+'ms ease-in-out',
			'transition': 'transform '+speed+'ms ease-in-out'
		}
	}
};
