// ----------------------------------------------------------------------------

//  STICKY HEADERS

// ----------------------------------------------------------------------------


var nav_stop = document.querySelector(".fixed_nav");
var d_nav_box = document.querySelector(".desktop_nav");
var m_nav_box = document.querySelector(".mobile_nav");

//getComputedStyle retrieves all the css styles of that element

var position1 = getComputedStyle(d_nav_box, "position").getPropertyValue("position");
var top1 = getComputedStyle(d_nav_box, "top").getPropertyValue("top");

var position2 = getComputedStyle(m_nav_box, "position").getPropertyValue("position");
var top2 = getComputedStyle(m_nav_box, "top").getPropertyValue("top");
    
window.addEventListener("scroll", function(){
    	
	if(nav_stop.offsetTop <= window.pageYOffset) {

			d_nav_box.style.position = "fixed";
			d_nav_box.style.top = "0px"; 

			m_nav_box.style.position = "fixed";
			m_nav_box.style.top = "0px"; 
		}
		else {
			d_nav_box.style.position = position1;
			d_nav_box.style.top = top1;

			m_nav_box.style.position = position1;
			m_nav_box.style.top = top1;
			}

}, false); 

// ----------------------------------------------------------------------------

//  NAVIGATION

// ----------------------------------------------------------------------------

 // __________ Mobile Navigation _____________________________________________

var menu = document.querySelector(".menu");
var toggle_btn = document.querySelector(".hamburger");

toggle_btn.addEventListener("click", drop_down);

function drop_down(e) {

	e.preventDefault();
	menu.classList.toggle("show");
}

var menu_links = document.querySelector(".menu").children;

for (var j = 0; j < menu_links.length; j++) {

	navElem = menu_links[j];
	navElem.addEventListener("click", navClick);	
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {

    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// __________ Desktop Navigation _____________________________________________


var nav = document.querySelector(".navigation").children;
var previousSelected;

for (var i = 0; i < nav.length; i++) { // loop through them

	navElem = nav[i];

	navElem.addEventListener("click", navClick);
}

// __________ Navigation functions for both mobile & desktop _____________________

function navClick(e) {

	e.preventDefault();

	// __________ Navigation information change onclick _____________
 	
 	var currentlySelectedNav = document.querySelector(".content_container.main_visible");

	if (currentlySelectedNav !== null) {

		currentlySelectedNav.classList.remove("main_visible");
	}

	var navSelect = e.currentTarget; 

	var navInfo = navSelect.getAttribute("data-info-id");
	var targetNav = document.querySelector('.content_container[data-info-id="' + navInfo + '"]');
	targetNav.classList.add("main_visible");

	// __________ Navigation highlight when clicked _____________

	if (previousSelected == undefined) {

		previousSelected = navSelect;
	}

	else {

		if (previousSelected != navSelect) {

			previousSelected.classList.remove("current_link");
			navSelect.classList.add("current_link");

			previousSelected = navSelect;
		}
	}

	// __________ Move to position of content when nav is clicked _____________



	animate(); // call scroll function

};

// var trigger = document.querySelectorAll("li");
// trigger[0].addEventListener("click", animate);

var scrollY = 20; // current Y scroll position
var distance = 40; // number of pixels page will scroll per 20 milliseconds

var currentTarget = document.querySelector(".width");

function animate() {

	var currentY = window.pageYOffset;
 	var targetY = currentTarget.offsetTop; 
 	var bodyHeight = document.body.offsetHeight;
 	var yPos = currentY + window.innerHeight; 

 	var animator = window.setTimeout(animate, 20);

 	if (yPos > bodyHeight) { 
 		 					
 		window.clearTimeout(animator);
 	}
 	else {

 		if (currentY < targetY - distance) {

 			scrollY = currentY + distance;
 			window.scrollTo(0, scrollY);
 		}
 		else {
 			window.clearTimeout(animator);
 		}
 	}

 }











