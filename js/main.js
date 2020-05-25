$(document).ready(function() {
	$('.burg').click(function(){
		$(this).toggleClass('burg_activ');
	})
});
$('.burg').click(function(){
	$('.header_top-menu').toggleClass('menu_active');
});
$('section').click(function(){
	$('.header_top-menu').removeClass('menu_active');
});
$('section').click(function(){
	$('.burg').removeClass('burg_activ');
});
//Overlay активация
$('.burg').click(function(){
		$('.overlay').toggleClass('overlay_activ');
	});
$('.overlay').click(function(){
	$('.overlay').toggleClass('overlay_activ');
});
$('.overlay').click(function(){
	$('.burg').toggleClass('burg_activ');
});
$('.overlay').click(function(){
	$('.header_top-menu').toggleClass('menu_active');
});

/*Скрытие меню после нажатия на ссылку*/
$('nav a').click(function(){
	$('.header_top-menu').removeClass('menu_active');
	$('.burg').removeClass('burg_activ');
	$('.overlay').removeClass('overlay_activ');
})