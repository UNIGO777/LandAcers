import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardsData, images } from '../../tempData/data';
import MapImgae from '../../Assets/Images/image 3.png'

const PropertyProfile = () => {
    const { id } = useParams(); // Assuming 'id' is the parameter you want to extract
    const property = cardsData.find(card => card._id === id);
    const [CurrentImage, SetCurrentImage] = useState(property.image)
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
            SetCurrentImage(property.image);
            setPropertyImgIndex(0);
        }
    }

    return (
        <div className='min-h-screen w-full py-5 md:py-10 px-10 lg:px-14 mt-10 text-3xl'>
            <div className='p-10 px-20'>
                <h1 className="text-2xl font-semibold w-full">{property.title}</h1>
                <div className="bg-white grid grid-cols-2 rounded-lg p-10 gap-10 w-full ">
                    <div className="flex justify-center items-center ">
                        <img src={CurrentImage} alt="Property" className="w-full max-h-[70vh] object-cover min-h-[70vh] rounded-lg" />
                    </div>
                    <div className="p-4">
                        <p className="text-xl text-gray-800 w-full flex justify-between"><strong>Price:</strong> ₹22.0 Cr</p>
                        <p className="text-gray-600 mt-2 text-xl">{property.description}</p>
                        <div className="mt-4 flex flex-col gap-4">
                            {property.plotDetails && (
                                <>
                                    <p className='w-full flex justify-between text-xl'>Plot Area: <span className="font-light">{property.plotDetails.area}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Dimensions (L x B): <span className="font-light">600 x 2.3</span></p>
                                    <p className='w-full flex justify-between text-xl'>Any Construction Done:<span className="font-light">{property.plotDetails.constructionStatus ? 'Yes' : 'No'}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Boundary Wall: <span className="font-light">{property.plotDetails.boundaryWallStatus ? 'Yes' : 'No'}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Type Of Ownership:<span className="font-light"> Power Of Attorney</span></p>
                                    <p className='w-full flex justify-between text-xl'>Transaction Type:<span className="font-light">Resale</span></p>
                                    <p className='w-full flex justify-between text-xl'>Overlooking: <span className="font-light">Garden/Park</span></p>
                                </>
                            )}
                            {property.farmhouseDetails && (
                                <>
                                    <p className='w-full flex justify-between text-xl'>Number of Bedrooms: <span className="font-light">{property.farmhouseDetails.numberOfBedrooms}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Number of Bathrooms: <span className="font-light">{property.farmhouseDetails.numberOfBathrooms}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Total Floors: <span className="font-light">{property.farmhouseDetails.totalFloors}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Furnished Status: <span className="font-light">{property.farmhouseDetails.furnishedStatus}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Covered Area: <span className="font-light">{property.farmhouseDetails.coveredArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-xl'>Carpet Area: <span className="font-light">{property.farmhouseDetails.carpetArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-xl'>Plot Area: <span className="font-light">{property.farmhouseDetails.plotArea} sq ft</span></p>
                                    <p className='w-full flex justify-between text-xl'>Possession Status: <span className="font-light">{property.farmhouseDetails.possessionStatus}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Price: <span className="font-light">₹{property.farmhouseDetails.price}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Transaction Type: <span className="font-light">{property.farmhouseDetails.transactionType}</span></p>
                                </>
                            )}
                            {property.plotDetails && (
                                <>
                                    <p className='w-full flex justify-between text-xl'>Price: <span className="font-light">₹{property.plotDetails.price}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Number of Open Sides: <span className="font-light">{property.plotDetails.numberOfOpenSides}</span></p>
                                    <p className='w-full flex justify-between text-xl'>Width of Road Facing: <span className="font-light">{property.plotDetails.widthOfRoadFacing} ft</span></p>
                                    <p className='w-full flex justify-between text-xl'>Gated Colony: <span className="font-light">{property.plotDetails.gatedColonyStatus ? 'Yes' : 'No'}</span></p>
                                    {property.plotDetails.constructionStatus && (
                                        <p className='w-full flex justify-between text-xl'>Any Construction Done: <span className="font-light">Yes</span></p>
                                    )}
                                    {property.plotDetails.boundaryWallStatus && (
                                        <p className='w-full flex justify-between text-xl'>Boundary Wall: <span className="font-light">Yes</span></p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-nowrap overflow-x-scroll justify-between border-t-2 border-b-2 py-8 p-3">
                    {
                        propertyImgs.map((item, index) => {
                            return (index === propertyImgIndex ?
                                <div key={index} className='p-2 border rounded-md cursor-pointer'>
                                    <img src={item.src} className='w-[70px] h-[60px] rounded-md' />
                                </div> :
                                <div key={index} className='p-2 rounded-md cursor-pointer hover:scale-[0.9] transition-all' onClick={() => imageChange(index)} >
                                    <img src={item.src} className='w-[70px] h-[60px] rounded-md' />
                                </div>)
                        })
                    }
                </div>
                <div className="mt-6 flex justify-between border-b-2 pb-8 p-3">
                    <button className="bg-[#3498db] text-xl text-white py-2 px-7 rounded-full">Contact Agent</button>
                    <button className="bg-gray-300 text-gray-800 py-2 text-xl px-7 rounded-full">Get Phone no.</button>
                </div>
                <br />
                <div className='px-5'>
                    <h2 className="text-2xl font-bold">More Details</h2>
                    <div className="mt-6 flex flex-col gap-4 px-5">
                        <p className='w-full flex justify-between text-xl'>Price Breakup: <span className="font-light">₹{property.plotDetails.price} | {property.quarterlyFee}</span></p>
                        <p className='w-full flex justify-between text-xl'>Address: <span className="font-light">{property.location.locality}, {property.location.city}, {property.location.district}, {property.location.state} - {property.location.pincode}</span></p>
                        <p className='w-full flex justify-between text-xl'>Furnishing: <span className="font-light">Furnished</span></p>
                        <p className='w-full flex justify-between text-xl'>Flooring: <span className="font-light">Ceramic Tiles</span></p>
                        <p className='w-full flex justify-between text-xl'>Type of Ownership: <span className="font-light">Co-operative Society</span></p>
                        <p className='w-full flex justify-between text-xl'>Overlooking: <span className="font-light">Garden/Park</span></p>
                    </div>
                </div>
                <div className="mt-6 flex justify-end border-b-2 border-t-2 py-8 p-3">
                    <button className="bg-[#3498db] text-xl text-white py-2 px-7 rounded-full">Contact Agent</button>
                    
                </div>

            <div className="mt-6 px-5">
                <h2 className="text-2xl font-bold">Property Location</h2>
                <div className="relative mt-6 px-5">
                    <img 
                        src={MapImgae}
                        alt="Property Location Map" 
                        className="w-full h-[60vh]  rounded-lg shadow-md"
                    />
                    <div className="absolute top-1/2 w-[50vw] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-red-500 rounded-lg p-5">
                        <span className="text-red-500  font-semibold">Explore nearby Landmarks on map</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PropertyProfile