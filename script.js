let books = [];

document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  books.push({ title, author });

  const li = document.createElement("li");
  li.textContent = `${title} by ${author}`;
  document.getElementById("bookList").appendChild(li);

  document.getElementById("bookForm").reset();
});