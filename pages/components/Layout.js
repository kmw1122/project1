import React from 'react'
import Link from 'next/link'

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
          <div
            style={{
              flex: '100px 0 0',
              display: 'flex',
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <div className="flex items-center mx-5 text-4xl">
              <Link href={'/'}>TEST1</Link>
            </div>
          </div>

          <div className="flex flex-grow justify-end max-w-5xl"></div>
          <div className="flex">
            <Link href={'/mypage'}>
              <img src="\images\home.png" width={80} />
            </Link>
          </div>
        </div>
      </header>
      <hr />
      <main className="mb-auto">{children}</main>

      <footer className="flex h-20 justify-center items-center shadow-inner bg-blue-50">
        <p>TEST3</p>
      </footer>
    </div>
  )
}
