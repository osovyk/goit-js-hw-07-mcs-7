import { applyStyles } from './utils.js';

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
    {
        url:
            'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Elephant Beside on Baby Elephant',
    },
    {
        url:
            'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Blue Green and Orange Parrot',
    },
    {
        url:
            'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Zebras on Zebra',
    },
];

const gallery = document.querySelector('ul.gallery');

gallery.insertAdjacentHTML(
  'beforeend',
  images.map(({ url, alt }) =>
    `<li class="gallery-item">
            <img src="${url}" alt="${alt}">
        </li>`
  ).join('')
);


applyStyles(gallery, {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    listStyle: 'none',
    width: '1128px',
    margin: '0 auto',
    padding: '0',
    rowGap: '48px',
    columnGap: '24px',
});

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    applyStyles(item, {
        margin: '0',
        padding: '0',
        width: '360px',
        height: '300px',
    });

    const img = item.querySelector('img');
    applyStyles(img, {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    });
});
