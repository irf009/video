const video = document.querySelector(`.video-container`);
const btn = document.querySelector(`.switch-btn`);
const preloader = document.querySelector(`.preloader`);

/*load*/
window.addEventListener(`load`, function (e) {
	preloader.classList.add(`hide-preloader`);
});

btn.addEventListener(`click`, function (e) {
	if (btn.classList.contains(`slide`)) {
		btn.classList.remove(`slide`);
		video.play();
	} else {
		btn.classList.add(`slide`);
		video.pause();
	}
});
