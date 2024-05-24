import React, { useState } from "react";

const ExperienceModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [experience, setExperience] = useState({
    organization: "",
    duration: "",
    Experiencelocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(experience);
    onRequestClose(); // Close the modal after submission
  };

  return (
    <dialog id="experience_modal" className="modal" open={isOpen}>
      <div className="modal-box p-6">
        <h3 className="font-bold text-xl mb-4">Add Experience</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Organization:
            </label>
            <input
              type="text"
              name="organization"
              value={experience.organization}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Location:
            </label>
            <input
              type="text"
              name="Experiencelocation"
              value={experience.Experiencelocation}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Duration:
            </label>
            <input
              type="text"
              name="duration"
              value={experience.duration}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn bg-indigo-600 text-white">
              Submit
            </button>
            <button
              type="button"
              className="btn bg-gray-500 text-white"
              onClick={onRequestClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ExperienceModal;
