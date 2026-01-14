function toggleLike() {
  const heart = document.getElementById("heart");
  heart.classList.toggle("liked");
  heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
}
