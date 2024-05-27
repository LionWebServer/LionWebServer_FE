import React from "react";
import styles from "./QuestionDetail.module.scss";
import {Button} from "@mui/material";

export default function QuestionDetail() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Question Detail</h1>
      </div>
      <hr></hr>
      <div className={styles.body}>
        <div className={styles.question}>
          <div>content</div>
          <div className={styles.createAt}>createAt</div>
        </div>
        <div className={styles.title}>
          <h3>0개의 답변이 있습니다.</h3>
        </div>
        <hr></hr>
        <div className={styles.answer_create}>
          <textarea className={styles.textarea} type="text" placeholder="Question"/>
          <Button className={styles.button}>등록</Button>
        </div>
        <div className={styles.answer_list}>
          <div className={styles.answer}>
            <div className={styles.answer_content}>content</div>
            <div className={styles.answer_detail}>createAt | userName</div>
          </div>
          <div className={styles.answer}>
            <div className={styles.answer_content}>content</div>
            <div className={styles.answer_detail}>createAt | userName</div>
          </div>
        </div>
      </div>
    </div>);
}
