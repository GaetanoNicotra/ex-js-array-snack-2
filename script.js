

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

// libri con piu di 300 pagine
const longBooks = books.filter(b => b.pages > 300);
console.log('Libri con piu di 300 pagine', longBooks);

// titolo libri con piu di 300 pagine
const longBooksTitles = longBooks.map(l => l.title);
console.log('Titolo libri con piu di 300 pagine', longBooksTitles);


// SANCK 2

// libri disponibili
const availableBooks = books.filter(b => b.available === true);
console.log('Libri disponibili', availableBooks);

// libri scontati
const discountedBooks = availableBooks.map(a => parseInt(a.price) * 0.8);
console.log('Libri scontati', discountedBooks);

// libri con prezzo intero
const fullPricedBook = discountedBooks.find(d => Number.isInteger(d));
console.log('Libri con prezzo intero', fullPricedBook)

// SNACK 3

// autori dei libri
const authors = books.map(b => b.author).sort((a, b) => b.age - a.age);
console.log('Autori', authors)

// verifico se gli autori sono maggiorenni
const areAuthorsAdults = authors.every(a => a.age > 18);
console.log('Tutti gli autori sono maggiorenni?', areAuthorsAdults);