module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm start",
      env_production: {
        ...process.env,
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
