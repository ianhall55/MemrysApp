
export const signup = function(user, success, error) {
  fetch('http://10.0.2.2:3000/api/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(function(response) {
    return response.json();
  }).then(success)
  .catch(error);

};


export const login = function(user, success, error) {
  fetch('http://10.0.2.2:3000/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(function(response) {
    return response.json();
  }).then(success)
  .catch(error);
};


export const logout = function(success) {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    success,
    error: () => {
      console.log("Logout error in SessionUtil#logout");
    }
  });
};
