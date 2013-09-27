# emToggle, a minimalist Javascript and CSS toggle for HTML Elements

# How it works:

1. Plug in the CSS and Javascript files to the HTML page you are working on.
2. Three data properties are used to toggle elements:
    data-emtoggle
    data-emlink
    data-emvisible

3. On the clickable or touchable toggle element, add the HTML code as follows:    
    <button data-emlink="somemenu" data-emtoggle>Menu</button>

4. On the invisible menu element, add the following HTML code:
    <div data-emlink="somemenu">Menu things here.</div>

## Notes: 

On initial window load, all non data-emtoggle elements with data-emlink values will be invisible (CSS display: none)

You can have more than two elements with the same data-emlink values. They will all toggle with their data-emtoggle element(s).

Also, classes or ids are separate from the data-emlink values. This, hopefully, will separate CSS styling from toggle functions.
