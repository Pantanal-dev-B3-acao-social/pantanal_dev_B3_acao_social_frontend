export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: {
      "type": "string",
      // "format": "date-time",
      "format": "custom-date-time",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d+$"
    },
    cpf: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
    keycloakUser: {
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
            cpf: {
              type: "string",
            },
          }
        },
        credentials: {
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
            },
          },
        },
      },
    }
  },
  required: ["name", "dateBirth", "cpf", "status"],
};
