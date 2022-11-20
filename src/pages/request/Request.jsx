import React from "react";

const Request = () => {
  return (
    <div className="p-10 h-max flex flex-col gap-8">
      <h1 className="text-xl font-bold">Form Request</h1>
      <form
        autoComplete="off"
        className="flex flex-col p-8 rounded-xl border-[2px] border-gray-400"
      >
        <h1 className="text-lg font-semibold text-center">
          Form Request Barang
        </h1>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="barang" className="">
            Nama Barang
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Barang"
            id="barang"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-row justify-end mt-4 gap-3">
          <button
            className="btn btn-active btn-primary w-32 hover:bg-red-700"
            type="reset"
          >
            RESET
          </button>
          <button className="btn btn-active btn-success w-32 hover:bg-green-900">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Request;
