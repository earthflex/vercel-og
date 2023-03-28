import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Meta from '@/components/meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Meta />
      <main className={styles.main}>
        <div className={styles.center}>
          <div>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <h1>@vercel/og</h1>
          </div>
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>

        </div>
      </main>
    </>
  )
}
