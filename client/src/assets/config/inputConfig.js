export const userLoginInput = [
    {
        id: "1",
        type: "email",
        name: "email",
        placeholder: "Email",
        errMessage: "Should be a valid email",
        required: "true",
        pattern: "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
      },
      {
        id: "2",
        type: "password",
        name: "password",
        placeholder: "Password",
        errMessage: "Password should be 8-20 characters and include uppercase,lowercase, number and special character",
        required: "true",
        pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$"
      }
];

export const userRegisterInput = [
    {
        id: "1",
        type: "text",
        name: "firstname",
        placeholder: "First Name",
        errMessage: "First name should be 3-16 characters and shouldn't be used any special charcters",
        required: "true",
        pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
        id: "2",
        type: "text",
        name: "lastname",
        placeholder: "Last Name",
        errMessage: "Last name should be 3-16 characters and shouldn't be used any special characters",
        required: "true",
        pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
        id: "3",
        type: "email",
        name: "email",
        placeholder: "Email",
        errMessage: "Should be a valid email",
        required: "true",
        pattern: "^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    },
    {
        id: "4",
        type: "password",
        name: "password",
        placeholder: "Password",
        errMessage: "Password should be 8-20 characters and include atleast uppercase, lowercase, number and special character",
        required: "true",
        pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$"

    },
    {
        id: "5",
        type: "password",
        name: "confirmpassword",
        placeholder: "Confirm password",
        errMessage: "Confirm password not match",
        required: "true",
        pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=])(?=.*[0-9]).*$"
    }
];