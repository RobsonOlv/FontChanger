window.onmouseup = () => {
    // TODO: Show box for editting text

    const selection = window.getSelection();
    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        const content = range.extractContents();

        const span = document.createElement('span');
        // TODO: Add style to text based on what the user asked for
        span.appendChild(content);

        range.insertNode(span);
    }
};