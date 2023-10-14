browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.active) {
        alert("Dolphins are COOL!!!!!! ");
    }
});