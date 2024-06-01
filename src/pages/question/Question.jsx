import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {useGetQuestion} from "../../hooks/useGetQuestion";
import {rows, columns} from "../../config/QuestionGrid";
import styles from "./Question.module.scss";
import { styled } from '@mui/system';
import {Button} from "@mui/material";

const StyledDataGrid = styled(DataGrid)({
  '& .MuiDataGrid-footerContainer': {
    display: 'none',
  },
});


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
      <div className={styles.gridContainer} >
        <StyledDataGrid
          className={styles.dataGrid}
          rows={data?.questionList || rows}
          columns={columns}
          pagination={false}
          onRowClick={handleRowClick}
          getRowId={(row) => row.id}
          pageSize={rows.length}
          localeText={{
            noRowsLabel: 'No data',
          }}
        />
      </div>
      <Button
        className={styles.submitButton}
        onClick={() => navigate("/question/create")} variant="contained">
        질문 등록
      </Button>


    </div>

  );
}

