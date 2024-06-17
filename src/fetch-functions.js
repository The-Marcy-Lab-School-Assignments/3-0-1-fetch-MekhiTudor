const userUrl = "https://jsonplaceholder.typicode.com/users";

export const checkResponseStatus = () => {
  return fetch(userUrl).then((res) => {
    return { ok: res.ok, status: res.status, url: res.url };
  });
};
//console.log(checkResponseStatus());
export const getUsers = () => {
  return fetch(userUrl).then((res) => {
    return res.json();
  });
};

export const getUserPosts = (userId, maxNumPost = 3) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.slice(0, maxNumPost);
    });
};

export const createNewUser = (newUserData) => {
  const options = {
    method: "POST", // The type of HTTP request
    body: JSON.stringify(newUserData), // The data to be sent to the API
    headers: {
      "Content-Type": "application/json", // The format of the body's data
    },
  };
  return fetch(userUrl, options).then((res) => {
    return res.json();
  });
};
