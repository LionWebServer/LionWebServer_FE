import {useState} from "react";


export const useGetAnswer = () =>{

  const [answerList, setData] = useState();
  const GetAnswer = async () => {
    fetch("http://localhost:3000/api/answer.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response?.answerList.map((item, index) => {
          return {
            id: item.answerId,
            content: item.content,
            createdAt: new Date(item.createdAt).toLocaleString(),
            userName: item.userName,
          };
        }))

      })
  }
  return {GetAnswer, answerList}
}