import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import List from '../components/list';
import { categoryList, spiritList } from '../lib/list';

// export const getStaticProps = async () => {
//   const name = await prisma.recipe.findMany();
//   console.log('name.id:', name);
// const recipe = await prisma.recipeIngredients.findMany({
//   where: { recipe_id: name.id },
//   select: {
//     ingredient: true,
//     size: true,
//   },
// });
// console.log('recipe:', recipe);

// recipe.forEach((each) => {
//   console.log(each.ingredient.name);
//   console.log(each.size);
// });

//   return { props: { name } };
// };

// const name = 'contemporary';

// export const getStaticProps = async () => {
//   if (
//     name === 'vodka' ||
//     name === 'gin' ||
//     name === 'rum' ||
//     name === 'tequila' ||
//     name === 'whiskey'
//   ) {
//     const spiritId = await prisma.ingredient.findUnique({
//       where: {
//         name: name,
//       },
//       select: {
//         id: true,
//       },
//     });
//     const recipeList = await prisma.recipeIngredients.findMany({
//       where: {
//         ingredient_id: spiritId.id,
//       },
//       select: {
//         recipe_id: true,
//       },
//     });
//     const recipeIds = recipeList.map((recipe) => {
//       return recipe.recipe_id;
//     });
//     const drinkList = await prisma.recipe.findMany({
//       where: {
//         id: { in: recipeIds },
//       },
//     });

//     return {
//       props: { drinkList },
//     };
//   } else if (
//     name === 'unforgettables' ||
//     name === 'contemporary' ||
//     name === 'new era'
//   ) {
//     const drinkList = await prisma.recipe.findMany({
//       where: {
//         style: name,
//       },
//     });

//     return {
//       props: { drinkList },
//     };
//   }
// };

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
