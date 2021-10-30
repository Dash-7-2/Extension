chrome.runtime.onMessage.addListener(function(request){
    addText(request)
})

function addText(request){
    doxument.body.innerHTML += request
}