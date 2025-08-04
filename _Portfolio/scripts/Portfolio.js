// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // added dot before class name

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY; // corrected spelling from scrolly
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id'); // corrected from getAtribute and extra parenthesis

		if (top >= offset && top < offset + height) {
			// active navbar links
			navLinks.forEach(link => {
				link.classList.remove('active'); // corrected 'links' to 'link'
			});
			document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			
			// active section for animation on scroll
			sec.classList.add('show-animate');
		}
		// if want to use animation that repeats on scroll use this
		else {
			sec.classList.remove('show-animate');
		}
	});

	// sticky header
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100); // corrected scrollY

	// remove toggle icon and navbar when click navbar links (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');

	// animate footer on scroll
	let footer = document.querySelector('footer');
	footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
};
