export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "integer" },
    motivation: { type: "string" },
    approvedDate: {
      "type": "string",
      // "format": "date-time"
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
  required: ["valueMoney", "socialAction", "approvedDate", "company"],
};
