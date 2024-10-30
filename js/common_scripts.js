 jQuery( document ).ready(function($) {
	$( document ).on( "click", ".deletetab", function( e ) {	
		var count = $( ".lumia_product_tab_inner" ).length;
		$( this ).parent().parent().remove(); 
		if ( count == 2 ) {
			$( ".deletetab" ).remove();
		}
	});
	$ ( document ).on( "click", ".addtab", function(e) {
        var id = $( ".lumia_product_tab_wrapper" ).not( '.hide' ).length; console.log( id );
        $( '.hidden_editor_' + id ).removeClass( 'hide' );
    });
});    