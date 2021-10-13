class Book {
   constructor(title, author, ISBN, numCopies) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
   }

   // Getter
   get availability() {
      return this.getAvailability();
   }

   // Method
   getAvailability() {
      if (this.numCopies === 0) {
         return "Out of stock";
      } else if (this.numCopies < 10) {
         return "Low stock";
      }
      return "In stock";
   }

   sell(numCopiesSold = 1) {
      this.numCopies -= numCopiesSold;
   }

   restock(numCopiesStocked = 5) {
      this.numCopies += numCopiesStocked;
   }
}
class TechnicalBooks extends Book {
   constructor(title, author, ISBM, numCopies, edition) {
      super(title, author, ISBM, numCopies);
      this.edition = edition;
   }

   getEdition() {
      return `The current version of this book is ${this.edition}.`;
   }
}

const hasInterview = new TechnicalBooks(
   'Creaking interview', 'John Dooe', '123133', 78, "2.3"
);

console.log(hasInterview.availability);
console.log(hasInterview.getEdition());
