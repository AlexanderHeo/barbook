import prisma from './prisma';

export async function getListData(type) {
  if (
    type === 'vodka' ||
    type === 'gin' ||
    type === 'rum' ||
    type === 'tequila' ||
    type === 'whiskey'
  ) {
    const spiritId = await prisma.ingredient.findUnique({
      where: {
        name: type,
      },
      select: {
        id: true,
      },
    });
    const recipeList = await prisma.recipeIngredients.findMany({
      where: {
        ingredient_id: spiritId.id,
      },
      select: {
        recipe_id: true,
      },
    });
    const recipeIds = recipeList.map((recipe) => {
      return recipe.recipe_id;
    });
    const drinkList = await prisma.recipe.findMany({
      where: {
        id: { in: recipeIds },
      },
    });
    return { type, drinkList };
  } else if (
    type === 'unforgettables' ||
    type === 'contemporary' ||
    type === 'new era'
  ) {
    const drinkList = await prisma.recipe.findMany({
      where: {
        style: type,
      },
    });

    return { type, drinkList };
  }
}

export function getListPaths() {
  const types = [
    'vodka',
    'gin',
    'rum',
    'tequila',
    'whiskey',
    'unforgettables',
    'contemporary',
    'new era',
  ];
  return types.map((path) => ({
    params: { type: path },
  }));
}
