const Editor = toastui.Editor;

window.onload = () => {
    const editor = new Editor({
        el: document.querySelector('#editor'),
        height: '800px',
        previewStyle: 'vertical',
        previewHighlight: true,
        initialEditType: 'markdown',
        language: 'ko',
        usageStatistics: false,
        toolbarItems: [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task'],   // indent, outdent
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            // ['scrollSync']
        ],
        hideModeSwitch: true
    });
}