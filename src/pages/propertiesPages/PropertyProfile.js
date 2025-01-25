import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardsData, images } from '../../tempData/data';
import MapImgae from '../../Assets/Images/image 3.png'
import CardCarousel from '../../components/cardCarousel/CardCarousel';
import Card from '../../components/card/Card';
import SearchBox from '../../components/SearchBox/SearchBox';

const PropertyProfile = () => {
    const { id } = useParams(); // Assuming 'id' is the parameter you want to extract
    const property = cardsData.find(card => card._id === id);
    const [CurrentImage, SetCurrentImage] = useState(property?.image)
    const [propertyImgIndex, setPropertyImgIndex] = useState(0)
    const [propertyImgs, SetPropertyImgs] = useState([])

    useEffect(() => {
        if (property) {
            SetPropertyImgs(images)
        }
    }, [property])

    const imageChange = (index) => {
        if (index !== undefined) {
            SetCurrentImage(propertyImgs[index].src);
            setPropertyImgIndex(index);
        } else {
            SetCurrentImage(property?.image);
            setPropertyImgIndex(0);
        }
    }

    return (
        <>
        <div className='min-h-screen w-full py-5 md:py-10 md:px-5 lg:px-14 mt-10 text-[1.5rem] md:text-3xl'>
            
            <div className='p-3 md:p-10 lg:p-20'>
                <h1 className="text-xl md:text-2xl font-semibold w-full">{property?.title}</h1>
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg p-5 md:p-10 gap-5 md:gap-10 w-full ">
                    <div className="flex justify-center items-center ">
                        <img src={CurrentImage} alt="Property" className="w-full max-h-[30vh] md:max-h-[70vh] object-cover min-h-[30vh] rounded-lg" />
                    </div>
                    <div className="md:p-4">
                        <p className="text-sm md:text-xl text-gray-800 w-full flex justify-between"><strong>Price:</strong> ₹22.0 Cr</p>
                        <p className="text-gray-600 mt-2 text-sm md:text-xl">{property?.description}</p>
                        <div className="mt-4 flex flex-col gap-4">
                            {property?.plotDetails && (
                                <>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Plot Area: <span className="font-light text-right">{property?.plotDetails.area}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Dimensions (L x B): <span className="font-light text-right">600 x 2.3</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Any Construction Done:<span className="font-light text-right">{property?.plotDetails.constructionStatus ? 'Yes' : 'No'}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Boundary Wall: <span className="font-light text-right">{property?.plotDetails.boundaryWallStatus ? 'Yes' : 'No'}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Type Of Ownership:<span className="font-light text-right "> Power Of Attorney</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Transaction Type:<span className="font-light text-right">Resale</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Overlooking: <span className="font-light text-right">Garden/Park</span></p>
                                </>
                            )}
                            {property?.farmhouseDetails && (
                                <>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Number of Bedrooms: <span className="font-light text-right">{property?.farmhouseDetails.numberOfBedrooms}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Number of Bathrooms: <span className="font-light text-right">{property?.farmhouseDetails.numberOfBathrooms}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Total Floors: <span className="font-light text-right">{property?.farmhouseDetails.totalFloors}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Furnished Status: <span className="font-light text-right">{property.farmhouseDetails.furnishedStatus}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Covered Area: <span className="font-light text-right">{property.farmhouseDetails.coveredArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Carpet Area: <span className="font-light text-right">{property.farmhouseDetails.carpetArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Plot Area: <span className="font-light text-right">{property.farmhouseDetails.plotArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Possession Status: <span className="font-light text-right">{property.farmhouseDetails.possessionStatus}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Price: <span className="font-light text-right">₹{property.farmhouseDetails.price}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Transaction Type: <span className="font-light text-right">{property.farmhouseDetails.transactionType}</span></p>
                                </>
                            )}
                            {property.plotDetails && (
                                <>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Price: <span className="font-light text-right">₹{property.plotDetails.price}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Number of Open Sides: <span className="font-light text-right">{property.plotDetails.numberOfOpenSides}</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Width of Road Facing: <span className="font-light text-right">{property.plotDetails.widthOfRoadFacing} ft</span></p>
                                    <p className='w-full flex justify-between text-sm md:text-xl'>Gated Colony: <span className="font-light text-right">{property.plotDetails.gatedColonyStatus ? 'Yes' : 'No'}</span></p>
                                    {property.plotDetails.constructionStatus && (
                                        <p className='w-full flex justify-between text-sm md:text-xl'>Any Construction Done: <span className="font-light text-right">Yes</span></p>
                                    )}
                                    {property.plotDetails.boundaryWallStatus && (
                                        <p className='w-full flex justify-between text-sm md:text-xl'>Boundary Wall: <span className="font-light text-right">Yes</span></p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap overflow-x-scroll justify-between border-t-2 border-b-2 py-4 md:py-8 md:p-3">
                    {
                        propertyImgs.map((item, index) => {
                            return (index === propertyImgIndex ?
                                <div key={index} className='p-2 border rounded-md cursor-pointer'>
                                    <img src={item.src} className='w-[60px] h-[50px] md:w-[70px] md:h-[60px] rounded-md' />
                                </div> :
                                <div key={index} className='p-2 rounded-md cursor-pointer hover:scale-[0.9] transition-all' onClick={() => imageChange(index)} >
                                    <img src={item.src} className='w-[60px] h-[50px] md:w-[70px] md:h-[60px] rounded-md' />
                                </div>)
                        })
                    }
                </div>
                <div className="mt-6 flex flex-col md:flex-row justify-between border-b-2 pb-8 p-3">
                    <button className="bg-[#3498db] text-sm md:text-xl text-white py-2 px-5 md:px-7 rounded-full mb-4 md:mb-0">Contact Agent</button>
                    <button className="bg-gray-300 text-gray-800 py-2 text-sm md:text-xl px-5 md:px-7 rounded-full">Get Phone no.</button>
                </div>
                <br />
                <div className='px-5'>
                    <h2 className="text-xl md:text-2xl font-bold">More Details</h2>
                    <div className="mt-6 flex flex-col gap-4 md:px-5">
                        <p className='w-full flex justify-between text-sm md:text-xl'>Price Breakup: <span className="font-light text-right ">₹{property?.plotDetails?.price} | {property.quarterlyFee}</span></p>
                        <p className='w-full flex justify-between text-sm md:text-xl'>Address: <span className="font-light text-right ">{property?.location.locality}, {property?.location.city}, {property?.location.district}, {property?.location.state} - {property?.location.pincode}</span></p>
                        <p className='w-full flex justify-between text-sm md:text-xl'>Furnishing: <span className="font-light text-right ">Furnished</span></p>
                        <p className='w-full flex justify-between text-sm md:text-xl'>Flooring: <span className="font-light text-right ">Ceramic Tiles</span></p>
                        <p className='w-full flex justify-between text-sm md:text-xl'>Type of Ownership: <span className="font-light text-right ">Co-operative Society</span></p>
                        <p className='w-full flex justify-between text-sm md:text-xl'>Overlooking: <span className="font-light text-right ">Garden/Park</span></p>
                    </div>
                </div>
                <div className="mt-6 flex justify-end border-b-2 border-t-2 py-4 md:py-8 p-3">
                    <button className="bg-[#3498db] text-sm md:text-xl text-white py-2 px-5 md:px-7 rounded-full">Contact Agent</button>
                </div>

                <div className="mt-10 px-5 border-b-2 pb-20">
                    <h2 className="text-xl md:text-2xl font-bold">Property Location</h2>
                    <div className="relative mt-6 px-5">
                        <img
                            src={MapImgae}
                            alt="Property Location Map"
                            className="w-full h-[40vh] md:h-[60vh] rounded-lg shadow-md"
                        />
                        <div className="absolute top-1/2 w-[50vw] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-red-500 rounded-lg p-5">
                            <span className="text-red-500 font-semibold">Explore nearby Landmarks on map</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 px-5 border-b-2 pb-10">
                    <h2 className="text-xl md:text-2xl font-bold">Agent Details</h2>
                    <div className="relative mt-6 md:px-5">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex flex-col gap-4 w-full  md:p-10">
                                <p className='w-full flex justify-between text-sm md:text-xl '>Broker Name: <span className="font-light">{property?.brokerDetails?.name}</span></p>
                                <p className='w-full flex justify-between text-sm md:text-xl'>Contact: <span className="font-light">{property?.brokerDetails?.contact}</span></p>
                                <p className='w-full flex justify-between text-sm md:text-xl'>Phone: <span className="font-light">{property?.brokerDetails?.phone}</span></p>
                                <p className='w-full flex justify-between text-sm md:text-xl '><span className='text-red-500'>Properties:</span> <span className="font-light texxt-black">{property?.brokerDetails?.properties && property?.brokerDetails.properties}</span></p>
                                <p className='w-full justify-between text-sm md:text-xl '>Description: <span className="font-light text-gray-500 ml-3">Experienced real estate broker with over 10 years in the industry, specializing in residential properties. Known for exceptional customer service and a deep understanding of the local market.</span></p>
                                <div className="mt-6 flex justify-between border-t-2 py-4 md:py-8 ">
                                    <button className="bg-[#3498db] text-sm md:text-xl text-white py-2 px-5 md:px-7 rounded-full hover:scale-[0.9] transition-all">View Profile</button>
                                    <button className="bg-gray-300 text-gray-800 py-2 text-sm md:text-xl px-5 md:px-7 rounded-full">Get Phone no.</button>
                                </div>
                            </div>
                            <div className="flex-shrink-0 -mt-20">
                                <img src={property?.brokerDetails?.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"} alt="Broker Profile" className="w-32 h-32 md:w-50 md:h-50 rounded-full border" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 px-5  pb-10">
                    <h2 className="text-xl md:text-2xl font-bold">See Similar with your intrest</h2>
                <div className="mt-10  pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                   {
                    Array.isArray(cardsData) && cardsData.map((card, index) => {
                        return <Card key={index} card={{image: card.image, title: card.title, price: card.plotDetails ? card.plotDetails.price : card.farmhouseDetails.price, location: `${card.location.locality}, ${card.location.city}`, }} />
                    })
                   }
                </div>
                </div>
            </div>
        </div></>
    )
}

export default PropertyProfile