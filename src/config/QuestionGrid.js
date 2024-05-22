export const rows= [
  { id: 1, col1: '1', col2: '질문1', col3 : '2024년 5월 22일' },
  { id: 2, col1: '2', col2: '질문2', col3 : '2024년 5월 24일' },
  { id: 3, col1: '3', col2: '질문3', col3 : '2024년 5월 25일' },
];

export const columns = [
  { field: 'col1', headerName: '번호', width: 100},
  { field: 'col2', headerName: '제목', width: 700 },
  { field: 'col3', headerName: '작성일자', type: 'dateTime', width: 250, valueGetter: (value) => value && new Date(value)},
];