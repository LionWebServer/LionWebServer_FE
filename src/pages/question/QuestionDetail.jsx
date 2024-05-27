import React, {useEffect} from "react";
import styles from "./QuestionDetail.module.scss";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useGetQuestionDeatil} from "../../hooks/useGetQuestionDetail";
import {useGetAnswer} from "../../hooks/useGetAnswer";
import {usePostAnswer} from "../../hooks/usePostAnswer";

export default function QuestionDetail() {

  const { PostAnswer } = usePostAnswer();
  const { GetQuestionDeatil, data } = useGetQuestionDeatil();
  const { GetAnswer, answerList } = useGetAnswer();

  useEffect(() => {
    GetQuestionDeatil()
    GetAnswer()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const submitData = Object.fromEntries(formData);
    PostAnswer(submitData);
  };



  console.log(answerList);
  return (
    <Container component="div" maxWidth="xs">
      <Typography variant="h3">{data?.title}</Typography>
      <hr></hr>
      <div className={styles.body}>
        <div className={styles.question}>
          <div>{data?.content}</div>
          <div className={styles.createAt}>{data?.createdAt} | {data?.userName}</div>
        </div>
        <Typography variant="h5">0개의 답변이 있습니다.</Typography>
        <hr></hr>
        <Box fullwidth className={styles.answer_create} component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            className={styles.textarea}
            required
            fullWidth
            id="answer"
            label="answer"
            name="answer"
            autoComplete="answer"

          />
          <Button className={styles.button} type="submit">등록</Button>`
        </Box>
        <div className={styles.answer_list}>
          {answerList?.map((item, index) => {
            return (
              <div className={styles.answer} key={index}>
                <div className={styles.answer_content}>{item.content}</div>
                <div className={styles.answer_detail}>{item.createdAt} | {item.userName}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>);
}
