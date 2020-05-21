/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../../components/Layout'

const Index: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example" goHome>
    <h1>Create new post</h1>
    <input type="text" />
    <button style={{ display: 'inline-block' }}>Create</button>
  </Layout>
)

export default Index
