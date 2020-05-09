

// Check if Data attribute is in view.
//Handling event on scroll, remove or add data attribute for furture actions.



let isInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}

// export const escapeButtonTopScroll = () => {
//     var aboutContainer = document.querySelector('.aboutContainer');
//     let body = document.querySelector("body");
//     let escapeBtn = document.querySelector(".escape-btn");
//     let raf =
//         window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         function (callback) {
//             window.setTimeout(callback, 1000 / 60)
//         }
//     const theScroll = () => raf(() => {
//         window.scroll({ top: aboutContainer.offsetTop - 100, behavior: 'smooth' });
//         body.classList.remove('stop-scrolling')
//     })
//         escapeBtn.addEventListener("click", theScroll, false)
// };



export const inViewHandler = () => {

    var ivaobjects = document.querySelectorAll('[data-inviewanimation]')

    const animationHandler = () => {
        for (var x = 0; x < ivaobjects.length; x++) {
            if (isInView(ivaobjects[x]) && ivaobjects[x].hasAttribute("data-inviewanimation")) {
                ivaobjects[x].removeAttribute("data-inviewanimation")
            }
            else if (isInView(ivaobjects[x]) && !ivaobjects[x].hasAttribute("data-inviewanimation")) {
                null;
            }
            else {
                ivaobjects[x].setAttribute("data-inviewanimation", "true")
            }
        }
    }
    animationHandler()
    window.addEventListener('scroll', animationHandler)
}
export const setActiveClass = () => {

    var dots = document.querySelectorAll('.dot')
    var allDotsId = [];
    var allId = [];
    for (var i = 0; i < dots.length; i++) {
        allDotsId.push(dots[i].getAttribute("href"));
    }
    for (var i = 0; i < dots.length; i++) {
        allId.push(document.querySelector(`${allDotsId[i]}`))
    }
    console.log(allId)

    const activeClassHandler = () => {
        for (var x = 0; x < allId.length; x++) {
            if (isInView(allId[x])) {
                dots[x].classList.add("active");
            }
            else if (!isInView(allId[x])) {
                dots[x].classList.remove("active");
            }
            else {
                null;
            }
        }
    }
    setInterval(() => {
        activeClassHandler()

    }, 1000);
}


// export const scrollIntoView = () => {
//     var reconContainer = document.querySelectorAll('.recon-container');
//     var recon = document.querySelectorAll('.recon')
//     var parallaxContainer = document.querySelector('.work');
//     var japan = document.querySelector('.japan');

//     let raf =
//         window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         function (callback) {
//             window.setTimeout(callback, 1000 / 60)
//         }

//     let count = new Array(recon.length).fill(0);
//     var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//     const handler = (x) => raf(() => {
//         window.scroll({ top: reconContainer[x].offsetTop, behavior: 'smooth' });
//     });

//     function handleTrigger() {
//         let body = document.querySelector("body");
//         var parallax = document.querySelector('.parallax-container');

//         for (var x = 0; x < recon.length; x++) {
//             if (count[x] < 1 && isInView(recon[x]) && recon[x].hasAttribute('class') && isInView(reconContainer[x])) {
//                 recon[x].removeAttribute("class");
//                 handler(x);
//                 count[x]++

//             }
//             else if (count[x] > 0 && !isInView(reconContainer[x]) && !recon[x].hasAttribute('class')) {
//                 recon[x].setAttribute("class", "recon");
//                 count[x] = 0;
//             }
//             else {

//                 null
//             }
//         }

//         var aboutContainer = document.querySelector('.aboutContainer');
//         if (recon[0].hasAttribute("class") === false && parallax.offsetTop === 0 && isInView(aboutContainer) === false) {
//             body.setAttribute("class", "stop-scrolling");
//         }
//         if (parallax.scrollHeight - parallax.scrollTop === parallax.clientHeight) {
//             body.removeAttribute("class");
//         }
//     }
//     window.addEventListener('scroll', handleTrigger, false);
// }
