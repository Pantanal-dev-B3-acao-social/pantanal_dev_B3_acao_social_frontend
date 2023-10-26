export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: { type: "string" },
    cpf: {type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
    userId: { type: "string" }
    
  },
  required: ["name, dateBirth, cpf, status"],
};
