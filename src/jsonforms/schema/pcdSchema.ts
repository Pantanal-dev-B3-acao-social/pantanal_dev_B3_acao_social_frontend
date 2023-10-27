export const pcdSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    observation: { type: "string" },
    code: { type: "string" },
    acronym: { type: "string" },
  },
  required: ["name"],
};
