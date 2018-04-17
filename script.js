var heightOfThree = prompt("Podaj wysokosc drzewa");
function drawTree(heightOfThree){
	for(var i = heightOfThree; i >= 1; i--){
		var star = "";
		for(var j=i; j <= heightOfThree; j++ ){
			star += '*';
			
		}
		console.log(star);
		console.log("\n");
		
	}
}
drawTree(heightOfThree);