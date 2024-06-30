// this code is working. but when it try on my interface it might not be working because i created separate pages for methods. every 
// time go to the new page it refresh and delete all data.

class Library {
   #books;

   constructor() {
       this.#books = [];
   }

   addBook(t, a) {
       const newBook = { title: t, author: a, borrowed: false };
       this.#books.push(newBook);
       return true;
   }

   findBook(title) {
       return this.#books.findIndex(book => book.title === title);
   }

   borrowBook(title) {
       const bookIndex = this.findBook(title);
       if (bookIndex !== -1 && !this.#books[bookIndex].borrowed) {
           this.#books[bookIndex].borrowed = true;
           return true; 
       }
       return false; 
   }

   returnBook(title) {
       const bookIndex = this.findBook(title);
       if (bookIndex !== -1 && this.#books[bookIndex].borrowed) {
           this.#books[bookIndex].borrowed = false;
           return true; 
       }
       return false; 
   }

   
   listBooks() {
       return this.#books;
   }
}


const myLibrary = new Library();


function addBook() {
   const title = document.getElementById('i').value;
   const author = document.getElementById('p').value;
   const output = document.getElementById('output1');
   if (title && author) {
       const num =  myLibrary.addBook(title, author);
       if(num){
         output.innerHTML = `${title} by ${author} added to the library`;
       }
       
       
   } else {
       output.innerHTML = "Please provide both title and author.";
   }
   setTimeout(() => {
       output.innerHTML = ""; 
   }, 5000);
}

function findbook() {
   const title = document.getElementById('i').value;
   const output = document.getElementById('output4');
   if (title ) {
      const num = myLibrary.findBook(title);
      output.innerHTML = `Index of ${title} is ${num}`;
     
  } else {
      output.innerHTML = "Please provide title.";
  }
  setTimeout(() => {
      output.innerHTML = ""; 
  }, 5000);
}

function borrowbook() {
   const title = document.getElementById('i').value;
   const output = document.getElementById('output2');
   if (title ) {
      const num = myLibrary.borrowBook(title);
      if(num){
         output.innerHTML = `${title} is borrowing.`;
      }else{
         output.innerHTML = `Invalid or Unavailable book.`
      }
        
  } else {
      output.innerHTML = "Please provide title.";
  }
  setTimeout(() => {
      output.innerHTML = ""; 
  }, 5000);
}

function returnbook() {
   const title = document.getElementById('i').value;
   const output = document.getElementById('output3');
   if (title ) {
      const num = myLibrary.returnBook(title);
      if(num){
         output.innerHTML = `${title} is returning.`;
      }else{
         output.innerHTML = `Invalid or Unavailable book.`
      }
        
     
  } else {
      output.innerHTML = "Please provide title.";
  }
  setTimeout(() => {
      output.innerHTML = ""; 
  }, 5000);
}




