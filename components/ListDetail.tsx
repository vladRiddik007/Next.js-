import React from 'react'
import { Post } from '../utils/posts-data'

const ListDetail: React.FunctionComponent<{ post: Post }> = ({ post }) => (
  <div>
    <h1>{post.name}</h1>
    <p>Text: {post.text}</p>
  </div>
)

export default ListDetail
