function toggleListener(event) {
    var data_link = event.target.getAttribute("data-emlink") // get the clicked element's data-emlink value
    visibles = document.querySelectorAll("[data-emlink=" + data_link + "]") // get the elements that match that value     
    var state_string = "false" // default state is false
    if (event.target.getAttribute("data-emvisible") == "false") state_string = "true" // toggle to true if already false 
    for (var i=0; i < visibles.length; i++) visibles[i].setAttribute("data-emvisible", state_string)
}
        
window.onload = function initialize() {
    var toggle_elements = document.querySelectorAll("[data-emtoggle]"); // all data-emtoggles
    var visibles = document.querySelectorAll("[data-emlink]"); // all data-emlinks        
    var string_type = "click" // default is click
    if (('ontouchstart' in window) || ('msmaxtouchpoints' in window.navigator)) string_type = "touchend"
    for (var i=0; i < toggle_elements.length; i++) toggle_elements[i].addEventListener(string_type, toggleListener, true)  //add listeners to data-emtoggle elements
    for (var i=0; i < visibles.length; i++) visibles[i].setAttribute("data-emvisible", "false") //initialize to false
}
