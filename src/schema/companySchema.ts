export const ComnpanySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    code: { type: "string" },
  },
  required: ["name"],
};
