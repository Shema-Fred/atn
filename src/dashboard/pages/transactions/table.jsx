import React from "react";

import {
  CaretRightSquareFill,
  CaretLeftSquareFill,
} from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

function Table(props) {
  return (
    <div>
      <div className="table-responsive rounded-top">
        <table className={`w-full`}>
          <thead className={`bg-gray-200 px-2 rounded shadow-sm`}>
            <tr>
              <th style={{ width: 1 + "px" }}>NO</th>
              <th>Application Name</th>
              <th>Destination</th>
              <th>Product ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {Array(9)
              .fill("")
              .map((_, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum dolor.</td>
                  <td>22-233</td>
                  <td>20,000 Frw</td>
                  <td>
                    <Badge
                      pill
                      className="bg-light-success text-accent uppercase p-2"
                    >
                      Success
                    </Badge>
                  </td>
                  <td>23/02/2020</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row items-center justify-end flex-nowrap mt-3 px-3.5">
        <div className="col-auto flex flex-nowrap items-center">
          <span className="whitespace-nowrap mr-2.5 small">Per Page</span>
          <select className="form-select form-select-sm">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="col-auto">
          <CaretLeftSquareFill
            size={25}
            className="text-light cursor-pointer"
          />
        </div>
        <div className="col-auto">
          <CaretRightSquareFill
            size={25}
            className="text-light cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
