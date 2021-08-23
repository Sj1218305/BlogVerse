window.onscroll = () =>{
	myFunction();
};
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var counter = 0;
var urlCounter = 0;
var divCounter = 0;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var el = document.getElementById('content');

el.addEventListener("keyup",function(event) { 
  var div = el.getElementsByTagName('div');
  if(event.keyCode === 13) {
    event.preventDefault();
    var node = document.createElement('p');
    console.log(div[divCounter]);
    el.insertBefore(node, div[divCounter]);
    divCounter++;
  }
})


const toolkit = document.querySelector(".toolkit");

toolkit.addEventListener("click", function(event){
 const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ? event.target.getAttribute("data-command"): null;
  if(command === null ) return;  
  if(command == "ol" || command == "ul"){
    let range = window.getSelection().getRangeAt(0);
    const oldConent = document.createTextNode(range.toString());
    const newParentElement = document.createElement(command);
    const newChildElement =  document.createElement("li");
    newParentElement.appendChild(newChildElement);
    newChildElement.append(oldConent);
    range.deleteContents();
    range.insertNode(newParentElement);
  }else if (command == "blockquote"){
    let range = window.getSelection().getRangeAt(0);
    const oldConent = document.createTextNode(range.toString());
    const newElement = document.createElement(command);
    newElement.append(oldConent);
    range.deleteContents();
    range.insertNode(newElement);
    var element = document.getElementsByTagName("blockquote")[counter];
    element.style.paddingLeft = "8px";
    element.style.borderLeft = "10px solid";
    element.style.borderImage = "linear-gradient(to bottom, #ff7a18,#af002d,#319197)1 100%";
    counter++;  
  }
  else {
  	let range = window.getSelection().getRangeAt(0);
  	const oldConent = document.createTextNode(range.toString());
  	const newElement = document.createElement(command);
  	newElement.append(oldConent);
  	range.deleteContents();
  	range.insertNode(newElement);
  }
});	

function openLinkModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  let range = window.getSelection().getRangeAt(0);
  const oldContent = document.createTextNode(range.toString());
  var newElement = document.createElement('a');
  newElement.append(oldContent);
  newElement.setAttribute("id",urlCounter);
  window.newElement = newElement;
  window.range = range;
  document.getElementById("LinkBtn").addEventListener("click",linkFunction);
}
    
function linkFunction(){
  var linkBox  = document.getElementsByTagName("input")[0];
  var linkVal = linkBox.value;
  window.newElement.setAttribute("href", linkVal);
  window.range.deleteContents();
  window.range.insertNode(window.newElement);
  urlCounter++;
  closemodal();
};

function closemodal() {
  var modal = document.getElementById("myModal");
  document.getElementById("LinkBtn").removeEventListener("click",linkFunction);
  modal.style.display = "none";
}
