import React, { useState } from "react";

const EducationModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [education, setEducation] = useState({
    EducationalInstitute: "",
    Course: "",
    location: "",
    years: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(education);
    onRequestClose();
  };

  return (
    <dialog id="education_modal" className="modal" open={isOpen}>
      <div className="modal-box p-6">
        <h3 className="font-bold text-xl mb-4">Add Education</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Educational Institute:
            </label>
            <input
              type="text"
              name="EducationalInstitute"
              value={education.EducationalInstitute}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Course:
            </label>
            <input
              type="text"
              name="Course"
              value={education.Course}
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
              name="location"
              value={education.location}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Years:
            </label>
            <input
              type="text"
              name="years"
              value={education.years}
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

export default EducationModal;
