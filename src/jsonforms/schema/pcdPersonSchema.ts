export const pcdPersonSchema = {
  type: "object",
  properties: {
    person: {
      "format": "personId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    pcd: {
      "format": "pcdId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "pcd"
    },
  },
  required: ["person", "pcd"]
}