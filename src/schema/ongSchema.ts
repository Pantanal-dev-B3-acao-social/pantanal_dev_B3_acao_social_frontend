export const OngSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cnpj: { type: "string" },
  },
  required: ["name", "code", "cnpj"],
};
