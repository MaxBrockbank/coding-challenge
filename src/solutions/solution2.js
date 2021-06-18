let object = {
  iInternal: window.iceCreamFlavors,
  iListener: function(val){
    val.forEach( val => {
      const div = document.createElement('div');
      div.style.textAlign = 'center';
      div.style.backgroundColor = RandomColor();
      const text = document.createElement('h2');
      text.append(val);
      div.append(text);
      document.body.append(div);
    })
  },
  set i(val) {
    this.iInternal = val;
    this.iListener(val);
  },
  get i(){
    return this.iInternal
  },
}

function Check(a){
if(window.iceCreamFlavors.length < 7){
  setTimeout(Check, 50)
} else {
  object.i = window.iceCreamFlavors
}
}

function RandomColor (){
var num = Math.floor(Math.random()*16777215).toString(16);
return`#${num}`
}

$(document).ready(()=>{
Check(object.i)
});