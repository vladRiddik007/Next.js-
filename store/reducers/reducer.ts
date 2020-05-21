import actions from '../actions'
export const initialState = {
  loading: false,
  error: false,
  data: [],
}

interface ActionType {
  type: string
  payload: any
}

export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    //posts
    case actions.GET_LIST_ALL_POSTS:
      console.log('reducer')
      return { ...state, loading: true }
    case actions.GET_LIST_ALL_POSTS_ERROR:
      return { ...state, error: true, loading: false }
    case actions.GET_LIST_ALL_POSTS_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    //post
    case actions.GET_RETRIEVE_A_POST:
      return { ...state }
    case actions.GET_RETRIEVE_A_POST_ERROR:
      return { ...state, error: true }
    case actions.GET_RETRIEVE_A_POST_SUCCESS:
      return { ...state }
    //create post
    case actions.POST_CREATE_POST:
      return { ...state }
    case actions.POST_CREATE_POST_ERROR:
      return { ...state, error: true }
    case actions.POST_CREATE_POST_SUCCESS:
      return { ...state }
    //update
    case actions.PUT_UPDATE_A_POST:
      return { ...state }
    case actions.PUT_UPDATE_A_POST_ERROR:
      return { ...state, error: true }
    case actions.PUT_UPDATE_A_POST_SUCCESS:
      return { ...state }
    //delete
    case actions.DEL_DELETE_A_POST:
      return { ...state }
    case actions.DEL_DELETE_A_POST_ERROR:
      return { ...state, error: true }
    case actions.DEL_DELETE_A_POST_SUCCESS:
      return { ...state }
    //create comment
    case actions.POST_CREATE_A_COMMENT:
      return { ...state }
    case actions.POST_CREATE_A_COMMENT_ERROR:
      return { ...state, error: true }
    case actions.POST_CREATE_A_COMMENT_SUCCESS:
      return { ...state }

    default: {
      return {
        ...state,
      }
    }
  }
}
