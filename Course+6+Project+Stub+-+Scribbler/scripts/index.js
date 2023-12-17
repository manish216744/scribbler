window.onload = function() {
var signupPopup = document.getElementById("signupPopup");

// Get the button that opens the modal
var signupBtn = document.getElementById("signupBtn");
 
// Get the <span> element that closes the modal
var span = document.getElementById("signupClose");

// When the user clicks on the button, open the modal
signupBtn.onclick = function () {
  signupPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  signupPopup.style.display = "none";
};

document.getElementById("submitSignup").onclick = function () {
  signupPopup.style.display = "none";
};



var signinPopup = document.getElementById("signinPopup");

// Get the button that opens the modal
var signinBtn = document.getElementById("signinBtn");
 
// Get the <span> element that closes the modal
var spanClose = document.getElementById("signinClose");

// When the user clicks on the button, open the modal
signinBtn.onclick = function () {
  signinPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
  signinPopup.style.display = "none";
};

document.getElementById("submitSignin").onclick = function () {
  signinPopup.style.display = "none";
};

document.getElementById("signupLink").onclick = function () {
  signinPopup.style.display = "none";
  signupPopup.style.display = "block";
};


var createPostPopup = document.getElementById("createPostPopup");

// Get the button that opens the modal
var createPostBtn = document.getElementById("createPostBtn");
 
// Get the <span> element that closes the modal
var createPostClose = document.getElementById("createPostClose");

// When the user clicks on the button, open the modal
createPostBtn.onclick = function () {
  createPostPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
createPostClose.onclick = function () {
  createPostPopup.style.display = "none";
};

document.getElementById("submitCreatePost").onclick = function () {
  createPostPopup.style.display = "none";
};


};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signupPopup || event.target == signinPopup ||  event.target == createPostPopup) {
    signupPopup.style.display = "none";
    signinPopup.style.display = "none";
    createPostPopup.style.display = "none";
  }
};

function allPostsPage() {
  location.href="./html/postslist.html"
}