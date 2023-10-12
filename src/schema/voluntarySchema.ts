export const voluntarySchema = {
  "type": "object",
  "properties": {
    "person": { "type": "string" },
    "observation": { "type": "string" },
    "socialAction": { "type": "string" },
    "approvedBy": { "type": "string" },
    "approvedDate": { "type": "string" },
    "feedbackVoluntary": { "type": "string" },
    "feedbackScore": { "type": "number" }
  },
  "required": ["person", "observation", "socialAction", "approvedBy", "approvedDate", "feedbackVoluntary", "feedbackScore"]
};
