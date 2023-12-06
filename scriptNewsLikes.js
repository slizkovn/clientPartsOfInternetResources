let likeSection = document.getElementById("likeSection");
let likeBtn = document.getElementById("likeBtn");
let likeCount = document.getElementById("likeCount");
let isLiked = false;

likeSection.addEventListener("click", function() {
if (!isLiked) {
    likeBtn.style.backgroundColor = "pink";
    likeCount.innerHTML++;
    isLiked = true;
} else {
    likeBtn.style.backgroundColor = "";
    likeCount.innerHTML--;
    isLiked = false;
}
});