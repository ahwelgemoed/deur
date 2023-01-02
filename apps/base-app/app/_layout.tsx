/**
 * All Global Configs and Layouts from here
 */

import { Layout } from 'expo-router';
import { useEffect } from 'react';
import { DataSource } from 'typeorm/browser';

import { Author } from '../src/entities/members';

const dataSource = new DataSource({
  database: 'test19',
  driver: require('expo-sqlite'),
  entities: [Author],
  synchronize: true,
  type: 'expo',
});
export default function Root() {
  useEffect(() => {
    async function init() {
      const source = await dataSource.initialize();
      const authorRepo = source.getRepository(Author);
      const author = new Author();
      author.name = 'Person';
      author.birthDay = '1990-01-01';
      author.cardNumber = '123456789';
      await authorRepo.save(author);

      const authors = await authorRepo.find();
      console.log('authors', authors);
    }
    init();
  }, []);

  return <RootLayout />;
}

function RootLayout() {
  return (
    <Layout>
      <Layout.Children />
    </Layout>
  );
}
