/*
======== table of content. =================================

Description: fadein/out button image when mouse overed.
Update:  2010/07/1-
Author:  Japan Electronic Industrial Arts Co.Ltd.
         http://www.jeia.co.jp/
License: licensed under the MIT (MIT-LICENSE.txt) license.
Using:   using jQuery
         http://jquery.com/
         using DD_belatedPNG for IE6-8
         http://www.dillerdesign.com/experiment/DD_belatedPNG/

============================================================
*/

new function() {
	
	var fadeInTime = 300;	// msec
	var fadeOutTime = 300;	// msec
	var offClass = 'off';
	var onClass = 'on';
	
	if ( typeof jQuery == 'undefined' ) {
		return;
	}
	
	jQuery(document).ready( function() {
		init();
	});
	
	/**
	 * initialize
	 */
	function init() {
		
		jQuery( 'a img' ).each( function() {
			
			var src = jQuery(this).attr( 'src' );
			var fadePatern = new RegExp( /.*_off\.[^.]+/ );
			var pngPatern = new RegExp( /.*\.png$/ );
			var onImage;
			if ( typeof src == 'undefined' ) {
				return;
			}
			if ( src.match( fadePatern ) ) {
				onImage = jQuery(this).clone();
				onImage.
					attr( 'src', src.replace( '_off.', '_on.' ) ).
					addClass( onClass ).
					fadeTo( 0, 0 ).
					css({
						'position': 'absolute',
						'left': '0px',
						'top': '0px'
					});
				
				jQuery(this).
					addClass( offClass ).
					css({
						'position': 'absolute',
						'left': '0px',
						'top': '0px'
					}).
					parent().
						append( onImage ).
						mouseover( onMouseOver ).
						mouseout( onMouseOut ).
						css({
							'display': 'block',
							'position': 'relative'
						}).
						width( jQuery(this).width() ).
						height( jQuery(this).height() );
				
				if ( typeof( DD_belatedPNG ) != 'undefined' ) {
					if ( src.match( pngPatern ) ) {
						DD_belatedPNG.fixPng( this );
						DD_belatedPNG.fixPng( onImage.get(0) );
					}
				}
			}
		});
	}
	
	
	/**
	 * mouseover event( fadein )
	 */
	function onMouseOver( e ) {
		
		var src = jQuery(this).children( 'img.' + offClass ).attr( 'src' );
		var pngPatern = new RegExp( /.*\.png$/ );
		
		jQuery(this).unbind( 'mouseover', onMouseOver );
		
		if ( src.match( pngPatern ) ) {
			jQuery(this).
				children( 'img.' + offClass ).
					fadeTo( fadeInTime, 0 ).
				end().
				children( 'img.' + onClass ).
					fadeTo( fadeInTime, 1, function(){
						jQuery(this).parent().mouseover( onMouseOver );
					});
		}
		else {
			jQuery(this).
				children( 'img.' + onClass ).
					fadeTo( fadeInTime, 1, function(){
						jQuery(this).parent().mouseover( onMouseOver );
					});
		}
	}
	
	/**
	 * mouseout event( fadeout )
	 */
	function onMouseOut( e ) {
		
		var src = jQuery(this).children( 'img.' + offClass ).attr( 'src' );
		var pngPatern = new RegExp( /.*\.png$/ );
		
		if ( src.match( pngPatern ) ) {
			jQuery(this).
				children( 'img.' + offClass ).
					fadeTo( fadeOutTime, 1 ).
				end().
				children( 'img.' + onClass ).
					fadeTo( fadeOutTime, 0 );
		}
		else {
			jQuery(this).
				children( 'img.' + onClass ).
					fadeTo( fadeOutTime, 0 );
		}
	}
}
