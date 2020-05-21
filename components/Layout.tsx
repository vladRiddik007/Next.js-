/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Layout: React.FunctionComponent<{ title?: string; goHome?: boolean }> = ({
  children,
  title = 'Default title',
  goHome,
}) => (
  <LayoutStyled>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderStyled>
      <nav>
        <Link href="/">
          <LinkStyled>Posts</LinkStyled>
        </Link>
        <Link href="/posts">
          <LinkStyled>Create new post</LinkStyled>
        </Link>
      </nav>
    </HeaderStyled>
    {children}
    <footer>
      <hr />
      {goHome && (
        <Link href="/">
          <a>Go Posts</a>
        </Link>
      )}
    </footer>
  </LayoutStyled>
)

export default Layout

export const LayoutStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  font-family: Arial, Helvetica, sans-serif;
`

export const HeaderStyled = styled.header`
  margin-top: 50px;
  nav {
    display: flex;
    justify-content: space-around;
    font-size: 2em;
    background-color: #f1f1f1;
  }
`
export const LinkStyled = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  :hover {
    background-color: darksalmon;
    color: white;
  }
`
