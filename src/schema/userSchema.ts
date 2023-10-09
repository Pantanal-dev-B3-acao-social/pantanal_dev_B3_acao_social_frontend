export const UserSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      maxLength: 100,
      customErrors: "",
    },
  },
};