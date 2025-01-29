import React, { useState } from "react"
import BasicDetails from "../Properties/components/PropertyFroms/BasicDetails"
import LandDetails from "../Properties/components/PropertyFroms/LandDetils"
import FarmhouseDetails from "../Properties/components/PropertyFroms/FarmHouseDetails"
import PlotDetails from "../Properties/components/PropertyFroms/PlotDetails"
import ImageUpload from "../Properties/components/PropertyFroms/ImageUpload"
import Layout from "../Layout"
import { useNavigate } from 'react-router-dom'; 

export default function AddProperty() {
  const [step, setStep] = useState(1)
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    location: {
      state: "",
      district: "",
      city: "",
      locality: "",
      pincode: "",
    },
    type: "",
    status: "available",
    views: 0,
    thumbnailImage: "",
    images: [],
    totalInquiries: 0,
    isUpcoming: false,
    upcomingDetails: {
      expectedLaunchDate: "",
      developerName: "",
      priceRange: {
        min: "",
        max: "",
      },
      highlights: [],
    },
    isFeatured: false,
    featuredDetails: {
      startDate: "",
      endDate: "",
      bannerImage: "",
      promotionalText: "",
      priority: 0,
    },
  })

  const navigate = useNavigate(); // Use usenavigate hook

  const handleBasicDetailsSubmit = (basicData) => {
    setPropertyData((prevData) => ({ ...prevData, ...basicData }))
    setStep(2)
  }

  const handleTypeSpecificDetailsSubmit = (typeSpecificData) => {
    setPropertyData((prevData) => ({ ...prevData, ...typeSpecificData }))
    setStep(3)
  }

  const handleImageUpload = (imageData) => {
    setPropertyData((prevData) => ({ ...prevData, ...imageData }))
    // Here you would typically send the data to your backend
    console.log("Final Property Data:", propertyData)
    // Redirect to property listing or dashboard
    navigate.push("/properties")
  }

  return (
    <Layout>
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Add New Property</h1>
      {step === 1 && <BasicDetails onSubmit={handleBasicDetailsSubmit} initialData={propertyData} />}
      {step === 2 && propertyData.type === "land" && (
        <LandDetails onSubmit={handleTypeSpecificDetailsSubmit} initialData={propertyData} />
      )}
      {step === 2 && propertyData.type === "farmhouse" && (
        <FarmhouseDetails onSubmit={handleTypeSpecificDetailsSubmit} initialData={propertyData} />
      )}
      {step === 2 && propertyData.type === "plot" && (
        <PlotDetails onSubmit={handleTypeSpecificDetailsSubmit} initialData={propertyData} />
      )}
      {step === 3 && <ImageUpload onSubmit={handleImageUpload} initialData={propertyData} />}
    </div>
    </Layout>
  )
}

