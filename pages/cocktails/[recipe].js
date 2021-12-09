import Layout from '../../components/layout';
import { getDrinkList, getRecipeData } from '../../lib/recipeData';
import styles from './recipe.module.css';

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>{recipeData.name}</h3>
        <p className={styles.mig}>
          <small>
            {recipeData.method.name}, {recipeData.ice.name} ice,{' '}
            {recipeData.glassware.name}
          </small>
        </p>
        <p className={styles.ingTitle}>
          <span>
            <em>Ingredients:</em>
          </span>
        </p>
        {recipeData.recipe.map((ing) => {
          return (
            <div key={ing.ingredient.id} className={styles.ing}>
              <p>
                {ing.ingredient.name}, {ing.size}
              </p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params);
  return {
    props: {
      recipeData,
    },
  };
}

export async function getStaticPaths() {
  const drinks = await getDrinkList();
  const paths = drinks.map((drink) => {
    return { params: { recipe: drink.name } };
  });
  return {
    paths,
    fallback: false,
  };
}
