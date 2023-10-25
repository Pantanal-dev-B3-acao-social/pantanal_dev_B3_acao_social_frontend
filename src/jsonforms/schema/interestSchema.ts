export const interestSchema = {
  type: "object",
  properties: {
    person: {
      "format": "personId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    category: {
      "format": "categoryId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category"
    },
  },
  required: ["person", "category"]
}