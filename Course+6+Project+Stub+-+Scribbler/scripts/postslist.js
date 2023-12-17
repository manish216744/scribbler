
let deleteCardId = null;

function showDeletePopup(cardId){
    deleteCardId = cardId
    deletePopup.style.display = "block";  
}

function DeleteHandleYes(){
    deletePopup.style.display = "none";  
    document.getElementById(deleteCardId).style.display = "none";
}

function DeleteHandleNo(){
    deletePopup.style.display = "none";  
}

window.onclick = function (event) {
  if (event.target == deletePopup) {
    deletePopup.style.display = "none";
  }
};

function PostPage() {
    location.href="../html/post.html"
  }