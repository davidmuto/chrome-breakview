// Generated by CoffeeScript 1.6.2
chrome.tabs.getSelected(null, function(tab) {
  return chrome.tabs.sendRequest(tab.id, {
    method: "popupLoaded",
    tabid: tab.id
  }, function(response) {
    document.getElementById("title").innerHTML = "Aha!";
    return console.log("Content Script returned to me");
  });
});
