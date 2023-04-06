const imagContainer = document.querySelector('.image-content');

imagContainer.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/200
        const y = (window.innerHeight - e.pageY*speed)/200

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};

const heading = document.querySelector('#name');
heading.addEventListener('click', function() {
    heading.style.opacity = 0.5;
});