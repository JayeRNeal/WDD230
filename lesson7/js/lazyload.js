// gets all the imgs with data-scr attribute
let imagesToLoad = document.querySelectorAll('img[data-src]')



// changes the src image path to the image path found in data-src
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src')); // changes the src path to the data-src path
    image.onload = () => {image.removeAttribute('data-src') // once data-src path has been plassed deletes the data-src attribute
    };
  };

  // options that will determine when the image is visible
  const imgOptions = {
      threshold: 1, //0 fast 1 slows it down
      rootMargin: "0px 0px -100px 0px" //used -100 so you can almost scroll past the image before it loads
  };

  // callback function that happens when the image is observed
  const intersectionCallback = (items, observer) => {
      items.forEach((item) => {
          if(item.isIntersecting) {
              loadImages(item.target);
              observer.unobserve(item.target);
          }
      });
}

// checks to see if the intersectionObserver is supported by the browser
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(intersectionCallback, imgOptions);
  // for each image, observe the image with the observer
  imagesToLoad.forEach((img) => {
      observer.observe(img)
  });
} else { // if intersectionObserver is not supported we load the images right away
  imagesToLoad.forEach((img) => {
      loadImages(img);
  });
}