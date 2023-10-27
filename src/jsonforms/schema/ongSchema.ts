export const OngSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    cnpj: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
    person: {
      "format": "personId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
  },
  required: ["name", "cnpj", "person"],
};