import { Strong } from '@deur/design-system';
import { HomeIcon } from '@deur/feature-home';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@deur/next</title>
        <meta name="description" content="@deur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="text-[120px] uppercase  text-red-700">Look wat is this</div>

        <br />
        <Strong classNames="lowercase">Plain was strong</Strong>
        <Strong>Plain was strong</Strong>
        <HomeIcon />
        <br />
      </main>
    </div>
  );
}
