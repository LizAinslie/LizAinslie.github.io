import Document, { Html, Head, Main, NextScript } from 'next/document'

class BaseDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='/pfp.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BaseDocument;