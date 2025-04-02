const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: 'Alice',
      age: 35
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior']
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: 'Bob',
      age: 20
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior']
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: 'Alice',
      age: 17
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior']
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

// SNACK 1
const longBooks = books.filter(book => {
  return book.pages > 300;
})
console.log(longBooks);

longBooksTitles = longBooks.map(longBook => {
  return longBook.title
})
console.log(longBooksTitles);

longBooksTitles.forEach(title => {
  return console.log(title);
});

// SNACK 2
const availableBooks = books.slice(book => {
  return book;
})
console.log(availableBooks);

const discountedBooks = availableBooks.concat(availableBook => {
  // return availableBook.price(Math.round((availableBook.price * 0.8) * 100) / 100)
})
console.log(discountedBooks);
