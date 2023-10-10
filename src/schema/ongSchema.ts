export const OngSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cpnj: { type: "string" },
    code: { type: "string" },
  },
  required: ["name", "code", "cnpj"],
};
