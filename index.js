/*function createLoginTracker(userInfo) {
    const user1 = {
        username: "TestUser",
         password: "1234",
   }

    let attemptCount = 0;

    const login = (passwordAttempt) => {

        attemptCount ++;

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        else if (passwordAttempt === user1.password && attemptCount <= 3 ) {
            return "Login successful";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };

    return login;


  } 

  console.log (createLoginTracker()("1234")); // Login successful
  console.log (createLoginTracker()("3425")); // Attempt 1: Login failed
  console.log (createLoginTracker()("3425")); // Attempt 2: Login failed*/






  function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const login = (passwordAttempt) => {
        attemptCount++;

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };

    return login;
}

// Testing the function:
const user1 = {
    username: "TestUser",
    password: "1234"
};


const user1Login = createLoginTracker(user1);


console.log(user1Login("1234")); // Login successful
console.log(user1Login("0000")); // Attempt 2: Login failed (if you try after success, count does not increases)
console.log(user1Login("1234")); // Attempt 3: log in successful
console.log(user1Login("6798")); // Account locked due to too many failed login attempts


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};