class User {
  constructor(
    username,
    password
  ){
    this.username = username,
    this.password = password
  }
}

const users = [
  new User("Jeppe", "Jeppe123!"), 
  new User("Nicolai", "Nicolai123!"), 
  new User("Ida", "Ida123!"), 
  new User("Casper", 
    "Casper123!")
  ];


function login(username, password){
  const user = users.find(u => u.username === username) || null;

  if (user == null){
    console.log("No user with that username was found.");
    return user;
  }

  if (user.password != password){
    console.log("The username and password does not match.")
    return null;
  }
  // If the conditions are met, the username and password does match and 'user' is returned.
  return user;
}

module.exports = { login, User, users };