import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { postsData, Post } from '../../utils/posts-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

type Props = {
  item?: Post
  errors?: string
}

const StaticPropsDetail: React.FunctionComponent<Props> = ({ item, errors }) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${item && item.name} Next.js`}>{item && <ListDetail post={item} />}</Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsData.map((post: Post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = postsData.find((data: Post) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
