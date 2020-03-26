import React from 'react'

import $ from 'jquery'

function MMtestfetch() {
  const divOneRef = React.createRef()

  // 底下測試fetch
  const getfriendinfo = () => {
    // 需要利用點擊取得對方id
    const input = { mbId: 24 }
    async function Findfriendinfo(mbId, callback) {
      const request = new Request(
        'http://localhost:6001/tandem/member/logout',
        {
          method: 'POST',
          body: JSON.stringify(mbId),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      const response = await fetch(request)
      console.log('RE fetch完成')
      const payload = await response.json()
      console.log(payload)
      //TODO

      // 轉址
      // window.location.href = 'http://localhost:3000/'
    }
    //呼叫上方fetch送後端
    Findfriendinfo(input)
  }

  return (
    <>
      <button
        onClick={() => {
          getfriendinfo()
        }}
      >
        fetch it
      </button>

      <button onClick={() => {}}>move</button>
      <div
        ref={divOneRef}
        style={{ width: '3rem', height: '3rem', backgroundColor: 'teal' }}
      ></div>

      {/* -------------------------------------------------------------------------- */}
      {/* 輪播測試 */}
    </>
  )
}

export default MMtestfetch
