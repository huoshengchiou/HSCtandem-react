import React from 'react'
import { useSelector } from 'react-redux'

function Maddfriendcard() {
  // 直接取state下obj
  const addfreindData = useSelector(state => state.Maddfriend.addfreindData)

  const makeinvation = () => {
    // 這裡要打包一次給後端的資料
    const localUserData = JSON.parse(localStorage.getItem('LoginUserData'))
    // 加好友申請人資料
    const mbId = localUserData.mbId
    const addmbId = addfreindData.addmbID
    console.log('mbId:' + mbId + ' addmbId' + addmbId)
    const input = { mbId, addmbId }
    async function applyfriend(input, callback) {
      const request = new Request(
        'http://localhost:6001/tandem/member/invate',
        {
          method: 'POST',
          body: JSON.stringify(input),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      const response = await fetch(request)
      console.log('add friend fetch完成')
      const payload = await response.json()
      console.log(payload)
      //TODO
    }
    applyfriend(input)
  }

  return (
    <>
      <div className="M-addfriendCardWrapper">
        <div className="M-addfriendcardCricle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 209">
            <defs></defs>
            <title></title>
            <path
              className="cls-1"
              d="M125.55,319.48v40a64,64,0,1,1,0,128v40h302v-208Z"
              transform="translate(-125.55 -319.48)"
            />
          </svg>
          <div className="M-addfriendBricktop"></div>
          <div className="M-addfriendBrickdwn"></div>
          <div className=" M-addfriendcardcbtn"></div>

          {/* <!-- 加好友訊息描述 --> */}
          <div className="M-addfriendDes">
            <div className="M-addfrienddesLeft">
              <h5>{addfreindData.addmbNICK}</h5>
              <p>{addfreindData.addmbDes}</p>
              <div
                className="M-addfrienddesLeftbtn"
                onClick={() => {
                  makeinvation()
                }}
              >
                加入好友
              </div>
              <h6>來自國度</h6>
              <h6>{addfreindData.addmbCTY}</h6>
            </div>
            <div className="M-addfrienddesRight"></div>
          </div>
        </div>
        <div className="M-addfriendPhoto"></div>
      </div>
    </>
  )
}

export default Maddfriendcard
