import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Khairat extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head />

        <body className="cursor-default mx-auto max-w-3xl text-center">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Khairat
