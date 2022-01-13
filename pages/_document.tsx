import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TCZ1C8V8E"></script>
            <script dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                      
                gtag('config', 'G-3TCZ1C8V8E');`}}>
            </script>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="google-site-verification" content="bbGla_QVKIH7gJiZ3BfUL1Ew1bk2-Hv80fFPR65hUyI" />
            <meta property="og:title" content="The Aim Trainer - Train and Improve your aim in FPS games" />
            <meta property="og:description" content="The Aim Trainer is a free aim trainer helps you practice and improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online. No Installation Required." />
            <meta property="og:url" content="https://www.theaimtrainer.com/" />
            <meta property="og:type" content="website" />
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