import * as React from 'react'
import ListItem from './ListItem'
import styled from 'styled-components'
import { Post } from '../utils/posts-data'

const ListStyled = styled.ol`
  background-color: #f1f1f4;
  padding-left: 20px;
  padding-right: 20px;
`

const List: React.FC<{ items: Post[] }> = ({ items }) => (
  <ListStyled>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ListStyled>
)

export default List
