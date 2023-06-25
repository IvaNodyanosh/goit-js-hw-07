import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const items = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join('');

gallery.innerHTML = items;

new SimpleLightbox('.gallery a', { captionData: "alt", captionDelay: 250, });

gallery.addEventListener("click", clickPhoto)

const clickPhoto = function (event) {

    if (!(event.target.nodeName === "IMG")) {
        return
    }

    event.preventDefault()



}


