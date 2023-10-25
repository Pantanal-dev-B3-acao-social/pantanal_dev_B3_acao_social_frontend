export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: {
      "type": "string",
      "format": "date-time"
    },
    cpf: { type: "string" },
  },
  required: ["name, dateBirth, cpf"],
};
