import { default as NextHead } from 'next/head'

type Props = {
  title?: string
}

const Head = ({ title }: Props) => {
  return (
    <NextHead>
      <title>{title || 'Meta login'}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
