"use client"
import { useRouter } from "next/navigation"
import styles from "./Navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (locale) => {
    console.log(pathname)
    const newpath = pathname.split('/').pop().join('/')
    router.push(`/${locale}${newpath}`)
  }

  return(
    <div className={styles.container}>
      <button onClick={()=>handleLanguageChange('en')} className={styles.change_language}> English </button>
      <button onClick={()=>handleLanguageChange('bs')} className={styles.change_language}> Bosnian </button>
    </div>
  )
}

export default Navbar