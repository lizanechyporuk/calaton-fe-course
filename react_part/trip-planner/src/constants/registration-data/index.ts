const fieldRules = {
  firstName: {
    required: { value: true, message: "This field is required" },
    pattern: {
      value: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/,
      message: "Invalid first name format",
    },
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters long",
    },
    maxLength: {
      value: 30,
      message: "First name must not exceed 30 characters",
    },
  },

  lastName: {
    required: { value: true, message: "This field is required" },
    pattern: {
      value: /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/,
      message: "Invalid last name format",
    },
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters long",
    },
    maxLength: {
      value: 30,
      message: "Last name must not exceed 30 characters",
    },
  },

  phoneNumber: {
    required: { value: true, message: "This field is required" },
    pattern: {
      value: /^\+(48|380)\d{9}$/,
      message: "Invalid phone number format",
    },
  },

  login: {
    required: { value: true, message: "This field is required" },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    },
  },

  password: {
    required: { value: true, message: "This field is required" },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    maxLength: {
      value: 20,
      message: "Password must not be longer 20 characters long",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  },

  gender: {
    required: { value: true, message: "This field is required" },
  },

  checkbox: {
    required: { value: true, message: "This field is required" },
  },
};

export { fieldRules };
