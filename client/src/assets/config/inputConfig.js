export const userLoginInput = [
  {
    id: "1",
    type: "email",
    name: "email",
    label: "Email:",
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
    label: "Password:",
    placeholder: "Password",
    errMessage:
      "Password should be minimum 8 characters and include uppercase,lowercase, number and special character",
    required: "true",
    pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$",
  },
];

export const userRegisterInput = [
  {
    id: "1",
    type: "text",
    name: "firstName",
    label: "First Name:",
    placeholder: "First Name",
    errMessage:
      "First name should be 3-16 characters and shouldn't be used any special charcters",
    required: "true",
    pattern: "^[A-Za-z0-9 ]{3,16}$",
  },
  {
    id: "2",
    type: "text",
    name: "lastName",
    label: "Last Name:",
    placeholder: "Last Name",
    errMessage:
      "Last name should be 3-16 characters and shouldn't be used any special characters",
    required: "true",
    pattern: "^[A-Za-z0-9 ]{3,16}$",
  },
  {
    id: "3",
    type: "email",
    name: "email",
    label: "Email:",
    placeholder: "Email",
    errMessage: "Should be a valid email",
    required: "true",
    pattern:
      "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  },
  {
    id: "4",
    type: "password",
    name: "password",
    label: "Password:",
    placeholder: "Password",
    errMessage:
      "Password should be minimum 8 characters and include uppercase, lowercase, number and special character",
    required: "true",
    pattern:
      "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$",
  }
]