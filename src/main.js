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

// Listens for selection event
window.onmouseup = () => {
    const selection = window.getSelection();
    showBox(selection.getRangeAt(selection.rangeCount - 1).getBoundingClientRect());

    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        const content = range.extractContents();
        console.log(content);

        const span = document.createElement('span');
        // TODO: Add style to text based on what the user asked for
        span.appendChild(content);

        range.insertNode(span);
    }
};