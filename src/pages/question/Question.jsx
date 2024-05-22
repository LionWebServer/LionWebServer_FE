import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {useGetQuestion} from "../../hooks/useGetQuestion";
import {rows, columns} from "../../config/QuestionGrid";

export default function Question() {
  const {GetQuestion, data} = useGetQuestion();
  useEffect(() => {
    GetQuestion()
  }, []);
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/question/detail/${row.id}`)
    console.log(row);
  };

  return (
    <div style={{ height: '100%', width: 1500 }}>
      <DataGrid rows={data?.questionList || rows} columns={columns} pagination={true} onRowClick={handleRowClick} getRowId={(row) => row.id}/>
    </div>
  );
}

