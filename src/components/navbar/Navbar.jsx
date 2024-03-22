"use client"
import { useRouter } from "next/navigation"
import styles from "./Navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { setCookie } from "@/utils/cookies"

function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (locale) => {
    setCookie('preferredLanguage', locale, { expires: 365 });
    console.log(pathname)
    const asas = `/${pathname}`
    const a = asas.split('/').filter(val => !!val)
    console.log(a)
    const b = a.slice(1, a.length)
    console.log(b)
    const c = [locale, ...b]
    console.log(c)
    const newpath = c.join('/')
    console.log(newpath)
    router.push(`/${newpath}`)
  }

  return(
    <div className={styles.container}>
      <button onClick={()=>handleLanguageChange('en')} className={styles.change_language}> English </button>
      <button onClick={()=>handleLanguageChange('bs')} className={styles.change_language}> Bosnian </button>
    </div>
  )
}

export default Navbar