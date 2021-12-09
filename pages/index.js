import Head from 'next/head';
import CategoryList from '../components/categoryList';
import Layout, { siteTitle } from '../components/layout';
import { categoryList, spiritList } from '../lib/list';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CategoryList title='List by Spirit Type'>{spiritList}</CategoryList>
      <CategoryList title='List by Category'>{categoryList}</CategoryList>
    </Layout>
  );
}
