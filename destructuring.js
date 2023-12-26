// Practise exercises to learn ARRAY DESTRUCTURING.
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  genre: "Fiction",
  published: 1951,
  ratings: {
    goodreads: 3.8,
    amazon: 4.1,
  },
  languages: ["English", "French", "Spanish"],
  available: true,
};

// Task 1: Use object destructuring to extract the 'title', 'author', and 'published' properties.
// Print these values to the console.
const { title, author, published: bookPublished } = book;
console.log(title, author, bookPublished);

// Task 2: Use object destructuring to extract the 'goodreads' and 'amazon' ratings from the 'ratings' property.
// Print these values to the console.
const { goodreads, amazon } = book.ratings;
console.log(goodreads, amazon);

// Task 3: Use array destructuring to extract the first two languages from the 'languages' array.
// Print these values to the console.
const [language1, language2] = book.languages;
console.log(language1, language2);

// Task 4: Use a combination of object and array destructuring to extract the 'title', 'author', 'goodreads' rating,
// and the first language from the book object.
// Print these values to the console.
const {
  title: bookTitle,
  author: bookAuthor,
  ratings: { goodreads: bookreads },
  languages: [language],
} = book;
console.log(bookTitle, bookAuthor, bookreads, language);

// Bonus Task: Use object destructuring with default values to extract the 'publisher' property,
// defaulting to "Unknown" if it doesn't exist.
// Print the publisher to the console.
const { published = "unknown" } = book;
console.log(published);

const student = {
  name: "John Doe",
  scores: {
    math: 50,
    english: 100,
    science: 150,
  },
};

// Calculate the average scores using destructuring
// Print the results to the console
const { ...scores } = student.scores;
//Using Object.keys and Object.values
const scorelength = Object.keys(scores).length;
const sumScore = Object.values(scores).reduce((sub1, sub2) => sub1 + sub2);
const avgScore = sumScore / scorelength;
console.log(avgScore);
//Using Object.entries
const scorelength2 = Object.entries(scores).length;
console.log(Object.entries(scores)); // [["math", 50], ["english",100], ["science",150]]
const sumScore2 = Object.entries(scores).reduce(
  (total, [subject, score]) => total + score,
  0
);
/* In reduce we used [subject, score] because the entries are in the same form and we want only sum but not subject
 so we can skip the subject parameter but we have to maintain the structure. 
 we can use [, score] - This neglects the the first param in our Object.entries.
*/
const avgScore2 = sumScore2 / scorelength2;
console.log(avgScore2);

const books = [
  { title: "Book 1", author: "Author 1", published: 1998 },
  { title: "Book 2", author: "Author 2", published: 2005 },
  { title: "Book 3", author: "Author 3", published: 1995 },
  { title: "Book 4", author: "Author 4", published: 2010 },
];
// Use destructuring to filter and create a new array with titles of books published after 2000
// Print the result to the console
const [...titles] = books;
const res = titles.filter((pubCheck) => pubCheck.published > 2000);
console.log(res);

const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 45000 },
  { name: "Charlie", salary: 75000 },
  { name: "David", salary: 50000 },
];
// Use destructuring to filter and create a new array with names of employees with salary > $50,000
// Print the result to the console
const [...empSal] = employees;
const resSal = empSal.filter((emp) => emp.salary > 50000);
console.log(resSal);

const blogPost = {
  title: "Advanced Destructuring in JavaScript",
  author: {
    name: "Jane Doe",
    profession: "Software Developer",
  },
  content: {
    body: "Lorem ipsum dolor sit amet...",
    tags: ["JavaScript", "ES6", "Destructuring"],
  },
};
// Use destructuring to extract and print the title,
// author name, and the first tag of the blog post
const {
  title: blogTitle,
  author: { name: blogAuthor },
  content: {
    tags: [lang1],
  },
} = blogPost;
console.log(blogTitle, blogAuthor);
console.log(lang1);

// Practise exercises to learn ARRAY SPREAD OPERATOR.

const numbers = [1, 2, 3, 4, 5];
// Use the spread operator to create a new array with squared numbers
// Print the result to the console
const sqNumRes = [...numbers].map((sqNum) => sqNum * sqNum);
console.log(sqNumRes);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
// Use the spread operator to create a new array with ages
// increased by 1 Print the result to the console.
const resAge = [...people].map((ppl) => (ppl.age += 1));
console.log(resAge);

const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Use the spread operator to flatten the arrays into a single array
// Print the result to the console
const resArr = [].concat(...nestedArrays);
console.log(resArr);

const person = {
  name: "John Doe",
  contact: {
    email: "john@example.com",
    phone: "123-456-7890",
  },
};
// Use the spread operator to create a new object with
// updated contact details Print the result to the console
const resPerson = {
  ...person,
  contact: { ...person.contact, phone: "123456789" },
};
console.log(resPerson);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Use the spread operator to concatenate the arrays and find the sum of all numbers
// Print the result to the console
const sumArr = [...array1].concat(...array2);
console.log(sumArr.reduce((total, sumEle) => total + sumEle, 0));
