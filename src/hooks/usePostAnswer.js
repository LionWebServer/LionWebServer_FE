import {useState} from "react";
import axios from "axios";


export const usePostAnswer = () =>{


  const PostAnswer = async (submitData) => {
    console.log(submitData);
    fetch("http://localhost:3000/api/answer/create", {
      method: "POST",
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("잘 된다")

      })
  }
  return {PostAnswer}
}