export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "integer" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: {
      "type": "string",
      "format": "date-time"
    },
    socialActionId: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social"
    },
    companyId: { type: "string" },
  },
  required: ["valueMoney", "socialActionId", "motivation", "approvedBy", "approvedDate", "companyId"],
};
