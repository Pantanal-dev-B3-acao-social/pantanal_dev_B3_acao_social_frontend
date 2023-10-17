export const investmentSchema = {
  type: "object",
  properties: {
    value: { type: "string" },
    social_action: {type: "string" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: { type: "string" },
    company: {type: "string" },
  },
required: ["value", "social_action", "motivation", "approvedBy", "approvedDate", "company"],
};
