const kuromiButton = document.getElementById("kuromiButton");
const kuromiIMG = document.getElementById("kuromiImg");
const options = document.getElementById("options");
const submitForm = document.getElementById("submitForm");


kuromiButton.addEventListener("click", function(){
    alert("Hey Kuromi!");
    document.body.style.backgroundColor = "rgb(0,0,0)"; 
    document.querySelector('header').style.color = "rgb(255,255,255)";
});

options.addEventListener("change", function(){
    // console.log(options.value);

    if (options.value === "1"){
        kuromiIMG.src = "https://m.media-amazon.com/images/I/31XzOcX34kL.__AC_SX300_SY300_QL70_FMwebp_.jpg";}
    else if (options.value === "2"){
        kuromiIMG.src = "https://m.media-amazon.com/images/I/51azdYXKU6L._AC_SY879_.jpg";}
    else if (options.value === "3") {
        kuromiIMG.src = "https://littlestickerstore.com/wp-content/uploads/2023/08/S2109503ae41744cf9e5ed187bfd2843fB.jpg"
    }
});

submitForm.addEventListener("submit", function(){
    alert("Form submitted");
});
