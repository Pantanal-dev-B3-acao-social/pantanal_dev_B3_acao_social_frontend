export const companySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    cnpj: {type: "string" },
    code: { type: "string" },
    
  },
  required: ["name, description, cnpj, code"],
};
