import React from "react";
import { Delete, Search, TambahData } from "../../components";
import Edit from "../../components/button/Edit";

const DataBarang = () => {
  return (
    <div className="h-max p-10 flex flex-col pt-12 gap-3">
      <div className="w-full flex flex-row items-center justify-end">
        <Search />
        <TambahData />
      </div>
      <h1 className="text-xl font-bold">Data Barang</h1>
      <div className="overflow-x-auto h-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <div className="flex flex-row gap-3">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            <tr className="active">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <div className="flex flex-row gap-3">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            <tr className="active">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <div className="flex flex-row gap-3">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            <tr className="active">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <div className="flex flex-row gap-3">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            <tr className="active">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <div className="flex flex-row gap-3">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-group flex flex-row justify-end">
        <button className="btn">«</button>
        <button className="btn">Page 1</button>
        <button className="btn">»</button>
      </div>
    </div>
  );
};

export default DataBarang;
