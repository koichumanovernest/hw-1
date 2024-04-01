function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title}, написанная ${this.author}, опубликованная в ${this.year}.`;
	};
}

const book1 = new Book("Окчугон Омун", "Аскар Жаныбай", 1998);
const book2 = new Book("Турмуш", "Аалы Токонбаев", 1971);
const book3 = new Book("Ак Кеме", "Чынгыз Айтматов", 1970);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

function Student(name, grade) {
	this.name = name;
	this.grade = grade;

	this.study = function () {
		console.log(`${this.name} учится в ${this.grade} классе.`);
	};
}

const student1 = new Student("Mirlan", 9);
const student2 = new Student("Aizat", 11);

student1.study();
student2.study();
