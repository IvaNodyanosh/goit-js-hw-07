import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const items = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join('');

gallery.innerHTML = items;

let instance;


const onImageClickOpen = function (event) {
  const source = event.target.dataset.source
  event.preventDefault()
  


  if (!(event.target.nodeName === "IMG")) {
    return
  }
  instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`)
  console.log(event.target.dataset)
  
  instance.show()


}

const onImageClickClose = function (event) {
    if (event.code === "Escape") {
      instance.close()
    }
}

window.addEventListener("keydown", event => onImageClickClose(event))

window.removeEventListener("keydown", event => onImageClickClose(event))

gallery.addEventListener("click", event => onImageClickOpen(event))




