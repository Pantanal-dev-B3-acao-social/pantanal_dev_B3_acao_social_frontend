export const interestSchema = {
  type: "object",
  properties: {
    person: {
      "format": "person",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social"
    },
    category: {
      "format": "category",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social"
    },
  },
  required: ["person", "category"]
}