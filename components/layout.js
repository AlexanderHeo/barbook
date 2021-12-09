import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export const siteTitle = 'the IBA Compendium';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='images/iba.png' />
        <meta name='description' content='The IBA compendium' />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1>the IBA</h1>
            <h3>official cocktail list</h3>
          </>
        ) : (
          <Link href='/'>
            <a>
              <h1>go back</h1>
            </a>
          </Link>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
