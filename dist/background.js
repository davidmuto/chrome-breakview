// Generated by CoffeeScript 1.6.2
(function() {
  var onRequest;

  onRequest = function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    return sendResponse({});
  };

  chrome.extension.onRequest.addListener(onRequest);

}).call(this);