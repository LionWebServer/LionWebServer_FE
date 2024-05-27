import {useState} from "react";


export const useGetQuestion = () =>{



  const [data, setData] = useState();
  const GetQuestion = async () => {
    fetch("http://localhost:3000/api/question.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        const transformedQuestionList = response.questionList.map((item, index) => {
          return {
            id: item.questionId,
            col1: (index + 1).toString(),
            col2: item.title,
            col3: item.createdAt,
          };
        })
        const transformedData = {
          ...response,
          questionList: transformedQuestionList,
        }
        setData(transformedData);
      })
  }
  return {GetQuestion, data}
}