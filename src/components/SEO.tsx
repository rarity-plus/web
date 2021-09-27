import React from 'react'
import Helmet from 'react-helmet'

interface SEOProps {
    title: string,
    description?: string,
}

const SEO = ({title, description}: SEOProps) => {
    return (
        <Helmet>
            <title>{title} | rarity.plus</title>
            <meta name="description" content={description || "Rarity.plus is an upcoming 3D MMORPGer built on top of Rarity Smart Contracts"} />
            <meta property="og:title" content={title + "rarity.plus"} />
            <meta property="og:description" content={description || "Rarity.plus is an upcoming 3D MMORPGer built on top of Rarity Smart Contracts"} />
            <meta property="og:image" content="/icon.png" />
        </Helmet>
    )
}

export default SEO