import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {useGetQuestion} from "../../hooks/useGetQuestion";


const rows= [
  { id: 1, col1: '1', col2: '질문1', col3 : '2024년 5월 22일' },
  { id: 2, col1: '2', col2: '질문2', col3 : '2024년 5월 24일' },
  { id: 3, col1: '3', col2: '질문3', col3 : '2024년 5월 25일' },
];

const columns = [
  { field: 'col1', headerName: '번호', width: 100},
  { field: 'col2', headerName: '제목', width: 700 },
  { field: 'col3', headerName: '작성일자', type: 'dateTime', width: 250, valueGetter: (value) => value && new Date(value)},
];

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

