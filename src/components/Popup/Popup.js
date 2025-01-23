import React from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose, children }) => {

  const handleClose = () => {
    // Close animation or cleanup if needed
    
    onClose(); // Call the parent's onClose handler
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: '',
      maxWidth: '90%',
      maxHeight: '70%',
      overflow: 'auto',
      zIndex: 999,
      backgroundColor: 'white',
      
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 999
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Popup Modal"
    >
      <div className="relative ">
        <button
          onClick={onClose}
          className="absolute top-5 h-10 w-10  rounded-full right-2 font-extrabold  hover:text-gray-700"
        >
          ✕
        </button>
        <div className="  w-full  " style={{height: '70vh'}}>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
