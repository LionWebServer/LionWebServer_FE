import {useState} from "react";
import axios from "axios";
import question from "../api/questionAPI";
import {useLocation, useNavigate} from "react-router-dom";


export const usePostQuestion = () =>{
  const navigate = useNavigate();

  const PostQuestion = async (submitData) => {

    question.postQuestion(submitData).then((res) => {
      alert("질문이 등록되었습니다.")
      navigate('/')
    }).catch((err) => {
      alert("질문 등록에 실패했습니다.")
    })
  }
  return {PostQuestion}
}