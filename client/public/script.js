import { products } from '/data.js';


const divElement = (content) => {
  return `<div>${content}</div>`;
}

const trackElement = (trackData) => {
  return divElement(`
    <p>track name: ${trackData.name}</p>
    <p>composer: ${trackData.composer}</p>
    <p>length: ${trackData.milliseconds}</p>
  `)
}

const tracksElement = (tracksArray) => { 
  return tracksArray.map(track => trackElement(track)).join("");
}


const albumElement = (albumData) => {
  // console.log(product.details)
  const tracksHtml = tracksElement(albumData.details);

  return divElement(`
      <h2>${albumData.id}</h2>
      <p class="album-name">album name: ${albumData.name}</p>
      ${divElement(tracksHtml)}
      <h3>price: ${albumData.price}</h3>
    `);
}

const loadEvent = function () {

  // Write your JavaScript code after this line
  console.log(products[0]);

  const rootElement = document.querySelector("#root");
  // rootElement.insertAdjacentHTML("beforeend", divElement(products[0].name))

  /* for (let i = 0; i < products.length; i++) {
    rootElement.insertAdjacentHTML("beforeend", divElement(products[i].name));
  } */

  /* products.forEach(product => rootElement.insertAdjacentHTML("beforeend", divElement(product.name))); */

  const albumsHtml = products.map(album => albumElement(album)).join("");
  rootElement.insertAdjacentHTML("beforeend", albumsHtml);

  // Write your JavaScript code before this line
}

window.addEventListener("load", loadEvent);
