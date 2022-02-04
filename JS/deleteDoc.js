function deleteUser() {
  // Getting upload id
  var locationPath = window.location.href;
  console.log(locationPath);
  var path = locationPath.split("?");
  console.log(path);
  var getId = path[1];
  console.log(getId);
  var activeId = [];
  activeId.push(getId);
  var documentData = JSON.parse(localStorage.getItem("documentData"));
  console.log(documentData);
  var confirmMessage = confirm("Do you really want to delete?");
    // Delteting values
  if (confirmMessage) {
    documentData.forEach(function (value, i) {
      if (value.id == getId) {
        documentData.splice(i, 1);
      }
    });

    window.location.href = "documents.html";
    window.localStorage.setItem("documentData", JSON.stringify(documentData));
    documentData = JSON.parse(window.localStorage.getItem("documentData"));
  }
}
deleteUser();
