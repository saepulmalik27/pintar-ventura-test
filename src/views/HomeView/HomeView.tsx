import Layout from '@/components/Layout'
import ContentSection from '@/components/templates/ContentSection/ContentSection'
import HeroSection from '@/components/templates/HeroSection/HeroSection'
import React from 'react'
// import photos from '@/mockup/images.json'
import useHome from './useHome'

const HomeView = () => {
    const { randomPhoto, photos } = useHome()
    return (
        <Layout>
            <main className="flex flex-col gap-4">
                <HeroSection randomPhoto={randomPhoto} />
                <ContentSection photos={photos} />
            </main>
        </Layout>
    )
}

export default HomeView
