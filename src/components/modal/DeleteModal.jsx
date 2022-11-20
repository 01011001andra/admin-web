import React from "react";

const DeleteModal = () => {
  return (
    <div className="modal flex flex-col justify-start" id="my-modal-4">
      <div className="modal-box mt-5">
        <h3 className="font-bold text-lg">Perhatikan!</h3>
        <p className="py-4">Anda Yakin Ingin Menghapus?</p>
        <div className="modal-action">
          <a href="#" className="btn btn-success">
            YES
          </a>
          <a href="#" className="btn btn-error">
            NO
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
