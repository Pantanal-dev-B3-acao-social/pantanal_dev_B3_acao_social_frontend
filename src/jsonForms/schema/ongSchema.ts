export const OngSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cnpj: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
  },
  required: ["name", "code", "cnpj"],
};
