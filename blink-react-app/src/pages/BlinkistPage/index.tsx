import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import {Stack} from '@mui/material';
import TabsContainer from '../../components/organism/TabsContainer';
import BooksGrid from '../../components/organism/Booksgrid';
import CustomTypography from '../../components/atoms/Typography';

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  isFinished: boolean;
}

const initialBooks: Book[] = [
  { id: 1, title: 'Bring Your Human to Work', author: 'Erica Keswin', image: './assets/images/1.svg', isFinished: false },
  { id: 2, title: 'Dropshipping', author: 'James Moore', image: './assets/images/2.svg', isFinished: false },
  { id: 3, title: 'Eat Better, Feel Better', author: 'Giada De Laurentiis', image: './assets/images/3.svg', isFinished: false },
  { id: 4, title: 'The Fate of Food', author: 'Amanda Little', image: './assets/images/4.svg', isFinished: false },
  { id: 5, title: 'The Lonely Century', author: 'Noreena Hertz', image: './assets/images/5.svg', isFinished: false },
  { id: 6, title: 'Loving Your Business', author: 'Debbie King', image: './assets/images/6.svg', isFinished: false },
];

const BlinkistPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [tabValue, setTabValue] = useState<number>(0);
  const handleFinishBook = (id: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isFinished: !book.isFinished } : book
      )
    );
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack>
      <CustomTypography variant="h4" gutterBottom>My Library</CustomTypography>
      <TabsContainer tabValue={tabValue} handleTabChange={handleTabChange} />
      <Box display="flex" padding="10px">
        <Grid container spacing={2} maxWidth="900px">
          {tabValue === 0 && (
            <Grid item xs={12}>
              <CustomTypography variant="h5" gutterBottom>Currently Reading</CustomTypography>
              <BooksGrid books={books} onFinish={handleFinishBook} isFinished={false} />
            </Grid>
          )}
          {tabValue === 1 && (
            <Grid item xs={12}>
              <CustomTypography variant="h5" gutterBottom>Finished</CustomTypography>
              <BooksGrid books={books} onFinish={handleFinishBook} isFinished={true} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Stack>
  );
};

export default BlinkistPage;
