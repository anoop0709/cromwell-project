export const userLoginInput = [
  {
    id: "1",
    type: "email",
    name: "email",
    placeholder: "Email",
    errMessage: "Should be a valid email",
    required: "true",
    pattern:
      "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  },
  {
    id: "2",
    type: "password",
    name: "password",
    placeholder: "Password",
    errMessage:
      "Password should be minimum 8 characters and include uppercase,lowercase, number and special character",
    required: "true",
    pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$",
  },
];
