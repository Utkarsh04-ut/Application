// function validation(e) {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password1").value;
//   let conPassword = document.getElementById("password2").value;
//   let fname = document.getElementById("fname").value;
//   let btn = document.getElementById("btn").value;

//   var apos = email.indexOf("@");
//   var dotPos = email.lastIndexOf(".");

//   if (fname == "") {
//     alert("Name can't be blank");
//     return false;
//   }
//   if (fname.length < 3) {
//     alert("Name must be at least 3 characters long.");
//     return false;
//   }
//   if (email == "") {
//     alert("Please enter email");
//     return false;
//   }
//   if (apos < 1 || dotPos - apos < 2) {
//     alert("Please enter valid email");
//     return false;
//   }
//   if (password == "") {
//     alert("Please enter password");
//     return false;
//   }
//   if (conPassword == "") {
//     alert("Password can not be Blank");
//     return false;
//   }
//   if (password != conPassword) {
//     alert("Password not Matched");
//     return false;
//   }
//   return true;
// }

const signUp = (e) => {
  // Get the value from registration from
  let fname = document.getElementById("fname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  pwd1 = document.getElementById("pwd1").value;
  id = Math.floor(Math.random() * 100 + 1);
  btn = document.getElementById("btn").value;
  console.log(fname);

  // Validation logic
  var apos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");

  //   if (fname == "") {
  //     alert("Name can't be blank");
  //     return false;
  //   }
  //   if (fname.length < 3) {
  //     alert("Name must be at least 3 characters long.");
  //     return false;
  //   }
  //   if (email == "") {
  //     alert("Please enter email");
  //     return false;
  //   }
  //   if (apos < 1 || dotPos - apos < 2) {
  //     alert("Please enter valid email");
  //     return false;
  //   }
  //   if (password == "") {
  //     alert("Please enter password");
  //     return false;
  //   }
  //   if (conPassword == "") {
  //     alert("Password can not be Blank");
  //     return false;
  //   }
  //   if (password != conPassword) {
  //     alert("Password not Matched");
  //     return false;
  //   }

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  // Lets either user registered or not
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.fname.toLowerCase() == fname.toLowerCase()
    );

  // User register logic
  if (!exist) {
    formData.push({ fname, email, pwd, pwd1, id });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    window.location.href = "registration-success.html";
    // alert("Account Created.\n\nPlease Sign In using the link below.");
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }

  e.preventDefault();
};
