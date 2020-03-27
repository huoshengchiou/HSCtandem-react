// ----------------------------------------community---------------------------------------------------

export const LikeToggle = (state, numbers) => {
  if (state) {
    return {
      type: 'LIKE_TOGGLE',
      num: 1,
      clicked: state,
      payload: numbers,
    }
  } else {
    return {
      type: 'LIKE_TOGGLE',
      num: -1,
      clicked: state,
      payload: numbers,
    }
  }
}
