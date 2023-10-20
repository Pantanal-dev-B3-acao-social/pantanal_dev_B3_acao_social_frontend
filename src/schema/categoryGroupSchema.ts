export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
   
     categoryGroup: {
       type: "object",
       properties: {},
    },
  },
  required: ["name", "description", "categoryGroup"],
};
