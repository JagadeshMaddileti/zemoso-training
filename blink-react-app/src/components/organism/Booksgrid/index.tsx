// src/organisms/BooksGrid.tsx
import React from 'react';
import { Grid } from '@mui/material';
import BookCard from '../../molecules/BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  isFinished: boolean;
}

interface BooksGridProps {
  books: Book[];
  onFinish: (id: number) => void;
  isFinished: boolean;
}

const BooksGrid: React.FC<BooksGridProps> = ({ books, onFinish, isFinished }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {books
        .filter((book) => book.isFinished === isFinished)
        .map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} onFinish={onFinish} />
          </Grid>
        ))}
    </Grid>
  );
};

export default BooksGrid;
