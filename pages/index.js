import Head from 'next/head'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Menu from '../components/Menu'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSetMenuOpen = (toggle) => {
    setMenuOpen(toggle)
  }

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>My Profile</title>
        <meta name="description" content="My Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {menuOpen && <Menu menuOpen={menuOpen} onSetMenuOpen={handleSetMenuOpen} />}
        <Navbar menuOpen={menuOpen} onSetMenuOpen={handleSetMenuOpen} />
        <Content />
      </main>
    </div>
  )
}
