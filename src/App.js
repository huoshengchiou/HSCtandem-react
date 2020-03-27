import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Activity from './pages/activity/Activity'
import Bulletin from './pages/bulletin/Bulletin'

//                    community pages                          //
import Community from './pages/community/Community'
import AddPost from './pages/community/AddPost'
import Posts from './pages/community/Posts'
import PostDetail from './pages/community/PostDetail'
import PostDetailProfile from './pages/community/PostDetailProfile'
import PostProfile from './pages/community/PostProfile'
//---------------------------------------------------------------//

import Forum from './pages/forum/Forum'
import Mbcenterindex from './pages/member/Mbcenterindex'
import Cart from './pages/shop/Cart'

import Mbtestpage from './pages/member/Mbtestpage'

function App() {
  return (
    <Router>
      <>
        <Header />
        {/* <Mbtestpage /> */}
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/bulletin">
            <Bulletin />
          </Route>
          {/* //community */}
          <Route path={`/addpost`}>
            <AddPost />
          </Route>
          <Route path={`/posts`}>
            <Posts />
          </Route>
          <Route path={'/postdetail/:id?'}>
            <PostDetail />
          </Route>
          <Route path={'/postDetailProfile/:id?'}>
            <PostDetailProfile />
          </Route>
          <Route path={'/Communityprofile/:id?'}>
            <PostProfile />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/member">
            <Mbcenterindex />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
