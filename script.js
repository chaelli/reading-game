const words = [
    { word: "Planeten", image: "images/planets.jpg" },
    { word: "Weltraum", image: "images/space.jpg" },
    { word: "Autos", image: "images/cars.jpg" },
    { word: "Farben", image: "images/colors.jpg" },
    { word: "Sterne", image: "images/stars.jpg" },
    { word: "Mond", image: "images/moon.jpg" },
    { word: "Rakete", image: "images/rocket.jpg" },
    { word: "Astronaut", image: "images/astronaut.jpg" },
    { word: "Sonne", image: "images/sun.jpg" },
    { word: "Komet", image: "images/comet.jpg" },
    { word: "Satellit", image: "images/satellite.jpg" },
    { word: "Galaxie", image: "images/galaxy.jpg" },
    { word: "Meteor", image: "images/meteor.jpg" },
    { word: "Raumschiff", image: "images/spaceship.jpg" },
    { word: "Schwarz", image: "images/black.jpg" },
    { word: "Weiß", image: "images/white.jpg" },
    { word: "Rot", image: "images/red.jpg" },
    { word: "Blau", image: "images/blue.jpg" },
    { word: "Grün", image: "images/green.jpg" },
    { word: "Gelb", image: "images/yellow.jpg" }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function displayRandomWordAndImages() {
    const randomIndex = getRandomInt(words.length);
    const randomWord = words[randomIndex];
    const otherImages = words.filter((_, index) => index !== randomIndex).map(item => item.image);
    const images = [randomWord.image, ...otherImages.slice(0, 2)].sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = `
        <div id="word">${randomWord.word}</div>
        <div class="image-container">
            ${images.map(image => `<img src="${image}" alt="image">`).join('')}
        </div>
    `;

    const imageElements = document.querySelectorAll(".image-container img");
    imageElements.forEach(img => {
        img.addEventListener("click", () => {
            if (img.src.includes(randomWord.image)) {
                img.classList.add("correct");
                setTimeout(() => {
                    displayRandomWordAndImages();
                }, 1000);
            } else {
                img.classList.add("incorrect");
                setTimeout(() => {
                    img.classList.remove("incorrect");
                }, 1000);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayRandomWordAndImages();
});
