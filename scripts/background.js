chrome.action.onClicked.addListener((tab) => {
  console.log(tab)
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['scripts/execute.js']
  });
});