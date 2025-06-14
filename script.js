function volume_sphere(e) {
    //Write your code here
    e.preventDefault();

	let radius = Number(document.getElementById("radius").value);
	let output = document.getElementById("volume")
	if (radius < 0 || isNaN(radius)) {
		output.value = "NaN";
	}else {
		let volume = (4/3) * Math.PI*Math.pow(radius,3);
	// alert(radius,volume)
	output.value = volume.toFixed(4);
	}
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
