import React from 'react'
import Banner from '../../components/banner/Banner'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import ImageList from '../../components/imageList/ImageList';
import { cardsData, images } from '../../tempData/data'
import SreenCarosel from '../../components/FullScreenCarosel/FullScreenCarosel';
import UpcomingProjectsData from '../../Assets/StaticData/UpcomingProjects';
import ServiceBaner from '../../components/ServiceBaner/ServiceBaner';
import Services from '../../Miner components/Services/Services';


function HomePage() {

  return (
    <>
      <Banner />

      <CardCarousel
        heading="Discover Our Featured Properties"
        paragraph="Browse through our curated selection of properties, each offering unique features and opportunities for your next investment or dream home."
        cards={cardsData.map(card => ({
          ...card,
          location: `${card.location.city}, ${card.location.district}, ${card.location.state}, ${card.location.pincode}`
        }))}
        
      />

      <div className='flex flex-col md:flex-row w-full md:px-10 '>
        <SreenCarosel Title={"Upcomming Projects"} className={'md:w-1/2'} description="Explore our latest upcoming projects that offer modern living spaces and exceptional amenities." data={UpcomingProjectsData}/>
        
        <SreenCarosel Title={"Our Best Projects"} className={'md:w-1/2'} description="Discover our premium portfolio of completed projects showcasing architectural excellence, luxurious amenities." data={UpcomingProjectsData}/>
      </div>

      <ServiceBaner  Title="Sell or Rent your property faster with LandsAcers" description="Sell Lands/Plots/FarmHouse property" SubTitle="Register to post your property" buttonDescription="Post Your property Now"  image="https://images.unsplash.com/photo-1713322957180-5a7d9ef6ebc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <br/>
      <Services/>
      

      <ServiceBaner 
        demantionChange
        Title="Become a Broker with Us" 
        description="Join our team and unlock the potential to earn by connecting buyers and sellers in the real estate market. As a broker, you will have access to exclusive listings, training, and support to help you succeed." 
        SubTitle="Register today to start your journey with us as a real estate broker" 
        buttonDescription="Join Us Now"  
        image="https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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