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
const availableBooks = books.filter(book => {
  return book.available;
})
console.log(availableBooks);

const discountedBooks = availableBooks.map(availableBook => {
  const price = parseFloat(availableBook.price.replace('€', ''));
  const discountedPrice = (price * 0.8).toFixed(2);
  return {
    ...availableBook,
    price: `${discountedPrice}€`
  }
})
console.log(discountedBooks);

const fullPriceBook = discountedBooks.find(book => {
  const price = parseFloat(book.price.replace('€', ''));
  return price % 1 === 0;
})
console.log(fullPriceBook);

// SNACK 3
const authors = books.map(book => {
  return book.author
})
console.log(authors);

const areAuthorsAdults = authors.every(author => {
  return author.age > 18;
})
console.log(areAuthorsAdults);

if (!areAuthorsAdults) {
  authors.sort((a, b) => a.age - b.age);
} else {
  authors.sort((a, b) => b.age - a.age);
}
console.log(authors);

// SNACK 4
const ages = books.map(book => {
  return book.author.age
})
console.log(ages);

const sommaEta = ages.reduce((acc, age) => acc + age, 0);
console.log(`L'età media degli autori è: ${sommaEta / ages.length} anni`);