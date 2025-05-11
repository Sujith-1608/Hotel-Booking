import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonals from '../components/Testimonals'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffers />
      <Testimonals />
      <NewsLetter />
    </div>
  )
}

export default Home
