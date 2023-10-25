function insert_Row() {
    //Write your code here
	// let	table = document.getElementById("sampleTable")
	// let tr = docuent.createElement("tr");
	// let td = document.createElement("td");
	// let t1 = document.createElement("td");
	// td.innerText = "hello"	
	// t1.innerText = "hello"	
	//  tr.appendChild(td);
 //    tr.appendChild(t1);
 //    table.appendChild(tr);
	var table = document.getElementById('sampleTable');
	var newRow = table.insertRow(0);

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);

	cell1.innerHTML = 'New Cell1';
	cell2.innerHTML = 'New Cell2';
}
