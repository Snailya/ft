import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: `database.${process.env.NODE_ENV}.sqlite`,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
