import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  bs: () => import('./dictionaries/bs.json').then((module) => module.default),
}

export const getDictionaries = async (locale) => {
  return dictionaries[locale]();
};