/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import Link from 'next/link'
import { Post } from '../utils/posts-data'
import { LinkStyled } from './Layout'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ListItem: React.FunctionComponent<{ data: Post }> = ({ data }) => (
  <Flex>
    <div>
      <Link href="/posts/[id]" as={`/posts/${data.id}`}>
        <LinkStyled>{data.name}</LinkStyled>
      </Link>
      <p>{data.text}</p>
    </div>
    <button style={{ display: 'inline-block' }}>Delete</button>
  </Flex>
)

export default ListItem
