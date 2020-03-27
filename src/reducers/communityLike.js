const initlike = {
  likeCount: 26,
  clicked: false,
}

const communityLike = (state = initlike, action) => {
  switch (action.type) {
    case 'LIKE_TOGGLE':
      return {
        ...state,
        likeCount: (state.likeCount += action.num),
        clicked: action.clicked,
      }

    default:
      return state
  }
}
export default communityLike
