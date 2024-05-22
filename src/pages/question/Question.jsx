import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const rows= [
  { id: 1, col1: '1', col2: '질문1', col3 : '2024년 5월 22일' },
  { id: 2, col1: '2', col2: '질문2', col3 : '2024년 5월 24일' },
  { id: 3, col1: '3', col2: '질문3', col3 : '2024년 5월 25일' },
];

const columns = [
  { field: 'col1', headerName: '번호', width: 150 },
  { field: 'col2', headerName: '제목', width: 150 },
  { field: 'col3', headerName: '작성일자', width: 150 },
];

export default function Question() {

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

