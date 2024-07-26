document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#book-list ul");

  // delete books
  list.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      if (list.contains(li)) {
        list.removeChild(li);
      } else {
        console.error(
          "The node to be removed is not a child of the parent node."
        );
      }
    }
  });

  // Adding a book
  const addForm = document.forms["add-book"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="Text"]').value;

    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    if (value != "") {
      deleteBtn.textContent = "delete";
      deleteBtn.classList.add("delete");

      bookName.textContent = value;
    } else {
      alert("Please enter a book name");
      return;
    }

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // Hides the books
  const hideBook = document.querySelector("#hide");
  hideBook.addEventListener("change", function (e) {
    if (hideBook.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  });

  // Search for a book
  const searchBar = document.forms["search-books"].querySelector("input");

  searchBar.addEventListener("keyup", function (e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");

    Array.from(books).forEach(function (book) {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  // Tabs
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
