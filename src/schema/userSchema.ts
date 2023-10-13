export const UserSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
    },
    enable: {
      type: "boolean",
    },
    email: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    attributes: {
      type: "object",
      properties: {
        cpf:{
          type: "string",
        },    
      }
    },
    credentials: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: {
            type: "string"
          },
          value: {
            type: "string"
          },
          temporary: {
            type: "boolean"
          }
        },
      },
    },
  },
  required: ["username", "enable", "email", "fistName", "lastName", "attributes", "credentials"],

};

