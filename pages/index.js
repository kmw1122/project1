import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex px-8 justify-between ">
        <img src="/images/test1.jpg" width={300}></img>
        <img src="/images/test2.jpg" width={300}></img>
        <img src="/images/test3.jpg" width={300}></img>
      </div>
      <hr />
      게시판 자리 ↓
    </Layout>
  )
}
