const ncageImages = [
    "https://i.imgur.com/9uXv6li.jpg",
    "https://i.imgur.com/N0oMyrU.png",
    "https://i.imgur.com/qLE7JAn.jpg",
    "https://i.imgur.com/7jTzFHI.jpg",
    "https://i.imgur.com/XaY97wP.jpg",
    "https://i.imgur.com/xr2utlZ.jpg",
    "https://i.imgur.com/FEIzEZg.png",
    "https://i.imgur.com/30rlY9H.jpg",
    "https://i.imgur.com/bzEZobw.png",
    "https://i.imgur.com/lrtPZiM.png",
    "https://i.imgur.com/9hhIATP.jpg",
    "https://i.imgur.com/7FRrfqd.png",
    "https://i.imgur.com/AAXeJYQ.png",
    "https://i.imgur.com/yDLQXzL.png",
    "https://i.imgur.com/zu4qJkV.jpg",
    "https://i.imgur.com/MOQZVzd.jpg",
    "https://i.imgur.com/BiaW8e4.jpg",
    "https://i.imgur.com/Zl77xwA.png",
    "https://i.imgur.com/W7Uv2aX.png",
    "https://i.imgur.com/paaa4pf.jpg",
    "https://i.imgur.com/FokfpbG.jpg",
    "https://i.imgur.com/LTKvT5w.png",
    "https://i.imgur.com/Mqm8bXr.png",
    "https://i.imgur.com/0UTPjUP.jpg",
    "https://i.imgur.com/cN4iWnd.jpg",
    "https://i.imgur.com/LjhGLeH.jpg",
    "https://i.imgur.com/EVxrSUk.jpg",
    "https://i.imgur.com/yB74BmO.jpg",
    "https://i.imgur.com/NxNpD6s.jpg",
    "https://i.imgur.com/xKbUVEp.jpg",
    "https://i.imgur.com/E5bJW46.jpg",
    "https://i.imgur.com/2q2znyG.jpg",
    "https://i.imgur.com/xdTyOe3.png",
    "https://i.imgur.com/RL47Y4i.jpg",
    "https://i.imgur.com/DIjjS0L.jpg",
    "https://i.imgur.com/lAdstAQ.jpg",
    "https://i.imgur.com/HTljWKs.jpg",
    "https://i.imgur.com/uHHtzuz.jpg",
    "https://i.imgur.com/QmsaANf.jpg",
    "https://i.imgur.com/ISOhnRT.jpg",
    "https://i.imgur.com/a29WFQz.jpg",
    "https://i.imgur.com/J3l800U.jpg",
    "https://i.imgur.com/ixCmrS9.jpg",
    "https://i.imgur.com/fkcITz0.jpg",
    "https://i.imgur.com/Kz5yQhK.jpg"
];

function replaceImages() {
    const percentage = 2 / 100;
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (Math.random() < percentage) {
            const randomIndex = Math.floor(Math.random() * ncageImages.length);
            img.src = ncageImages[randomIndex];

        }
    });
}

setTimeout(replaceImages, 50);
