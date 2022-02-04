function dispData(data) {
  // console.log(localStorage.getItem("formData"));
  // Showing data in UserList
  console.log(data)
  var tb = document.getElementById("tbody");

  for (var i = 0; i < data.length; i++) {
     var row = ` <tr> <td>${data[i]._id}</td>                    <td>${data[i].name}</td>                    <td style="text-align: center;">${data[i].email}</td>                    <td style="text-align: center;"><a href="editUser.html?id=${data[i].id}" style="margin: 1rem;"> Edit</a> | <a onclick="deleteUser(${data[i].id})"href="#" style="margin: 1rem;"> Delete </a></td>                   </tr>`  
           tb.innerHTML += row
  }
}
dispData();
