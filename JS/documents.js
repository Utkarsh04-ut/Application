function dispData() {
  console.log(localStorage.getItem("documentData"));
  // Display data on Manage documents
  if (localStorage.getItem("documentData")) {
    output = document.getElementById("tbody");
    console.log(output);
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("documentData")).forEach((data) => {
      output.innerHTML += `
          <tr>
              <td style="height: 25px;">${data.fileName}</td>
              <td style="text-align: center ;">${data.doc}</td>
              <td style="text-align: center;"><a href="./editDoc.html?${data.id}" onclick="editUser(${data.id})" style="color:black; text-decoration:none;">Edit </a>| <a href="./deleteDoc.html?${data.id}" onclick="deleteUser(${data.id})" style="color:black; text-decoration:none;">Delete </a><b>|</b> Share</td>
              
          </tr>
        
          `;
    });
  }
}
dispData();
