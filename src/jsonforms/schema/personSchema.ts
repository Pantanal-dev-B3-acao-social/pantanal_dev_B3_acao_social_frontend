export const personSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    dateBirth: {
      "type": "string",
      // "format": "date-time",
      "format": "custom-date-time",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d+$"
    },
    cpf: { type: "string" },
    status: {
      type: "string",
      enum: ["DEFAULTER", "SUPPLIER", "SUSPENDED", "REGULAR"],
    },
  },
  required: ["name", "dateBirth", "cpf", "status"],
};
