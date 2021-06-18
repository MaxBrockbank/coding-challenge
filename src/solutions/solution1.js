function SolutionOne(){
  if(window.iceCreamFlavors.length === 0){
    console.log('its 0')
    setTimeout(SolutionOne, 50)
  }
  window.iceCreamFlavors.forEach(flavor => {
    const element = document.createElement('h2');
    element.append(flavor);
    element.style.color = RandomColor();
    document.body.append(element);
  })
}

function RandomColor (){
  var num = Math.floor(Math.random()*16777215).toString(16);
  return`#${num}`
}
$(document).ready(SolutionOne());