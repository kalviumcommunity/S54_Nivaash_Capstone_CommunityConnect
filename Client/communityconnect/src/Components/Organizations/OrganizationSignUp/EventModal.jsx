// EventModal.jsx
import React, { useState } from 'react';

const EventModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [eventName, setEventName] = useState('');
  const [eventPlace, setEventPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ eventName, eventPlace });
    setEventName('');
    setEventPlace('');
  };

  return (
    <dialog id="event_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Event</h3>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <label className="block">
              Event Name:
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="py-4">
            <label className="block">
              Event Place:
              <input
                type="text"
                value={eventPlace}
                onChange={(e) => setEventPlace(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Add Event
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

export default EventModal;
