import {useState} from "react";
import axios from "axios";
import question from "../api/questionAPI";


export const usePostAnswer = (questionId) =>{


  const PostAnswer = async (submitData) => {
    const params =  {
      "questionId": questionId,
      "content": submitData.answer
    }

    question.postAnswer(params).then((res) => {
      console.log(res)
      alert("답변이 등록되었습니다.")
    }).catch((err) => {
      console.log(err)
      alert("답변 등록에 실패했습니다.")
    })



    // fetch("http://localhost:3000/api/answer/create", {
    //   method: "POST",
    //   body: JSON.stringify(submitData),
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     console.log("잘 된다")
    //
    //   })
  }
  return {PostAnswer}
}