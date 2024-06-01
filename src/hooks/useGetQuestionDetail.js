import {useState} from "react";
import question from "../api/questionAPI";
import {useLocation} from "react-router-dom";


export const useGetQuestionDetail = () => {

  const [data, setData] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const questionId = queryParams.get('questionId');


  const GetQuestionDetail = async () => {

    question.getQuestionDetail(questionId).then((res) => {
        const transData = {
          ...res.data,
          createdAt: new Date(res.data.createdAt).toLocaleString(),
        }
        if (res) {
          setData(transData);
        }
      }
    )
  }
  return {GetQuestionDetail, data}
}