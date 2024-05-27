import {useState} from "react";


export const useGetQuestionDeatil = () =>{

  const [data, setData] = useState();
  const GetQuestionDeatil = async () => {
    fetch("http://localhost:3000/api/question_detail.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        const transData = {
          ...response,
          createdAt: new Date(response.createdAt).toLocaleString(),
        }
        if (response){
          setData(transData);
        }
      })
  }
  return {GetQuestionDeatil, data}
}