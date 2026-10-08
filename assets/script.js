const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");

left.addEventListener("click", () => {
	if (currentSlide > 0) {
		currentSlide--;
	} else {
		currentSlide = slides.length - 1;
	}
	updateSlide(currentSlide);
	console.log("left arrow clicked");
})

right.addEventListener("click", () => {
	if (currentSlide < slides.length - 1) {
		currentSlide++;
	} else {
		currentSlide = 0;
	}
	updateSlide(currentSlide);
	console.log("right arrow clicked");
})

const dotsContainer = document.querySelector(".dots");

slides.forEach(() => {
	dotsContainer.innerHTML += `<span class="dot"></span>`;
})

function updateSlide(index) {
	const banner = document.getElementById("banner");
	const bannerImg = banner.querySelector(".banner-img");
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	banner.querySelector("p").innerHTML = slides[index].tagLine;

	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

updateSlide(currentSlide);