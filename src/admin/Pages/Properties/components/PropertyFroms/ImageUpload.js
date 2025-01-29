import React, { useState } from "react"

const ImageUpload = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData)
  const [previewImages, setPreviewImages] = useState([])

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, thumbnailImage: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files)
    const newPreviewImages = []

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        newPreviewImages.push(reader.result)
        if (newPreviewImages.length === files.length) {
          setPreviewImages(newPreviewImages)
          setFormData((prevData) => ({ ...prevData, images: [...prevData.images, ...newPreviewImages] }))
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="mb-4 text-2xl font-bold">Image Upload</h2>

      <div>
        <label htmlFor="thumbnailImage" className="block text-sm font-medium text-gray-700">
          Thumbnail Image
        </label>
        <input
          type="file"
          id="thumbnailImage"
          name="thumbnailImage"
          onChange={handleThumbnailChange}
          accept="image/*"
          className="block w-full mt-1"
        />
        {formData.thumbnailImage && (
          <img
            src={formData.thumbnailImage || "/placeholder.svg"}
            alt="Thumbnail Preview"
            className="object-cover w-32 h-32 mt-2"
          />
        )}
      </div>

      <div>
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
          Additional Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          onChange={handleImagesChange}
          accept="image/*"
          multiple
          className="block w-full mt-1"
        />
        <div className="grid grid-cols-3 gap-4 mt-2">
          {previewImages.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Preview ${index + 1}`}
              className="object-cover w-32 h-32"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ImageUpload;
