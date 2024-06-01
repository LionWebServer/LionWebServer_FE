import {useState} from "react";
import question from "../api/questionAPI";
import {useParams} from "react-router-dom";


export const useGetAnswer = () =>{

  const { questionId } = useParams(); // URL에서 questionId 추출

  const [answerList, setData] = useState();
  const GetAnswer = async () => {
    question.getAnswer(questionId).then((res) => {
      const transformedAnswerList = res.answerList.map((item, index) => {
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