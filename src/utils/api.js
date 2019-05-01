import axios from "axios";
import store from "../components/app/store";
import selectors from "../components/app/selectors";

const BASE_API_URL = "http://test.subj.ua/api/v1";

const POSTS_URL = "/notes";
const TOKEN_URL = "/tokens";

const GET = "get";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL
});

const makeRequestListPosts = () => {
  const state = store.getState();
  const authToken = selectors.getAuthToken(state);
  return axiosInstance(POSTS_URL, {
    method: GET,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }).then(resp => {
    return resp.data.notes;
  });
};

const makeRequestToken = () => {
  return axiosInstance
    .post(TOKEN_URL, { userName: "Andrii Tokar" })
    .then(resp => {
      return resp.data.token;
    });
};

const addPost = (title, content) => {
  const state = store.getState();
  const authToken = selectors.getAuthToken(state);

  return axiosInstance
    .post(
      POSTS_URL,
      { title: title, content: content },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )

    .then(resp => {
      return resp;
    });
};

const deletePosts = id => {
  const state = store.getState();
  const authToken = selectors.getAuthToken(state);

  return axiosInstance
    .delete(`${POSTS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(resp => {
      return resp;
    });
};

export default {
  makeRequestListPosts,
  makeRequestToken,
  addPost,
  deletePosts
};
