import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default function login() {
  return (
    <Layout>
      <div className="mx-auto my-32 max-w-screen-md px-2 py-2 bg-gray-200">
        <h1 className="mb-16 text-center text-7xl">Login</h1>
        <form method="post" className=" p-2 max-w-screen-sm mx-auto">
          <div className="flex flex-col mb-4">
            <input
              type="id"
              name="userid"
              className="mb-6 p-3 border-2 border-solid border-gray-400"
              placeholder="아이디"
            ></input>
            <input
              type="password"
              name="password"
              className="mb-6 p-3 border-2 border-solid border-gray-400"
              placeholder="비밀번호"
            ></input>
            <button
              type="submit"
              name="로그인"
              className="p-3 text-lg font-bold text-white bg-cyan-300 border-2 border-solid border-cyan-300"
              placeholder="로그인"
            >
              로그인
            </button>
          </div>
          <div className="text-right">
            <Link href="/register">
              <button className="basic-button mx-0.5 w-40 font-semibold">
                회원가입
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}
