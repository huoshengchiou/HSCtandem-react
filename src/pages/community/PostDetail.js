import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import InfiniteScroll from '../../components/community/InfiniteScroll'
import { useSelector, useDispatch } from 'react-redux'
import { LikeToggle } from '../../actions/index'
import PostComment from '../../components/community/PostComment'
import PostDetailMore from '../../components/community/PostDetailMore'
// import { NavLink } from 'react-router-dom'

import {
  AiOutlineMessage,
  AiOutlineStar,
  AiOutlineHeart,
  // AiOutlineEye,
  AiFillEnvironment,
  AiFillHeart,
} from 'react-icons/ai'
import '../../css/community.css'
import Swal from 'sweetalert2'

function PostDetail(props) {
  const [posts, setPosts] = useState([])

  const [dataHasLoaded, setDataHasLoaded] = useState(false)
  let postid = props.match.params.id

  const like = useSelector(state => state.communityLike)
  const dispatch = useDispatch()

  //連資料庫 fetch API
  async function fetchPost() {
    let res = await fetch('http://localhost:6001/items/posts')
    let response = await res.json()
    setPosts(response)
  }
  useEffect(() => {
    fetchPost()
  }, [])

  // 避免畫面閃爍(postprofile===null)
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">網頁載入中...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <div style={{ height: '500px' }}>
      <h1 className="my-5">找不到相關資訊</h1>
      <button
        style={{
          color: '#79cee2',
          background: 'none',
          border: '1px solid #79cee2',
          padding: '5px 10px',
          fontSize: '20px',
        }}
        onClick={() => props.history.push('/community')}
      >
        {' '}
        回到首頁
      </button>
    </div>
  )

  //貼文詳細頁判斷
  let postDetail = null

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].post_id === +props.match.params.id) {
      postDetail = posts[i]
      // console.log(posts)
    }
  }
  if (postDetail === null) {
    return (
      <>
        <div className="container">{!dataHasLoaded ? loading : display}</div>
      </>
    )
  } else {
    // console.log(postDetail)

    return (
      <>
        <div className="container my-5">
          <div className="row" style={{ boxShadow: '0px 0px 10px #adb6bd' }}>
            {/* 貼文圖片 */}

            <div className="col-8" style={{ paddingTop: '10px' }}>
              <figure
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`http://localhost:6001/img/${postDetail.postImg}`}
                  style={{ display: 'block', width: '100%', height: '100%' }}
                />
              </figure>
            </div>
            {/* 貼文內容 */}
            <div className="col-4">
              <PostDetailMore
                postId={props.match.params.id}
                postImg={postDetail.postImg}
                memberID={postDetail.mbId}
              />

              <div
                className="d-flex"
                style={{
                  borderBottom: '1px solid #79cee2',
                  margin: '5px',
                  justifyContent: 'space-between',
                }}
              >
                {/* 貼文用戶資料（頭像，名字，國家，加好友） */}
                <div
                  className="d-flex"
                  style={{
                    padding: '5px 0',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.location.href = `/Communityprofile/${postDetail.mbId}`
                  }}
                >
                  {/* 貼文用戶大頭貼 */}
                  <figure
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      border: '1px solid black',
                      overflow: 'hidden',
                      margin: '5px 10px',
                    }}
                  >
                    <img
                      src={postDetail.mbAva}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </figure>
                  <div style={{ fontSize: '15px', marginTop: '8px' }}>
                    {' '}
                    <span style={{ display: 'block' }}>
                      {postDetail.mbNick}
                    </span>
                    <p
                      style={{
                        color: '#F9A451',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                      }}
                    >
                      <AiFillEnvironment />{' '}
                      <span style={{ fontSize: '12px', paddingLeft: '5px' }}>
                        {postDetail.mbCountry}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="C-postContent">
                <span
                  style={{
                    fontWeight: 'bold',
                    paddingRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.location.href = `/Communityprofile/${postDetail.mbId}`
                  }}
                >
                  {postDetail.mbNick}
                </span>{' '}
                {postDetail.postContent}
              </p>
              <p style={{ fontSize: '12px', color: 'grey', margin: '0 10px' }}>
                {postDetail.updated_at}
              </p>
              {/* 收藏按讚留言 */}
              <div className="d-flex C-posticon">
                <div
                  className="mx-2"
                  onClick={() => {
                    dispatch(LikeToggle(!like.clicked))
                  }}
                >
                  {like.clicked ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                <div className="mx-2">
                  <AiOutlineMessage />
                </div>
                <div className="mx-2">
                  <AiOutlineStar />
                </div>
              </div>

              {/* 按讚人數 */}

              <p style={{ fontSize: '12px', margin: '10px' }}>
                <span style={{ fontWeight: 'bold', paddingRight: ' 4px' }}>
                  {/* {postDetail.postLikes} */}
                  {like.likeCount}
                </span>
                人都說讚
              </p>

              <PostComment postId={props.match.params.id} />
            </div>
          </div>

          <div style={{ marginTop: '80px' }}>
            <p
              style={{
                fontSize: '18px',
                margin: '30px auto',
                width: '100px',
                fontWeight: 'bold',
              }}
            >
              更多相關
            </p>
            <div
              style={{
                width: '50px',
                height: '5px',
                borderBottom: '3px solid black',
                margin: '-20px 46.5% 10px  ',
              }}
            ></div>
          </div>

          <InfiniteScroll />
        </div>
      </>
    )
  }
}

export default withRouter(PostDetail)
