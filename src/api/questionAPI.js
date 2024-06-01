import axios from "./config";
import Api from "./api";

const question = {
  getQuestion() {
    return Api.get("/server/api/question-list");
  },
  postQuestion(data) {
    return Api.post("/server/api/question", data);
  },
  getQuestionDetail(questionId) {
    return Api.get(`/server/api/question/${questionId}`);
  },
  getAnswer(questionId) {
    return Api.get(`/server/api/answer-list/${questionId}`);
  },
  postAnswer(data) {
    return Api.post("/server/api/answer", data);
  },
};

export default question;
