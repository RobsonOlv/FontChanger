// TODO: Create box.js
const hideBox = () => { box.style.display = 'none'; };
const showBox = ({ bottom, left, width, height }) => {
    box.style.left = left + width + 10 + 'px';
    box.style.bottom = bottom + height + 10 + 'px';
    box.style.display = 'flex';
};

// Creates app container with default configuration
const box = document.createElement('div');
box.style.backgroundColor = 'white';
box.id = 'font-changer-container';
box.innerHTML = 'Hey!';

// Adds app container to page
document.querySelector('body').appendChild(box);
hideBox();

let selected = [];

// Listens for selection event
window.onmouseup = () => {
    const selection = window.getSelection();
    selected = [];
    hideBox();

    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        if (range.toString().trim() === '') continue;
        
        const { parentNode } = range.startContainer;
        // TODO: Improve condition
        if (parentNode.innerHTML === range.toString()) {
            selected.push(parentNode);
        } else {
            const span = document.createElement('span');
            const content = range.extractContents();

            span.appendChild(content);
            range.insertNode(span);
            selected.push(span);
        }
    }

    if (selected.length > 0)
        showBox(selected[selected.length - 1].getBoundingClientRect());
};