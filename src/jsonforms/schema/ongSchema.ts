export const OngSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cnpj: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
    socialActionId: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social-action"
    },
  },
  required: ["name", "cnpj", "socialActionId"],
};
