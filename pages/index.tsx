/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { GetStaticProps } from 'next'
// import { postsData, Post } from '../utils/posts-data'
import Layout from '../components/Layout'
import List from '../components/List'
import { connect } from 'react-redux'
import { getPosts } from '../store/actions/actions'
import { bindActionCreators } from 'redux'
import { wrapper } from '../store'
import axios from 'axios'
import { Dispatch } from 'redux'

const Index: React.FC = (props: any) => {
  console.log(props)
  return (
    <Layout title="Next MVP">
      <h1>Posts</h1>
      {/* <List items={data} /> */}
    </Layout>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(getPosts)
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    data: bindActionCreators(getPosts, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Index)

// export const getgddg = async () => {
//   try {
//     const payload: any = await axios.get('https://simple-blog-api.crew.red/posts')
//     if (payload) {
//       console.log(payload.data)
//     }
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// getgddg()
