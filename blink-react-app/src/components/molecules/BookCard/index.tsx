// src/molecules/BookCard.tsx

import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import CustomButton from '../../atoms/Button';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  isFinished: boolean;
}

interface BookCardProps {
  book: Book;
  onFinish: (id: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onFinish }) => {
  const handleFinish = () => {
    onFinish(book.id);
  };

  return (
    <Card>
      <img src={book.image} alt={book.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton onClick={handleFinish} label={book.isFinished ? 'Read Again' : 'Finished'} />
      </CardActions>
    </Card>
  );
};

export default BookCard;
