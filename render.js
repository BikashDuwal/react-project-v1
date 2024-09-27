// to custom render an html built from javascript and working of react behind the scenes
// how does react render the html from js see here

// html are basically composed of tags attributes and inner html as a whole regareded as elemment 

// 1) create html element format 
 const component = {
  type : 'a', //here a tag is anchor tag for enabling href basic html can be any sort of tag  img, button, p1, h1, bla bla
  property : {  // its the attributes properties
    href: `https://www.google.com`,
    target:"_blank"
  }

 }

//  now make an function which makes the element form the compostion
function createElement (element, container) {   // 2) this function creates element 
   const newElement = document.createElement(element.type) // defines what is tag name 
  newElement.setAttribute('href', element.property.href)
  newElement.setAttribute('_blank', element.property.target)
  newElement.innerHTML = 'click to visit google'

  container.appendChild(newElement) // 3) append the created element to container
}

 const mainContainer = document.getElementById('root') // 4) select where shall we append

 createElement (component, mainContainer) // 5) this funcion will now append our custom component in main container

 