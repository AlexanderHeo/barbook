import Layout from '../../components/layout';
import { getListData, getListPaths } from '../../lib/listData.js';

export default function ListType({ listData }) {
  console.log('listData:', listData);
  return (
    <Layout>
      <ul>
        {listData.drinkList.map((drink) => {
          return (
            <li key={drink.id}>
              {drink.name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
            </li>
          );
        })}
      </ul>
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
  const listData = await getListData(params.type);
  return {
    props: {
      listData,
    },
  };
}
