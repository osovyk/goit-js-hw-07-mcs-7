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

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.alignItems = "center";
gallery.style.justifyContent = "space-between";
gallery.style.listStyle = "none";
gallery.style.width = "1128px";
gallery.style.margin = "0 auto";
gallery.style.padding = "0";
gallery.style.rowGap = "48px";
gallery.style.colunmGap = "24px";

gallery.insertAdjacentHTML(
    'beforeend',
    images.map(({url, alt}) =>
        `<li style="
            margin: 0; 
            padding: 0; 
            width: 360px;
            height: 300px;">
            <img src="${url}" alt="${alt}" style="display: block; width: 100%; height: 100%; object-fit: cover;">
        </li>`
    ).join('')
);

