import React from "react";
import Modal from "react-modal"

export const NoteModal = ({modalIsOpen, closeModal, handleClose}) => {
  return (
    <div>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Character Notes">
          <button onClick={()=>handleClose()}>close</button>
      </Modal>
    </div>
  );
};