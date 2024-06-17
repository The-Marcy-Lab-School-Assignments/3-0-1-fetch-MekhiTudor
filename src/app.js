import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from "./render-functions.js";
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers,
} from "./fetch-functions.js";

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } =
    setupPageBasics(appDiv);
  checkResponseStatus().then((response) => {
    renderStatus(statusDiv, response);
  });

  getUsers().then((response) => {
    renderUsers(usersUl, response);
  });
  usersUl.addEventListener("click", (e) => {
    let button = e.target;
    getUserPosts(button.dataset.userId).then((res) => {
      renderPosts(postsUl, res);
    });
  });
}
