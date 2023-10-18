export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "string" },
    socialActionId: {type: "string" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: { type: "string" },
    companyId: {type: "string" },
  },
required: ["value", "social_action", "motivation", "approvedBy", "approvedDate", "company"],
};
