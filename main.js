var names = ["Starting page","Iron Man","Batman","Deku","All Might"];
var images= ["POG.png","Iron Man.png","batman.png","Deku.png","All Might.png"]
var i  = 0;

function next(){
    document.getElementById("img1").src = images[i]
  
    document.getElementById("label").innerHTML = names[i]
if (i > 3){
    i = 0;

}
i++;
}