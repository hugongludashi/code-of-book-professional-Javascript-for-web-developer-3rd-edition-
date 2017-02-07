//creat table
var table = document.createElement("table");
table.border = "1";
table.width ="100%";

//creat tbody
var tbody = document.createElement("tbody");
table.appendChild(tbody);

//creat the first line
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1.1"));
tbody.rows[0].insertCell(1);
tbod.rows[0].cells[1].appendChild(document.createTextNode("Cell 2.1"));

//creat the second line
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1.2"));
tbody.rows[1].insertCell(1).appendChild(document.creatElement("Cell 2.2));

docment.body.appendChild(table);