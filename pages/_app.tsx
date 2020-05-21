import App from 'next/app'
import React from 'react'
import { wrapper } from '../store'

class WrappedApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(WrappedApp)
