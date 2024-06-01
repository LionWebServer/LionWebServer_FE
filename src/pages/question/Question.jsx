import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {useGetQuestion} from "../../hooks/useGetQuestion";
import {rows, columns} from "../../config/QuestionGrid";
import styles from "./Question.module.scss";

export default function Question() {
  const navigate = useNavigate();
  const { GetQuestion, data } = useGetQuestion();

  useEffect(() => {
    GetQuestion()
  }, []);

  const handleRowClick = (row) => {
    navigate(`/question/detail?questionId=${row.id}`)
  };

  return (
    <div className={styles.container}>
      <DataGrid rows={data?.questionList || rows} columns={columns} pagination={true} onRowClick={handleRowClick} getRowId={(row) => row.id}/>
    </div>
  );
}

