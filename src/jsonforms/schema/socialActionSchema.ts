export const SocialActionSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    ong: {
      "format": "ongId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "ong"
    },
  },

  required: ["name", "ong"],
};
