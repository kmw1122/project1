import React from 'react'
import Layout from './components/Layout'

export default function mypage() {
  return (
    <Layout>
      <div className="justify-between flex">
        <div className="flex w-52 h-52 mt-40 bg-slate-400 ml-60">
          프로필 사진 넣는 곳
          <div id="image-preview">
            <label for="image-upload" id="image-label"></label>
          </div>
        </div>
        {/* 기능없음 -> 15라인~17라인 제거해도 무관 */}
        <div className="mt-40">
          <input type="file" name="image" id="image-upload" />
        </div>

        <div className="mx-auto my-12 mt-24 flex">
          <div className="flex flex-col">
            <div className="mb-8 text-4xl">회원정보 |</div>
            <div
              type="id"
              name="id"
              className="p-3 border-2  border-inherit text-center"
              placeholder="아이디"
            >
              아이디
            </div>
            <div
              type="name"
              name="name"
              className="p-3 border-2 border-inherit text-center"
              placeholder="이름"
            >
              이름
            </div>
            <div
              type="number"
              name="number"
              className="p-3 border-2 border-inherit text-center"
              placeholder="전화번호"
            >
              전화번호
            </div>
            <div
              type="email"
              name="email"
              className="p-3 border-2 border-inherit text-center"
              placeholder="이메일 주소"
            >
              이메일 주소
            </div>
          </div>
          {/*회원가입 및 로그인 후 개인정보 입력 받는 곳 56라인 ~ 92라인의 텍스트 부분 삭제후 기능 넣기*/}
          <div className="flex flex-col w-96">
            <div className="mb-8 text-4xl">&nbsp;profile</div>
            <div
              type="id"
              name="id"
              className="p-3 border-2 border-inherit"
              placeholder="아이디"
            >
              아이디 입력받는곳
            </div>
            <div
              type="name"
              name="name"
              className="p-3 border-2 border-inherit"
              placeholder="이름"
            >
              이름 입력받는곳
            </div>
            <div
              type="number"
              name="number"
              className="p-3 border-2 border-inherit"
              placeholder="전화번호"
            >
              전화번호 입력받는곳
            </div>
            <div
              type="email"
              name="email"
              className="p-3 border-2 border-inherit"
              placeholder="이메일 주소"
            >
              이메일 주소 입력받는곳
            </div>
          </div>
        </div>
      </div>

      <div className="flex ml-96 w-96 mt-20 whitespace-nowrap">
        <div className="mr-5 ml-5">
          <button
            type="edit"
            name="edit"
            className="p-3 ml-60 border-2 border-inherit bg-slate-600 text-white"
            placeholder="회원정보 수정"
          >
            회원정보 수정
          </button>
        </div>

        <div className="mr-5 ml-5">
          <button
            type="record"
            name="record"
            className="p-3 border-2 border-inherit bg-slate-600 text-white"
            placeholder="게시판 기록"
          >
            게시판 기록
          </button>
        </div>

        <div className="mr-5 ml-5">
          <button
            type="exit"
            name="exit"
            className="p-3 border-2 border-inherit bg-slate-600 text-white"
            placeholder="회원탈퇴"
          >
            회원탈퇴
          </button>
        </div>

        <div className="mr-5 ml-5 ">
          <button
            type="ask"
            name="ask"
            className="p-3 border-2 border-inherit bg-slate-600 text-white"
            placeholder="문의"
          >
            문의
          </button>
        </div>
      </div>
    </Layout>
  )
}
