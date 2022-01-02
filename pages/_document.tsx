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
            <meta  name="description" content="Free Aim Trainer helps you improve your aim in any FPS game such as Valorant, Fortnite, Counter-Strike: GO, and Call of Duty. Practice and Test your Aim Performance Online. No Installation Required." />
            <meta key="keywords" name="keywords" content="the aim trainer, aim trainer, FPS trainer, FPS, improve aim, boost aim, practice targets, practice aiming, FPS games" />
            <meta name="google-site-verification" content="bbGla_QVKIH7gJiZ3BfUL1Ew1bk2-Hv80fFPR65hUyI" />
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