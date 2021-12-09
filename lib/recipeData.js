import prisma from './prisma';

export async function getDrinkList() {
  const drinks = await prisma.recipe.findMany();
  return drinks;
}

export async function getRecipeData(drink) {
  const drinkRecipe = await prisma.recipe.findUnique({
    where: {
      name: drink.recipe,
    },
    include: {
      glassware: true,
      ice: true,
      method: true,
      recipe: {
        select: {
          ingredient: true,
          size: true,
        },
      },
    },
  });
  return drinkRecipe;
}
