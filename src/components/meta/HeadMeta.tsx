import Head from 'next/head'

export const HeadMeta = ({
    title = "FlyHigher",
    desc = "Service Marketplace, To make People's lives better & Reach your dream with Us"
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}