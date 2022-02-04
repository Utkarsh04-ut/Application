function editUser() {
  // Getting user id
  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);

  // Showing previous values
  var formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);
  formData.forEach((element) => {
    console.log(element);
    if (element.id == getId) {
      console.log(element);
      document.getElementById("name").value = element.fname;
      document.getElementById("email").value = element.email;
    }
  });
  updateUser();
}
editUser();

function updateUser() {
  console.log("Updated");
  var fname = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  console.log(fname);
  console.log(email);

  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);

  var formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);

  // Updating new values
  formData.forEach((element) => {
    console.log(element);
    if (element.id == getId) {
      console.log(element);
      element.fname = fname;
      element.email = email;
      window.localStorage.setItem("formData", JSON.stringify(formData));
      formData = JSON.parse(window.localStorage.getItem("formData"));
    }
  });
}
