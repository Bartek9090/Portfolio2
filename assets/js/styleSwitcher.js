// toggle style switcher

const styleSwitcherToggler = document.querySelector(".styleSwitcherToggler");
styleSwitcherToggler.addEventListener('click', ()=>{
document.querySelector('.styleSwitcher').classList.toggle("open")})


// hide style switcher
window.addEventListener("scroll", () =>{
if(document.querySelector(".styleSwitcher").classList.contains('open')){
	document.querySelector(".styleSwitcher").classList.remove('open')
}
})

// Color switcher on my own 2

// Listen for clicks on .color-option elements, grab value from data attribute and update --primary-color 

document.addEventListener('click', (e) => {
	const colorOption = e.target.closest('.color-option');
	if (!colorOption) return;
	
	// unselect currently selected color options
	document.querySelectorAll('.color-option').forEach(colorOption => colorOption.classList.remove('is-selected'));
	colorOption.classList.add('is-selected');
	
	const color = colorOption.dataset.color;
	
	let root = document.documentElement;
	let btn = document.querySelector(".btn")
	root.style.setProperty('--primary-color', color);
	btn.style.setProperty('--primary-color', color);
	
  });