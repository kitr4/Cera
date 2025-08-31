const { login, User, users } = require('../login.js');

test("login() returns a User if username and password is correct", () => {
    // Arrange, act
    const result = login("Jeppe", "Jeppe123!");
    // Assert
  expect(result).toBeInstanceOf(User);
});

// Essentially what we do here is that we:
// use an expect function and pass in the function that we want to test, then we do matchers and helpers on that expect object.

test("login() returns null if username and password does not match", () => {
    // Arrange and act
    const result = login("Jeppe", "WrongPassword");
    // Assert
    expect(result).toBeNull();
});

test("login() returns null if username/password is omitted", () => {
    // Arrange and act
    const result = login();
    // Assert
    expect(result).toBeNull();
});

test("login() returns null if username and/or password are empty strings", () => {
    // When the function to be tested is so straight forward, here is what we do instead.
    // We just straight up act and assert in one.
  expect(login("", "Jeppe123!")).toBeNull();
  expect(login("Jeppe", "")).toBeNull();
  expect(login("", "")).toBeNull();
});