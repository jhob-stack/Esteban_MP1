function showTime() {
	const currentTime = document.getElementById('currentTime');
	if (currentTime) {
		currentTime.innerHTML = new Date().toUTCString();
	}
}
showTime();
setInterval(showTime, 1000);

document.querySelectorAll('.row[data-hover]').forEach(function (image) {
	const originalSrc = image.src;
	const hoverSrc = image.dataset.hover;

	image.addEventListener('mouseenter', function () {
		image.src = hoverSrc;
	});
	image.addEventListener('mouseleave', function () {
		image.src = originalSrc;
	});
});
