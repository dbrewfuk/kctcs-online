const config = {
  pgUrl: import.meta.env.POSTGRES_URL,
  pgPassword: import.meta.env.POSTGRES_PASSWORD,
  pgUser: import.meta.env.POSTGRES_USER,
  pgHost: import.meta.env.POSTGRES_HOST,
  pgDatabase: import.meta.env.POSTGRES_DATABASE,
};

export default config;
