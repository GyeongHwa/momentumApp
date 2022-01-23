const images = ["2.jpeg", "4.jpeg", "5.jpeg", "8.jpeg", "10.jpeg", "12.jpeg", "14.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "24.jpeg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

$("body").css("background-image", `url(img/${chosenImage})`);