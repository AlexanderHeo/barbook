import Layout from '../../components/layout';
import { getDrinkList, getRecipeData } from '../../lib/recipeData';

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <h3>{recipeData.name}</h3>
      <p>
        <small>
          {recipeData.method.name}, {recipeData.ice.name} ice,{' '}
          {recipeData.glassware.name}
        </small>
      </p>
      <p>
        <span>
          <em>Ingredients:</em>
        </span>
      </p>
      {recipeData.recipe.map((ing) => {
        return (
          <div key={ing.ingredient.id}>
            <p>
              {ing.ingredient.name}, {ing.size}
            </p>
          </div>
        );
      })}
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
