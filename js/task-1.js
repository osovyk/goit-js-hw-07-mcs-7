import { applyStyles } from './utils.js';

const refs = {
    categories: document.querySelectorAll('li.item'),
};

console.log(`Number of categories: ${refs.categories.length}`);

refs.categories.forEach(category => {
    const title = category.querySelector('h2');
    const elements = category.querySelectorAll('ul > li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);

    applyStyles(category, {
        backgroundColor: '#F6F6FE',
        borderRadius: '8px',
        listStyle: 'none',
        marginBottom: '24px',
        padding: '16px',
        width: '392px',
        fontFamily: 'Montserrat, sans-serif',
    });

    applyStyles(title, {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '1.33',
        letterSpacing: '4%',
        color: '#2E2F42',
        marginBottom: '16px',
    });

    const childList = category.querySelector('ul');
    if (childList) {
        applyStyles(childList, {
            listStyle: 'none',
            padding: '0',
            margin: '0',
        });

        elements.forEach(childListItem => {
            applyStyles(childListItem, {
                listStyle: 'none',
                padding: '8px 16px',
                marginBottom: '8px',
                border: '1px solid #808080',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '1.33',
                letterSpacing: '4%',
                color: '#2E2F42',
            });
        });
    }
});
