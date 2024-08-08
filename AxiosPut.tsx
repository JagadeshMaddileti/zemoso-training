import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TextField, Box, Button, Container, Typography } from "@mui/material";

interface Post {
  id?: number;
  name: string;
  place: string;
}

const AxiosPost = () => {
  const [data, setData] = useState<Post>({
    name: "",
    place: ""
  });
  const [fetchedData, setFetchedData] = useState<Post[] | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/person");
      setFetchedData(response.data);
  };

  const addNewData = async () => {
      const response = await axios.post("http://localhost:5000/person", {
        name: data.name,
        place: data.place
      });
      setData({ name: "", place: "" });
      fetchData();
      console.log("New data added:", response.data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewData();
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Add New Data</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Place"
          name="place"
          value={data.place}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>Fetched Data</Typography>
      {fetchedData ? (
        <ul>
          {fetchedData.map(post => (
            <li key={post.id}>
              <Typography variant="body1">ID: {post.id}</Typography>
              <Typography variant="body1">Name: {post.name}</Typography>
              <Typography variant="body1">Place: {post.place}</Typography>
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="body1">No data available</Typography>
      )}
    </Container>
  );
};

export default AxiosPost;

