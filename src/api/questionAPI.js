import axios from "./config";
import Api from "./api";

const question = {
  getQuestion() {
    return axios.get("http://110.11.183.148:8000/server/api/question-list");
  },
  postQuestion(data) {
    return Api.post("http://110.11.183.148:8000/server/api/question", data);
  },
  getQuestionDetail(questionId) {
    return axios.get(`http://110.11.183.148:8000/api/question?questionId=${questionId}`);
  },
  getAnswer(questionId) {
    return axios.get(`http://110.11.183.148:8000/server/api/answer-list?questionId=${questionId}`);
  },
  postAnswer(data) {
    return Api.post("http://110.11.183.148:8000/server/api/answer", data);
  },
};

export default question;
