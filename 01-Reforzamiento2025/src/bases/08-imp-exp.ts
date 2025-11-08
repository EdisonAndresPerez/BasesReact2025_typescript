import { heroes, Owner, type Hero } from "../data/heroes.data";

///--------------------------

const getHeroePorId = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  // if(!hero) {
  //     throw new Error(`No existe un hero con el id ${id}`)
  // }

  return hero;
};

console.log(getHeroePorId(6));

///--------------------------

export const getHeroesByOwner = (owner: Owner) => {
  const heroByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroByOwner;
};


  console.log(getHeroesByOwner(Owner.Marvel))
