import {useState} from "react";
import question from "../api/questionAPI";


export const useGetQuestion = () =>{


  const [data, setData] = useState();
  const GetQuestion = async () => {
    question.getQuestion().then((res) => {
      console.log(res)
      const transformedQuestionList = res.data.map((item, index) => {
        return {
          id: item.questionId,
          col1: (index + 1).toString(),
          col2: item.title,
          col3: item.createdAt,
        };
      })
      const transformedData = {
        ...res,
        questionList: transformedQuestionList,
      }
      setData(transformedData);

    })
  }
  return {GetQuestion, data}
}