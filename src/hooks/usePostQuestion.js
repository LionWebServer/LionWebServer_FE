import {useState} from "react";
import axios from "axios";
import question from "../api/questionAPI";
import {useLocation} from "react-router-dom";


export const usePostAnswer = () =>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const questionId = queryParams.get('questionId');

  const PostAnswer = async (submitData) => {
    const params =  {
      "questionId": questionId,
      "content": submitData.answer
    }
    question.postAnswer(params).then((res) => {
      alert("답변이 등록되었습니다.")
      window.location.reload();
    }).catch((err) => {
      alert("답변 등록에 실패했습니다.")
    })
  }
  return {PostAnswer}
}