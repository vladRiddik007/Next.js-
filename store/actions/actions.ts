/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import actions from './index'
import { Dispatch } from 'redux'
import axios from 'axios'

export const getListAllPosts = () => {
  return {
    type: actions.GET_LIST_ALL_POSTS,
  }
}
export const getListAllPostsError = () => {
  return {
    type: actions.GET_LIST_ALL_POSTS_ERROR,
  }
}
export const getListAllPostsSuccess = (payload: any) => {
  return {
    type: actions.GET_LIST_ALL_POSTS_SUCCESS,
    payload,
  }
}

export const getPosts = () => async (dispatch: Dispatch) => {
  dispatch(getListAllPosts())
  try {
    const res: any = await axios.get('https://simple-blog-api.crew.red/posts')
    if (res) {
      dispatch(getListAllPostsSuccess(res.data))
    }
  } catch (error) {
    dispatch(getListAllPostsError())
    console.log(error.message)
  }
}

// export function getPosts() {
//   return {
//     promised: () => axios.get('https://simple-blog-api.crew.red/posts'),
//     types: ['START', 'SUCCESS', 'FAILURE'],
//   }
// }
