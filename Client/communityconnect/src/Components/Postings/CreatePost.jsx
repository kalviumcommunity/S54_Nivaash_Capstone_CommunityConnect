    import React, { useState } from 'react';
    import axios from 'axios';
    import { Edit } from '@mui/icons-material';
    import { toast, ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    const CreatePost = ({ onCreatePost }) => {
        const [formData, setFormData] = useState({
            OrganisationName: '',
            Location: '',
            Description: '',
            startDate: '',
            endDate: '',
            EventImage: '' 
        });

        const [showModal, setShowModal] = useState(false);
        const [loading, setLoading] = useState(false);  

        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

        const handleImageUpload = async (e) => {
          const imageFile = e.target.files[0];
        
          try {

              setLoading(true);

              const formDataCopy = { ...formData }; 
              const formDataToUpdate = new FormData();
              formDataToUpdate.append('file', imageFile);
              formDataToUpdate.append('upload_preset', uploadPreset);
              formDataToUpdate.append('folder', 'post/');
          
              const response = await axios.post(
                  `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                  formDataToUpdate
              );
          
              formDataCopy.EventImage = response.data.secure_url; 
              setFormData(formDataCopy); 
          } catch (error) {
              console.error('Error uploading image:', error);
          }finally {
            setLoading(false); 
        }
      };
      
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({ ...prevState, [name]: value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {

                setLoading(true);
              
                await axios.post('http://localhost:3000/post/create', formData);
                resetForm();
                toast.success('Post created successfully');
            } catch (error) {
                console.error('Error creating post:', error);
                toast.error('Failed to create post');
            }finally {
              setLoading(false); 
          }
        };
      
        const resetForm = () => {
            setFormData({
                OrganisationName: '',
                Location: '',
                Description: '',
                startDate: '',
                endDate: '',
                EventImage: ''
            });
            setShowModal(false);
        };


        return (
          <div className="flex justify-center items-center">
            <ToastContainer />
            <button className="bg-white px-5 text-black py-2 rounded mt-4 flex items-center justify-center space-x-2" onClick={() => setShowModal(true)}>
              <Edit style={{ width: '18px', height: '18px' }} />
              <p>Create an Event</p>
            </button>
            {showModal && (
              <div className="modal-container fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="modal-box bg-white p-8 rounded-lg shadow-lg">
                  <button className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4" onClick={() => setShowModal(false)}>Close</button>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                      <label htmlFor="OrganisationName" className="text-lg font-semibold">Organisation Name:</label>
                      <input
                        type="text"
                        id="OrganisationName"
                        name="OrganisationName"
                        value={formData.OrganisationName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="Location" className="text-lg font-semibold">Location:</label>
                      <input
                        type="text"
                        id="Location"
                        name="Location"
                        value={formData.Location}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="Description" className="text-lg font-semibold">Description:</label>
                      <textarea
                        id="Description"
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      ></textarea>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="startDate" className="text-lg font-semibold">Start Date:</label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="endDate" className="text-lg font-semibold">End Date:</label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="image" className="text-lg font-semibold">Image:</label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageUpload}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 bg-white text-black"
                        required
                      />
                    </div>
                    <div className='flex justify-center items-center' >
                        {loading && <progress className="progress w-56 bg-success" />} 
                    </div>
                    <button type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Create Post</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );
      };    

      export default CreatePost;
