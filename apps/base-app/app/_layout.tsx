/**
 * All Global Configs and Layouts from here
 */

import { Layout } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Root() {
  // useEffect(() => {
  //   async function init() {
  //     const source = await dataSource.initialize();
  //     const authorRepo = source.getRepository(Author);
  //     const author = new Author();
  //     author.name = 'Person';
  //     author.birthDay = '1990-01-01';
  //     author.cardNumber = '123456789';
  //     await authorRepo.save(author);

  //     const authors = await authorRepo.find();
  //     console.log('authors', authors);
  //   }
  //   init();
  // }, []);

  return (
    <SafeAreaView>
      <RootLayout />
    </SafeAreaView>
  );
}

function RootLayout() {
  return (
    <Layout>
      <Layout.Children />
    </Layout>
  );
}