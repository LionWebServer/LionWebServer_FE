import {useState} from "react";
import question from "../api/questionAPI";
import {useLocation} from "react-router-dom";


export const useGetAnswer = () =>{

  const [answerList, setData] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const questionId = queryParams.get('questionId');



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