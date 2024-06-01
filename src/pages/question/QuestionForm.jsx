import React from "react";
import styles from "./QuestionCreate.module.scss";
import {Box, Button, Container, TextField} from "@mui/material";

export default function Question() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const submitData = Object.fromEntries(formData);
    console.log(submitData)
    // PostAnswer(submitData);
  };


  return(
    <Container component="div" maxWidth="xs">
      <Box fullwidth className={styles.question_create} component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          className={styles.textarea}
          required
          fullWidth
          id="title"
          label="title"
          name="title"
          autoComplete="title"

        />
        <TextField
          className={styles.textarea}
          required
          fullWidth
          id="content"
          label="content"
          name="content"
          autoComplete="content"
        />
        <Button className={styles.button} type="submit" variant="contained">등록</Button>`
      </Box>
  </Container>);
}
