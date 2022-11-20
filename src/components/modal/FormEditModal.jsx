import React from "react";

const FormEditModal = () => {
  return (
    <div className="modal h-full" id="my-modal-3">
      <div className="modal-box max-w-3xl">
        <h3 className="font-bold text-xl text-center">Edit Data</h3>
        <form className="flex flex-col  w-full h-full gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-4 modal-action">
            <a href="#" className="btn btn-error modal-open">
              CANCEL
            </a>
            <a
              href="/dashboard/databarang"
              className="btn btn-success "
              type="button"
            >
              UPDATE
            </a>
          </div>
        </form>
        <div className="modal-action"></div>
      </div>
    </div>
  );
};

export default FormEditModal;
