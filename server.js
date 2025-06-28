// server.js
import sequelize from './EX2/database/database.js';
import Author from './EX2/author/author.js';
import Book from './book/book.js';

sequelize.sync({ force: false })  // { force: false } will not drop existing tables
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });


// Sample data
const author1 = await Author.create({ name: 'Ronan The Best', birthYear: 1990 });
await author1.createBook({ title: 'How to be a millionaire?', publicationYear: 2015, pages: 59 });
await author1.createBook({ title: 'Be yourself!', publicationYear: 2020, pages: 120 });

const author2 = await Author.create({ name: 'Kim Ang', birthYear: 1995 });
await author2.createBook({ title: 'Find the peace', publicationYear: 2010, pages: 69 });
await author2.createBook({ title: 'Look at the Sky', publicationYear: 2015, pages: 100 });

const author3 = await Author.create({ name: 'Hok Tim', birthYear: 2015 });
await author3.createBook({ title: 'Kid Songs', publicationYear: 2020, pages: 36 });
await author3.createBook({ title: 'Falling to the Math', publicationYear: 2020, pages: 50 });

console.log('Sample data inserted');
