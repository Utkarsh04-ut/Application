function updateUser() {
  console.log("Updated");
  fileName = document.getElementById("fileName").value;
  console.log(fileName);
  // Logic to get Id from URL
  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);

  var documentData = JSON.parse(localStorage.getItem("documentData"));
  console.log(documentData);

  // Showing previous data
  documentData.forEach((element) => {
    console.log(element);
    if (element.id == getId) {
      console.log(element);
      element.fileName = fileName;

      window.localStorage.setItem("documentData", JSON.stringify(documentData));
      documentData = JSON.parse(window.localStorage.getItem("documentData"));
    }
  });
}

function editUser() {
  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);

  var documentData = JSON.parse(localStorage.getItem("documentData"));
  console.log(documentData);
  // Updating values
  documentData.forEach((element) => {
    console.log(element);
    if (element.id == getId) {
      console.log(element);
      document.getElementById("fileName").value = element.fileName;
    }
  });
  updateUser();
}
editUser();
