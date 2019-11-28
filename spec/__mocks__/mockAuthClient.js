export const signUpSuccess = {
  authResponse: {
    status: "success",
    data: {
        id: 1,
        provider: "email",
        uid: "mock@mail.com",
        name: "Jeff",
        email: "mock@mail.com"
    }
  },
  signUpData: {
    email: "mock@mail.com",
    name: "Jeff",
    password: "password123",
    password_confirmation: "password123"
  }
};

export const signUpFailure = {
  authResponse: {
    status: "error",
    data: {
      id: null,
      provider: "email",
      uid :"",
      name: "wefewfw",
      email: null
    },
    errors:{
      email: ["can't be blank"],
      full_messages: ["Email can't be blank"]
    }
  },
  signUpData: {
    name: "Jeff",
    password: "password123",
    password_confirmation: "password123"
  }
};

export const signInSuccess = {
  authResponse: {
    data: {
        id: 1,
        provider: "email",
        uid: "mock@mail.com",
        name: "Jeff",
        email: "mock@mail.com"
    }
  },
  signInData: {
    email: "mock@mail.com",
    password: "password123"
  }
};

export const signInFailure = {
  authResponse: {
    success: false,
    errors: ["Invalid login credentials. Please try again"]
  },
  signInData: {
    email: "mock@mail.com",
    password: "wrongpassword"
  }
};

export const signOutSuccess = {
  authResponse: {
    success: true
  }
};

export const signOutFailure = {
  authResponse: {
    success: false,
    errors: ["User was not found or was not logged in."]
  }
};

export const verificationSuccess = {
  authResponse: {
    status: "success",
    data: {
        id: 1,
        provider: "email",
        uid: "mock@mail.com",
        name: "Jeff",
        email: "mock@mail.com"
    }
  },
  verificationData: {
    uid: "mock@mail.com",
    client: "DZGV_Bh8daWt-nH0QBdyZQ",
    "access-token": "MebKNvumiRNtfW5JL32A4Q"
  }
};

export const verificationFailure = {
  authResponse: {
    success: false,
    errors: [
      "Invalid login credentials"
    ]
  },
  verificationData: {
    uid: "mock@mail.com",
    client: "blah",
    "access-token": "blah"
  }
};
