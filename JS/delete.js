function dispData() {
  console.log(localStorage.getItem("formData"));

  if (localStorage.getItem("formData")) {
    output = document.getElementById("tbody");
    console.log(output);
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("formData")).forEach((data) => {
      output.innerHTML += `
            <tr>
                <td style="height: 25px;">${data.fname}</td>
                <td style="text-align: center ;">${data.email}</td>
                <td style="text-align: center;"><a href="./edituser.html">Edit </a>| <a href="./delete.html" onclick="deleteUser(${data})">Delete</a></td>

            </tr>
          
            `;
    });
  }
}
dispData();

function deleteUser() {
  // Getting user id
  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);
  var activeId = [];
  activeId.push(getId);
  var formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);
  var confirmMessage = confirm("Do you really want to delete?");
  // Delteting values
  if (confirmMessage) {
    formData.forEach(function (value, i) {
      if (value.id == getId) {
        formData.splice(i, 1);
      }
    });
    window.location.href = "userList.html";
    window.localStorage.setItem("formData", JSON.stringify(formData));
    formData = JSON.parse(window.localStorage.getItem("formData"));
  }
}
deleteUser();
