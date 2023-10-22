export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "integer" },
    socialActionId: { type: "string" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: {
      "type": "string",
      "format": "date-time"
    },
    companyId: { type: "string" },
  },
  required: ["valueMoney", "socialActionId", "motivation", "approvedBy", "approvedDate", "companyId"],
};
