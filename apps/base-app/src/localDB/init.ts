import { DataSource } from 'typeorm/browser';

import { Member } from './entities/members';

const dataSource = new DataSource({
  database: 'test19',
  driver: require('expo-sqlite'),
  entities: [Member],
  synchronize: true,
  type: 'expo',
});

export const init = async (): Promise<DataSource> => {
  await dataSource.initialize();
  return dataSource;
};

// Close the database connection
export const close = async (): Promise<void> => {
  await dataSource.destroy();
};
