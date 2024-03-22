import { getDictionaries } from "./dictionaries";
import styles from "./page.module.css"

export default async function Home({ params }) {
  const {lang} = params
  const dictionary = await getDictionaries(lang)
  
  return (
    <div className={styles.container}>
      <h1> {dictionary.home.header} </h1>
      <p> {dictionary.home.paragraph} </p>
    </div>
  );
}
