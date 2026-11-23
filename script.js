document.addEventListener('DOMContentLoaded',()=> {
    const track = document.getElementById('carouseltracker');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.categorycard'));
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('nex');
    const status = document.getElementById('carouselstatus');
    const itemsPerFrame = 4;
    const step = 1;
    let startIndex = 0;

    function updateCarousel(){
        const lastStart = Math.max(0, cards.length - itemsPerFrame);
        startIndex= Math.min(startIndex, lastStart);

        if (cards.length > 0){ 
        const offset = cards[startIndex].offsetLeft-cards[0].offsetLeft;
        track.style.transform = `translateX(-${offset}px)`;
        }

        prevBtn.disabled = startIndex ===0;
        nextBtn.disabled = startIndex ===lastStart;

        
    }

nextBtn.addEventListener('click', () =>{
const lastStart = Math.max(0, cards.length -itemsPerFrame);
startIndex = Math.min(startIndex+step, lastStart);
updateCarousel();
});

prevBtn.addEventListener('click', ()=> {
    startIndex = Math.max(startIndex - step, 0);
    updateCarousel();

});

window.addEventListener('resize', updateCarousel);
updateCarousel();

});