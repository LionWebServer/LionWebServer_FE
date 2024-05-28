import axios from "./config";
import Api from "./api";

const question = {
  getQuestion() {
    return axios.get("/server/api/question-list");
  },
  postQuestion(data) {
    return Api.post("/server/api/question", data);
  },
  getQuestionDetail(questionId) {
    return axios.get(`/server/api/question?questionId=${questionId}`);
  },
  getAnswer(questionId) {
    return axios.get(`/server/api/answer-list?questionId=${questionId}`);
  },
  postAnswer(data) {
    return Api.post("/server/api/answer", data);
  },
};

export default question;
