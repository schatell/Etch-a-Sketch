$(document).ready(function(){

	var x = 16;

	var erase = true;
	var trail = false;

	var drawcanvas = (function(){
		$('.canvasbreak').remove();
		$('.square').remove();
		for (var i = 0; i < (x*x); i++) {
			if (i%x==0 && i != 0) {
				$('<br></br>', {
				"class": 'canvasbreak',
				}).appendTo(playarea);			
				$('<div></div>', {
				"class": 'square',
				}).appendTo(playarea);
			}else{
				$('<div></div>', {
				"class": 'square',
				}).appendTo(playarea);		
			}
			$('.square').css('height',(760-(x+1))/x);
			$('.square').css('width',(760-(x+1))/x);
		};
	});
	drawcanvas();

	$('#erase').click(function(){
		trail = false;
		erase = true;
		$('#erase').css('background-color', 'grey');
		$('#trail').css('background-color', '#ff3333');
	});

	$('#trail').click(function(){
		trail = true;
		erase = false;
		$('#erase').css('background-color', '#ff3333');
		$('#trail').css('background-color', 'grey');
	});



	var draw = (function(){
		$('.square').on('mouseenter', function() {
			if (erase == true) {
				$(this).css('background-color', 'white');
			};if (trail == true) {
				$(this).css("opacity", 0);
				$(this).fadeTo('slow', 1);
			}
		});
	});


	$('#clear').click(function(){
		$('.square').css('background-color', 'black');
		});

	$('#new').click(function(){
		var size = prompt("Please enter the new canvas size, choose a number between 16 and 64", 16);
		size = parseInt(size);
		if (size < 16 || size > 64) {
			size = 16;
		}
		x = size;
		drawcanvas();
		draw();
	})
	draw();

});