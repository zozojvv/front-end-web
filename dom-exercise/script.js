document.getElementById('btn1').addEventListener('click', function() {
    const COUNTH2TAGS = document.getElementsByTagName('h2').length;
    // console.log(COUNTH2TAGS);
    document.getElementById('div1').innerText = `There are ${COUNTH2TAGS} h2 tags on this page.`;
});

document.getElementById('btn2').addEventListener('click', function() {
    const PT1TAGS = document.getElementById('pt1').children.length;
    // console.log(PT1TAGS);
    document.getElementById('div2').innerText = `There are ${PT1TAGS} inside of the "pt1" ID.`;
});


document.getElementById('btn3').addEventListener('click', function() {
    const PT2TAGS = document.getElementById('pt2').children.length;
    // console.log(PT2TAGS);
    document.getElementById('div3').innerText = `There are ${PT2TAGS} inside of the "pt2" ID.`;
});

// console.log("hello world");