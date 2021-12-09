import DrinkList from '../../components/drinkList';
import Layout from '../../components/layout';
import { getListData, getListPaths } from '../../lib/categoryListData.js';

export default function ListType({ categoryListData }) {
  return (
    <Layout>
      <DrinkList>{categoryListData}</DrinkList>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getListPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryListData = await getListData(params.type);
  return {
    props: {
      categoryListData,
    },
  };
}
