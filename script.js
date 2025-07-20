

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


// SNACK 4 

// recupero le età degli autori
const ages = books.map(b => b.author.age)
console.log('Età degli autori:', ages)

// calcolo la somma delle età
const agesSum = books.reduce((acc, curr) => {
    return acc + curr.author.age;
}, 0)
console.log('Somma delle età:', agesSum);

// calcolo dell'età media 
const agesMedia = agesSum / books.length;
console.log('Età media:', agesMedia)


// SNACK 5 (Bonus)

// recupero dei libri
const ids = [2, 13, 7, 21, 19];

const getBooks = async (ids) => {
    const books = await Promise.all(ids.map((i) =>
        fetch(`http://localhost:3333/books/${i}`).then(res => res.json()))
    );
    return books;
};

getBooks(ids).then(books => {
    console.log('Tutti i libri:', books);
});


// SNACK 6 (Bonus)

// verifico se c'è almeno un libro disponibile
const areThereAvailableBooks = books.some((b) => b.available === true);
console.log("C'è almeno un libro disponibile?", areThereAvailableBooks)

// ordino i libri per prezzo in modo crescente
const booksByPrice = books.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
console.log('Libri ordinati per prezzo:', booksByPrice)

// ordino per disponibilità
booksByPrice.sort((a, b) => b.available - a.available);
console.log('Libri ordinati disponibilità:', booksByPrice);


// SNACK 7 (Bonus)

const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach(tag => {
        if (acc[tag]) {
            acc[tag]++
        }
        else {
            acc[tag] = 1;
        }
    })
    return acc;
}, {})

console.log('contatore di tag:', tagCounts);