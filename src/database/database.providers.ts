import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "babillon_api",
        password: "babillon_api",
        database: "babillon_api",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
