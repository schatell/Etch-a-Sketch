$(document).ready(function(){
	for (var i = 0; i < 256; i++) {
		if (i%16==0 && i != 0) {
			$('<br></br>').appendTo(playarea);			
			$('<div></div>', {
			"class": 'square',
			}).appendTo(playarea);
		}else{
			$('<div></div>', {
			"class": 'square',
			}).appendTo(playarea);
		}
	};
	$('.square').on('mouseenter', function() {
		$(this).css('background-color', 'white');
	})
	$('#clear').click(function(){
		$('.square').css('background-color', 'black');
	})
});