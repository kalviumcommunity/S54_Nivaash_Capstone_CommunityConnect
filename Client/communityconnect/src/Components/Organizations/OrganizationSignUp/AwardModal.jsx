// AwardModal.jsx
import React, { useState } from "react";

const AwardModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [awardName, setAwardName] = useState("");
  const [awardDescription, setAwardDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ awardName, awardDescription });
    setAwardName("");
    setAwardDescription("");
  };

  return (
    <dialog id="award_modal" className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Award</h3>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <label className="block">
              Award Name:
              <input
                type="text"
                value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="py-4">
            <label className="block">
              Award Description:
              <input
                type="text"
                value={awardDescription}
                onChange={(e) => setAwardDescription(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Add Award
            </button>
            <button type="button" className="btn" onClick={onRequestClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AwardModal;
