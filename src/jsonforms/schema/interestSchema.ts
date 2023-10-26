export const interestSchema = {
  type: "object",
  properties: {
    personId: {
      "format": "personId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    categoryId: {
      "format": "categoryId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category"
    },
  },
  required: ["personId", "categoryId"]
}