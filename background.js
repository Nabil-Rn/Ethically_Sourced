function openTab(){
    
    var newTab = browser.tabs.create({
        url:'index.html',
        active:true
    })
}

browser.browserAction.onClicked.addListener(openTab)
