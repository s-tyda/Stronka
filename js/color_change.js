function change_color(number){
	if (document.getElementById("but" + number).className === "but"){
 	   document.getElementById("but" + number).className = "but changed"
  } else {
   	 document.getElementById("but" + number).className = "but"
  }
}