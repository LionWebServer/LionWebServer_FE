import {useState} from "react";
import question from "../api/questionAPI";


export const useGetAnswer = (questionId) =>{

  const [answerList, setData] = useState();
  const GetAnswer = async () => {
    question.getAnswer(questionId).then((res) => {
      const transformedAnswerList = res.data.map((item, index) => {
        return {
          id: item.answerId,
          content: item.content,
          createdAt: new Date(item.createdAt).toLocaleString(),
          userName: item.userName,
        };
      })
      setData(transformedAnswerList);
    })
  }
  return {GetAnswer, answerList}
}