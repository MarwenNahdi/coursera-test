var array =["jack" ,"kayn","John","jayce","yaakov"];
for (var i =0 ; i <= array.length; i++) {
	  var x = array[i].charAt(0).toLowerCase();
	if (x=="j") {
		speakbye(array[i]);
	}
	else{
		speakhello(array[i]);	
	}
}