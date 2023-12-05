const container = document.querySelector('#container');
const cats = [
    'imgs/cat1.jpg',
    'imgs/cat2.jpeg',
    'imgs/cat3.jpeg',
    'imgs/cat4.jpeg',
    'imgs/cat5.jpeg',
    'imgs/cat6.jpg',
    'imgs/cat7.jpg',
    'imgs/cat8.jpeg',
    'imgs/cat9.jpg',
    'imgs/cat10.jpg',
    'imgs/cat11.jpg',
    'imgs/cat12.jpeg',
    'imgs/cat13.jpg',
    'imgs/cat14.jpg',
    'imgs/cat15.jpg',
]

function loadImage(){
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    const img = document.createElement('img');
    i = Math.floor(Math.random() * cats.length);
    img.src = cats[i];
    img.classList.add('cat');
    imgWrapper.appendChild(img);
    container.appendChild(imgWrapper);
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        loadImage();
    }
})

loadImage();
