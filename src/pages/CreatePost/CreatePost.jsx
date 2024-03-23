import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pincode, setPincode] = useState('');
  const [image, setImage] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handlePincodeChange(event) {
    setPincode(event.target.value);
  }

  function handleImageInput(event) {
    setImage(event.target.files);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      description,
      pincode,
      image
    })

    setTitle('');
    setDescription('');
    setPincode('');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-cover" style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/697/441/184/naruto-shippuuden-anime-akatsuki-sharingan-wallpaper-preview.jpg')` }}>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Create a Post</h1>
        <form onSubmit={handleFormSubmit} className="px-6 py-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              id="title"
              required
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              id="description"
              required
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-gray-700 font-bold mb-2">Pincode</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              id="pincode"
              value={pincode}
              onChange={handlePincodeChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image Upload</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              onChange={handleImageInput}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost