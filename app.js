const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//Replace Text function		 
$(function () { 
	count = 0; 
	wordsArray = ["Ayoo", "AnyIdeas", "🧐", "Aryan", "Web_Developer", "Student", "Web_Designer"]; 
	setInterval(function () { 
	  count++; 
	  $("#word").fadeOut(4000, function () { 
		$(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
	  }); 
	}, 5000); 
  }); 
  //End Replace Text function	
