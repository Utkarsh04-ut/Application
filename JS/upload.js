function uploadDoc() {
  // Get the value from upload form
  let fileName = document.getElementById("fileName").value;
  let doc = document.getElementById("upload").value;
  id = Math.floor(Math.random() * 100 + 1);
  console.log(fileName);
  console.log(doc);

  let documentData = JSON.parse(localStorage.getItem("documentData")) || [];
  // Push the data into the localstorage
  documentData.push({ fileName, doc, id });
  localStorage.setItem("documentData", JSON.stringify(documentData));
  dispData();
  document.querySelector("form").reset();
  document.getElementById("fname").focus();
  window.location.href = "documents.html";
}

function dispData() {
  console.log(localStorage.getItem("documentData"));
  // Display data in Manage Documents
  if (localStorage.getItem("documentData")) {
    output = document.getElementById("tbody");
    console.log(output);
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("documentData")).forEach((data) => {
      output.innerHTML += `
    <tr>
        <td style="height: 25px;">${data.fileName}</td>
        <td style="text-align: center ;">${data.doc}</td>
        <td style="text-align: center;"><a href="./edit.html?${data.id}" onclick="editUser(${data.id})">Edit </a>| <a href="./delete.html?${data.id}" onclick="deleteUser(${data.id})">Delete</a></td>

    </tr>
  
    `;
    });
  }
}
