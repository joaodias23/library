const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(newBook){

    newBook.uniqueID = crypto.randomUUID();
    myLibrary.push(newBook);

}

function displayBooks(arrayAccess){
    const existingBooks = document.querySelectorAll(".book");
    existingBooks.forEach(book => book.remove());

    arrayAccess.forEach(function (book){
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book");

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        bookInfo.appendChild(bookTitle);

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;
        bookInfo.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.textContent = book.pages;
        bookInfo.appendChild(bookPages);

        const bookRead = document.createElement("p");
        bookRead.textContent = book.readStatus;
        bookInfo.appendChild(bookRead);

        document.body.appendChild(bookInfo);
    })
}

const newBookButton = document.createElement("button")
newBookButton.textContent = "New Book"
document.body.appendChild(newBookButton)

newBookButton.onclick = function(){

    const formInterface = document.createElement("div")
    const form = document.createElement("form")
    const legend = document.createElement("legend")
    legend.textContent = "Add New Book"

    const titleLabel = document.createElement("label")
    titleLabel.setAttribute("for", "titleInput")
    titleLabel.textContent = "Title: "

    const titleInput = document.createElement("input")
    titleInput.setAttribute("type", "text")
    titleInput.setAttribute("placeholder", "Write the title here")
    titleInput.setAttribute("id", "titleInput")
    titleInput.setAttribute("required", "")

    const authorLabel = document.createElement("label")
    authorLabel.setAttribute("for", "authorInput")
    authorLabel.textContent = "Author: "

    const authorInput = document.createElement("input")
    authorInput.setAttribute("type", "text")
    authorInput.setAttribute("placeholder", "Write the author's name here")
    authorInput.setAttribute("id", "authorInput")
    authorInput.setAttribute("required", "")

    const pageLabel = document.createElement("label")
    pageLabel.setAttribute("for", "pageNumber")
    pageLabel.textContent = "Pages: "

    const pageNumber = document.createElement("input")
    pageNumber.setAttribute("type", "number")
    pageNumber.setAttribute("placeholder", "Number Of Pages")
    pageNumber.setAttribute("id", "pageNumber")
    pageNumber.setAttribute("required", "")

    const readLabel = document.createElement("label")
    readLabel.setAttribute("for", "readSelect")
    readLabel.textContent = "Read Status: "

    const readSelect = document.createElement("select")
    readSelect.setAttribute("id", "readSelect")
    readSelect.setAttribute("required", "")

    const blankOption = document.createElement("option")
    blankOption.textContent = "Set"

    const trueOption = document.createElement("option")
    trueOption.textContent = "true"

    const falseOption = document.createElement("option")
    falseOption.textContent = "false"

    const submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.textContent = "Add"

    document.body.appendChild(formInterface)
    formInterface.appendChild(form)
    form.append(legend, titleLabel, titleInput, authorLabel, authorInput, pageLabel, pageNumber, readLabel, readSelect, submitButton)
    readSelect.append(blankOption, trueOption, falseOption)

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const title1 = document.getElementById("titleInput").value;
        const author1 = document.getElementById("authorInput").value;
        const pages1 = parseInt(document.getElementById("pageNumber").value);
        const readStatus1 = document.getElementById("readSelect").value === "true";
    
        const newBook1 = new Book(title1, author1, pages1, readStatus1);
        addBookToLibrary(newBook1);
    
        displayBooks(myLibrary);
        form.reset();
    })

}

console.log(myLibrary)