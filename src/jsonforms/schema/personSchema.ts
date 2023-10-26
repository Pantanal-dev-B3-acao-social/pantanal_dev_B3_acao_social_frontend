export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: {
      "type": "string",
      "format": "date-time"
    },
    cpf: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
  },
  required: ["name", "dateBirth", "cpf", "status"],
};
