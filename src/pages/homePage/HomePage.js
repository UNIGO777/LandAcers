import React from 'react'
import Banner from '../../components/banner/Banner'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import ImageList from '../../components/imageList/ImageList';
import {cardsData, images} from '../../tempData/data'

function HomePage() {

  return (
    <>
    <Banner />
    <CardCarousel
        heading="Discover Our Featured Properties"
        paragraph="Browse through our curated selection of properties, each offering unique features and opportunities for your next investment or dream home."
        cards={cardsData}
      />
       <ImageList
        heading="Image Gallery"
        paragraph="Here are some amazing images for you to enjoy!"
        images={images}
      />

    <CardCarousel
        heading="Our Amazing Cards"
        paragraph="Explore the list of cards below and learn more about each one."
        cards={cardsData}
      />
       <ImageList
        heading="Image Gallery"
        paragraph="Here are some amazing images for you to enjoy!"
        images={images}
      />
    </>
  )
}

export default HomePage