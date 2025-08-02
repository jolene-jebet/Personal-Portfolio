//toggle icon navbar
let menuIcon = document.queryselector('#menu-icon');
let navbar = document.queryselector('navbar');

menuIcon.onclick =() => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

//scroll sections
 Let sections = document.queryselectorAll('section');
 Let navLinks = document.queryselectorAll('header nav a');
window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrolly;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id =sec.getAtribute('id'));
	};

		if(top >=offset && top < offset + height) {
			//active navbar links
			navLinks.forEach(link => 
				links.classList.remove('active'));
				document.queryselector('header nav a[href*=' +id + ']').classList.add('active');
			};
			//active section for animation on scroll
			sec.classList.add('show-animate');
		
		//if want to use animation that repeats on scroll use this
		else {
			sec.classList.remove('show-animate');
		};
	
	//sticky header
	Let header = document.queryselector('header');
	header.classList.toggle('sticky', window.scrolly >100);
	//remove toggle icon and navbar when click navbar links (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
	//animate footer on scroll
	let footer = document.queryselector('footer');

	footer.classList.toggle('show-animate', this.innerHeight +this.scrolly >= document.scrollingElement.scrollHeight);
