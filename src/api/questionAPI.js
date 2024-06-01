import axios from "./config";
import Api from "./api";

const question = {
  getQuestion() {
    return Api.get("http://110.11.183.148:8000/api/question-list");
  },
  postQuestion(data) {
    return Api.post("http://110.11.183.148:8000/api/question", data);
  },
  getQuestionDetail(questionId) {
    return Api.get(`http://110.11.183.148:8000/api/question/${questionId}`);
  },
  getAnswer(questionId) {
    return Api.get(`http://110.11.183.148:8000/api/answer-list/${questionId}`);
  },
  postAnswer(data) {
    return Api.post("http://110.11.183.148:8000/api/answer", data);
  },
};

export default question;
