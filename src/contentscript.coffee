getBreakpoints = ->
	breakpoints = []
	elements = document.getElementById('chrome-breakpoints').children
	breakpoints.push { name: x.name, value: x.value } for x in elements
	breakpoints

chrome.extension.onRequest.addListener (request, sender, sendResponse) ->
	if request.method is "popupLoaded"
		sendResponse { breakpoints: getBreakpoints() }
	else if request.method is "reload"
		sendResponse {}
		document.location.reload()

shouldShow = ->
	elem = document.getElementById("chrome-breakpoints")
	elem?

# start it all up if we should be shown
if shouldShow()
	chrome.extension.sendRequest {}, (response) ->