// function AvailableBooks(title, author, ISBN, numCopies) {
// 	this.title = title;
// 	this.author = author;
// 	this.ISBN = ISBN;
// 	this.numCopies = numCopies;
// }
// AvailableBooks.prototype.getAvailable = function() {
// 	if(this.numCopies == 0) {
// 		return "Out of Stock";
// 	} else if(this.numCopies < 10) {	
// 		return "Low Stock";
// 	}

// 	return "In Stock there";
// };

// AvailableBooks.prototype.sell = function(isSold = 1) {
// 	this.numCopies -= isSold;
// };
// AvailableBooks.prototype.resock = function(isResocked = 5) {
// 	this.numCopies += isResocked;
// };

class AvailableBooks {
	constructor(title, author, ISBM, numCopies) {
		this.title = title;
		this.author = author;
		this.ISBM = ISBM;
		this.numCopies = numCopies;
	}
	get availablity() {
		return this.getAvailable();
	}
	getAvailable() {
		if(this.numCopies == 0) {
			return "Out of stock";
		} else if(this.numCopies < 10) {
			return "Low stock";
		}

		return "In stock there";
	}
	sell(isSold = 1) {
		this.numCopies -= isSold;
	}

	resock(isSocked = 5) {
		this.numCopies += isSocked;
	}
}
const ReturnOfTheKing = new AvailableBooks("Return Of the King", "Myat Ko Ko", 13503, 0);
console.log(ReturnOfTheKing.getAvailable());
ReturnOfTheKing.resock(12);
console.log(ReturnOfTheKing.getAvailable());
ReturnOfTheKing.sell(17);
console.log(ReturnOfTheKing.getAvailable());
