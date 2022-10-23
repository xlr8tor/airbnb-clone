import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document";

class MyDocument extends Document<{lang: string}>{
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
    }
  }
  render() {
    return (
      <Html lang={this.props.lang || 'en'} style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="icon" type="image/png" href="/img/M_logo.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument