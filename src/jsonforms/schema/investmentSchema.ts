export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "integer" },
    date: { "type": "string", },
    motivation: { type: "string" },
    approvedDate: {
      "type": "string",
      // "format": "date-time"
    },
    approvedBy: {
      "format": "approvedBy",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    socialAction: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social-action"
    },
    company: {
      "format": "companyId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "company"
    },
  },
  required: ["valueMoney", "socialAction", "date", "company", "motivation"],
};
