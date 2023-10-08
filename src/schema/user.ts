const Usuario = {
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
      nome: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      nomeSocial: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      sexo: {
        enum: ["Masculino", "Feminino"],
        customErrors: "",
      },
      tipoDocumento: {
        enum: ["CPF", "Passaporte"],
        customErrors: "",
      },
      documento: {
        type: "string",
        // mask: '',
        // maskSelector: (data, row) => {
        //   if (row.tipoDocumento == 'CPF') return '999.999.999-99';
        //   else return '';
        // },
        customErrors: "",
      },
      telefone: {
        type: "string",
        minLength: 3,
        maxLength: 100,
      },
      celular: {
        type: "string",
        // mask: '(99) 9999-9999',
        // maskSelector: (value) => {
        //   const len = value.replace(/[\W_]/g, '').length;
        //   if (len > 10) return '(99) 99999-9999';
        //   else return '(99) 9999-9999';
        // },
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      email: {
        type: "string",
        format: "email",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      emailSecundario: {
        type: "string",
        format: "email",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      password: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
      dataDeNascimento: {
        type: "string",
        mask: "99/99/9999",
        customErrors: "",
        description: 'Deve respeitar o formato "dd/mm/yyyy"',
      },
      nivelAcademicoId: {
        type: "integer",
        format: "select",
        customErrors: "",
      },
      interesseConsultor: {
        type: "string",
        maxLength: 1,
        description: "0 ou 1",
        customErrors: "",
      },
      lattes: {
        type: "string",
        minLength: 3,
        maxLength: 100,
        customErrors: "",
      },
    },
    required: [
      "cep",
      "pais",
      "estado",
      "cidade",
      "bairro",
      "rua",
      "numero",
      "complemento",
      "nome",
      "nomeSocial",
      "sexo",
      "tipoDocumento",
      "documento",
      "celular",
      "email",
      "password",
      "dataDeNascimento",
      "nivelAcademicoId",
      "interesseConsultor",
    ],
  },
  uischema: {
    type: "Categorization",
    elements: [
      {
        type: "Category",
        label: "Informações de Login",
        elements: [
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "Control",
                label: "Email",
                scope: "#/properties/email",
              },
              {
                type: "Control",
                label: "Senha",
                scope: "#/properties/password",
              },
            ],
          },
        ],
      },
      {
        type: "Category",
        label: "Informações Pessoais",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Nome",
                scope: "#/properties/nome",
              },
              {
                type: "Control",
                label: "Nome Social",
                scope: "#/properties/nomeSocial",
              },
              {
                type: "Control",
                label: "Sexo",
                scope: "#/properties/sexo",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Celular",
                scope: "#/properties/celular",
              },
              {
                type: "Control",
                label: "Telefone",
                scope: "#/properties/telefone",
              },
              {
                type: "Control",
                label: "Data de Nascimento",
                scope: "#/properties/dataDeNascimento",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Email Secundário",
                scope: "#/properties/emailSecundario",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Email Secundário",
                scope: "#/properties/emailSecundario",
              },
            ],
          },
        ],
      },
      {
        type: "Category",
        label: "Endereço",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "País",
                scope: "#/properties/pais",
              },
              {
                type: "Control",
                label: "CEP",
                scope: "#/properties/cep",
              },
              {
                type: "Control",
                label: "Estado",
                scope: "#/properties/estado",
              },
              {
                type: "Control",
                label: "Cidade",
                scope: "#/properties/cidade",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Bairro",
                scope: "#/properties/bairro",
              },
              {
                type: "Control",
                label: "Rua",
                scope: "#/properties/rua",
              },
              {
                type: "Control",
                label: "Número",
                scope: "#/properties/numero",
              },
              {
                type: "Control",
                label: "Complemento",
                scope: "#/properties/complemento",
              },
            ],
          },
        ],
      },
      // {
      //   type: 'HorizontalLayout',
      //   elements: [
      //     {
      //       type: 'Control',
      //       label: 'Celular',
      //       scope: '#/properties/celular',
      //     },
      //     {
      //       type: 'Control',
      //       label: 'Email',
      //       scope: '#/properties/email',
      //     },
      //     {
      //       type: 'Control',
      //       label: 'Password',
      //       scope: '#/properties/password',
      //     },
      //     {
      //       type: 'Control',
      //       label: 'Data de Nascimento',
      //       scope: '#/properties/dataDeNascimento',
      //     },
      //   ],
      // },
      {
        type: "Category",
        label: "Outros",
        elements: [
          {
            type: "Control",
            label: "Tipo de Documento",
            scope: "#/properties/tipoDocumento",
          },
          {
            type: "Control",
            label: "Documento",
            scope: "#/properties/documento",
          },
          {
            type: "Control",
            label: "Nivel Acadêmico",
            scope: "#/properties/nivelAcademicoId",
          },
          {
            type: "Control",
            label: "Interesse Consultor",
            scope: "#/properties/interesseConsultor",
          },
          {
            type: "Control",
            label: "Lattes",
            scope: "#/properties/lattes",
          },
        ],
      },
    ],
    options: {
      variant: "stepper",
      showNavButtons: true,
    },
  },
  tableSchema: [
    { id: "id", label: "Id", align: "center" },
    { id: "nome", label: "Nome", align: "center" },
    { id: "codigo", label: "Codigo", align: "center" },
  ],
  actions: {
    getAll: [],
    findById: [],
    create: [],
    update: [],
    delete: [],
  },
};
export default Usuario;
