function myFunction() {
	let country= ["London", "India", "Japan", "Seattel", "China", "SanFrancisco", "Sydney"];
	let mySearch = document.getElementById("mySearch").value;
	for(let i=0;i<country.length; i++){
		if(mySearch==i){
			window.location.href = "file:///Users/chandanmahajan/Documents/docs/bharti_gupta/workspace/JavaScriptProject/src/webApp/cities.html";
 			return false;
		}
	}		
}

country.forEach(value=>{if(mySearch==value){
			window.location.href = "file:///Users/chandanmahajan/Documents/docs/bharti_gupta/workspace/JavaScriptProject/src/webApp/cities.html";
 			return false;
		}
		})