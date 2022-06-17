chrome.runtime.onMessage.addListener(msg => {
    if (msg === 'Clicked') {
        document.body.contentEditable = 'true'
        alert("Empieze a editar.")
    }
})