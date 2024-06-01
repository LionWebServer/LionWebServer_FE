import {useState} from "react";
import question from "../api/questionAPI";


export const useGetQuestionDetail = (questionId) =>{

  const [data, setData] = useState();

  const GetQuestionDetail = async () => {
    question.getQuestionDetail(questionId).then((res) => {
      const transData = {
        ...res.data,
        createdAt: new Date(res.data.createdAt).toLocaleString(),
      }
      if (res){
        setData(transData);
      }}
    )

  }

  return {GetQuestionDetail, data}
}