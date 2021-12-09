import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import List from '../components/list';
import { categoryList, spiritList } from '../lib/list';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <List title='List by Spirit Type'>{spiritList}</List>
      <List title='List by Category'>{categoryList}</List>
    </Layout>
  );
}
