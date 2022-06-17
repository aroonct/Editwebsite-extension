var msg = "Clicked"

document.getElementById('empezar').addEventListener('click', function () {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, msg);
        })
    })

})