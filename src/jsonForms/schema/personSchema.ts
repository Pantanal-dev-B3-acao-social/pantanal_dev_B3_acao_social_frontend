export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: { type: "string" },
    cpf: {type: "string" },
  },
  required: ["name, dateBirth, cpf"],
};
