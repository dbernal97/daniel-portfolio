
const elements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.classList.add('animate');
        }

        let path = document.querySelector('path')
        let pathLength = path.getTotalLength()

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

        var drawLength = pathLength * scrollPercentage

        path.style.strokeDashoffset = pathLength - drawLength
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);


