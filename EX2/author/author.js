// author/author.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Book from '../../book/book.js';

const Author = sequelize.define('Author', {
  name: DataTypes.STRING,
  birthYear: DataTypes.INTEGER
});

Author.hasMany(Book);
Book.belongsTo(Author);

export default Author;
