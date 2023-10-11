export const investmentSchema = {
  type: "object",
  properties: {
    value: { type: "string" },
    date: { type: "string" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: { type: "string" },
    company: {type: "string" },
  },
required: ["value", "date", "motivation", "approvedBy", "approvedDate", "company"],
};
