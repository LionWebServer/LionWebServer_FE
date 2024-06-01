import React, { useEffect } from "react";
import styles from "./QuestionDetail.module.scss";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {
  useGetQuestionDeatil,
  useGetQuestionDetail,
} from "../../hooks/useGetQuestionDetail";
import { useGetAnswer } from "../../hooks/useGetAnswer";
import { usePostAnswer } from "../../hooks/usePostAnswer";
import { useLocation } from "react-router-dom";

export default function QuestionDetail() {
  const { PostAnswer } = usePostAnswer();
  const { GetQuestionDetail, data } = useGetQuestionDetail();
  const { GetAnswer, answerList } = useGetAnswer();

  useEffect(() => {
    GetQuestionDetail();
    GetAnswer();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const submitData = Object.fromEntries(formData);
    PostAnswer(submitData);
  };

  return (
    answerList && (
      <Container component="div" maxWidth="xs">
        <Typography variant="h3">{data?.title}</Typography>
        <hr></hr>
        <div className={styles.body}>
          <div className={styles.question}>
            <div>{data?.content}</div>
            <div className={styles.createAt}>
              {data?.createdAt} | {data?.userName}
            </div>
          </div>
          <Typography variant="h5">
            {answerList.length}개의 답변이 있습니다.
          </Typography>
          <hr></hr>
          <Box
            fullwidth
            className={styles.answer_create}
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              className={styles.textarea}
              required
              fullWidth
              id="answer"
              label="answer"
              name="answer"
              autoComplete="answer"
            />
            <Button className={styles.button} type="submit">
              등록
            </Button>
          </Box>
          <div className={styles.answer_list}>
            {answerList?.map((item, index) => {
              return (
                <div className={styles.answer} key={index}>
                  <div className={styles.answer_content}>{item.content}</div>
                  <div className={styles.answer_detail}>
                    {item.createdAt} | {item.userName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    )
  );
}
