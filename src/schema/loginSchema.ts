export const LoginSchema= {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: 'Username',
      description: 'Enter your username',
      pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
      maxLength: 50,
      minLength: 3,
      customErros: '',
    },
    password: {
      type: 'string',
      title: 'Password',
      description: 'Enter your password',
      maxLength: 20,
      minLength: 6,
      customErros: '',
    },
  },
  required: ['username', 'password']
};
//pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/.[a-zA-Z]{2,}$',