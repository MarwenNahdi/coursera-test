var array =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i =0 ; i <= array.length; i++) {
	  var x = array[i].charAt(0).toLowerCase();
	if (x=="j") {
		speakbye(array[i]);
	}
	else{
		speakhello(array[i]);	
	}
}