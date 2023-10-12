// reference: https://stackoverflow.com/questions/16349490/html-css-buttons-that-scroll-down-to-different-div-sections-on-a-webpage

function scrollToSection() {
    document.querySelector("#down").scrollIntoView({ 
        behavior: 'smooth' 
    });
}