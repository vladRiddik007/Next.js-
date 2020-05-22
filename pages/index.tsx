/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GetStaticProps } from 'next'
import { postsData, Post } from '../utils/posts-data'
import Layout from '../components/Layout'
import List from '../components/List'
// import { connect } from 'react-redux'
// import { getPosts } from '../store/actions/actions'
// import { bindActionCreators } from 'redux'
// import { wrapper } from '../store'
// import axios from 'axios'
// import { Dispatch } from 'redux'

type Props = {
  items: Post[]
}

const Index: React.FC<Props> = ({ items }) => {
  return (
    <Layout title="Next MVP">
      <h1>Posts</h1>
      <List items={items} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const items: Post[] = postsData
  return { props: { items } }
}

export default Index

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(getPosts)
// })

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     data: bindActionCreators(getPosts, dispatch),
//   }
// }

// export default connect(null, mapDispatchToProps)(Index)

// export const getPost = async () => {
//   return await axios
//     .get('https://simple-blog-api.crew.red/posts')
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error.message))
// }

// getPost()
