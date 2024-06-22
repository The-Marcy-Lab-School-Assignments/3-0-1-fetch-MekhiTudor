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
/** FEEDBACK: Great job getting most test cases to pass! */
export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } =
    setupPageBasics(appDiv);
  checkResponseStatus().then((response) => {
    renderStatus(statusDiv, response);
  });

  getUsers().then((response) => renderUsers(usersUl, response));

  const loadPost = (e) => {
    if (e.target.dataset.userId) {
      getUserPosts(e.target.dataset.userId).then((res) => {
        renderPosts(postsUl, res);
      });
    }
  };

  usersUl.addEventListener("click", loadPost);

  const handleSubmit = (e) => {
    e.preventDefault();
    //let form = e.target;
    /** FEEDBACK: Here rather than directly getting the element, you should be getting it from the form. */
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    //console.log(typeof username, typeof email);
    createNewUser({ username, email }).then((res) => {
      renderNewUser(newUserDiv, res);
    });
    document.getElementById("new-user-form").reset();
  };

  newUserForm.addEventListener("submit", handleSubmit);
}
