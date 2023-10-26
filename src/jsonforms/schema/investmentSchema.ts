export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "integer" },
    motivation: { type: "string" },
    approvedDate: {
      "type": "string",
      "format": "date-time"
    },
    socialActionId: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social-action"
    },
    companyId: {
      "format": "companyId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "company"
    },
  },
  required: ["valueMoney", "socialActionId", "approvedDate", "companyId"],
};
