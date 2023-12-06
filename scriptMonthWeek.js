const tableCells = document.querySelectorAll('td');
const tableColumns = document.querySelectorAll('th');
var n = 0;
const date = new Date();

tableCells.forEach(cell => {
  const paragraphs = cell.querySelectorAll('p');
  
  paragraphs.forEach(p => {
    if (p.classList.contains('day') && p.textContent === "12") {
      cell.style.backgroundColor = "#e8a474";
      tableColumns[n%7].style.color = "#e8a474";
      cell.style.scale = "1.05";
    }
  });
  n += 1;
});

