$(document).ready(function(){
	
	// Using 

	
	$('#tweetLink').tweetAction({
		text:		'Trial & Error',
		url:		'http://VenomVendor.blogspot.com',
		via:		'Venom_Vendor',
		
	},
	function(){
		
		// When the user closes the pop-up window:
		
		$('a.button')
				.addClass('disabled')
						// The Link to Go After Sharing
				.attr('href', 'http://VenomVendor.blogspot.com');
			//	.attr('target', '_blank');
		//	$(this).attr('target', '_blank');
				

	});
	
});