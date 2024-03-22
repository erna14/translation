import { getDictionaries } from "../dictionaries";

export default async function AboutPage({ params }) {
  const {lang} = params
  const dictionary = await getDictionaries(lang)

  return (
    <div>
      <p> {dictionary.about.paragraph} </p>
    </div>
  );
}
