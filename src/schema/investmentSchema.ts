export const investmentSchema = {
  type: "object",
  properties: {
    valueMoney: { type: "number" },
    date: { type: "string" },
    socialActionId: {type: "string" },
    motivation: { type: "string" },
    approvedBy: { type: "string" },
    approvedDate: { type: "string" },
    companyId: {type: "string" },
  },
required: ["valueMoney", "socialActionId", "motivation", "approvedBy", "approvedDate", "companyId"],
};
