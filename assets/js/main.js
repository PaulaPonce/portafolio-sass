$(document).ready(function() {
	//Dropdown
	$('ul.nav li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
	});
	//Scroll down navbar
	var scrollStart = 0;
	var startChange = $("#carousel h1");
	var offset = startChange.offset();
	if (startChange.length) {
		$(document).scroll(function() {
		scrollStart = $(this).scrollTop();
			if (scrollStart > offset.top) {
				$("#navbar").addClass("nav-white");
				$("#navbar").removeClass("nav-transparent");
			} else {
				$("#navbar").removeClass("nav-white");
				$("#navbar").addClass("nav-transparent");
			}
		});
	}	
});