const gridItems = document.querySelectorAll('.grid-item');

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('click', function() {
    window.location.href = "./newsItem"+(i+1)+".html";
  });
}