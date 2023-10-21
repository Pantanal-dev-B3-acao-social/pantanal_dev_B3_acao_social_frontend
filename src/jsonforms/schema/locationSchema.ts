export const LocationSchema = {
  schema: {
    type: "object",
    properties: {
      cep: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        cep: "",
      },
      pais: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      estado: {
        type: "string",
        customErrors: "",
      },
      cidade: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      bairro: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      rua: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      numero: {
        type: "string",
        minLength: 1,
        maxLength: 100,
        customErrors: "",
      },
      complemento: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
    },
  },
};
