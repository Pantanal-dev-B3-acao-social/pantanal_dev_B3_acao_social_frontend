export const ContractSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    justification: { type: "string" },
    status: {
      type: "string",
      enum: ["RUNNING", "CREATED", "DRAFTED", "PENDING", "CANCELED", "DONE", "REJECTED", "EXPIRATED", "EXPIRED"],
    },
    socialActionId: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social-Action"
    },
    company: {
      "format": "companyId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "company"
    },
    ong: {
      "format": "ongId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "ong"
    },
  },
  required: ["title", "description", "justification", "status", "socialAction", "company", "ong"],
}