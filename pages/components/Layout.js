import React from 'react'
import Link from 'next/link'

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="flex justify-end mr-64 my-1">
          <Link href={'/login'}>
            <div className="mr-3 font-bold">로그인 </div>
          </Link>
          <div className="font-bold">|</div>
          <Link href="/register">
            <div className="ml-3 font-bold">회원가입</div>
          </Link>
        </div>
        <hr />
        <meta charSet="utf-8" />
        <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
          <div
            style={{
              flex: '100px 0 0',
              display: 'flex',
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <img
              src="/images/UMP40.jpg"
              alt="logo"
              style={{ display: 'block', width: 80 }}
            />

            <div className="flex items-center mx-5 text-4xl">
              <Link href={'/'}>TEST1</Link>
            </div>
          </div>

          <div className="flex flex-grow justify-end max-w-5xl">
            <Link href={'/community'}>
              <img src="\images\browser.png" width={80} />
            </Link>
          </div>
          <div className="flex">
            <Link href={'/ai'}>
              <img src="\images\file-ai.png" width={80} />
            </Link>
          </div>
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
