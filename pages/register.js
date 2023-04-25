import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default function register() {
  return (
    <Layout>
      <div className="mx-auto my-12 max-w-screen-md px-2 py-2">
        <h1 className="flex mb-16 text-7xl">
          회원가입 <div className="text-3xl ml-5">sign up</div>
        </h1>
        <hr />
        <form method="post" className="mt-5 p-2 max-w-screen-sm mx-auto">
          <div className="flex flex-col mb-4">
            아이디
            <input
              type="id"
              name="id"
              className="mb-6 mt-2.5 p-3 border-2 border-solid border-gray-400"
              placeholder="아이디"
            ></input>
            비밀번호
            <input
              type="password"
              name="password"
              className="mb-6 mt-2.5 p-3 border-2 border-solid border-gray-400"
              placeholder="비밀번호"
            ></input>
            이름
            <input
              type="name"
              name="name"
              className="mb-6 mt-2.5 p-3 border-2 border-solid border-gray-400"
              placeholder="이름"
            ></input>
            전화번호
            <input
              type="number"
              name="number"
              className="mb-6 mt-2.5 p-3 border-2 border-solid border-gray-400"
              placeholder="전화번호"
            ></input>
            이메일 주소
            <input
              type="email"
              name="email"
              className="mb-6 mt-2.5 p-3 border-2 border-solid border-gray-400"
              placeholder="이메일 주소"
            ></input>
            <button
              type="sign up"
              name="sign up"
              className="p-3 text-lg font-bold text-white bg-cyan-300 border-2 border-solid border-cyan-300"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
