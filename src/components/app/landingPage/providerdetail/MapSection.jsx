import { useEffect, useState } from "react";

import AddressMap from "../../../global/AddressMap";

const MapSection = ({ provider }) => {
  return (
    <div>
      <div className="w-full h-[500px] bg-white mt-6 rounded-lg relative">
        <div className="absolute z-10 right-0 top-14 bg-white border border-gray-200 rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 border-b-[1px] border-b-gray-200">
            Contact Info
          </h2>
          <div className="mb-2 border-b-[1px] border-b-gray-200 pb-2">
            <p className="text-sm font-medium text-gray-500">Email Address</p>
            <p className="text-md text-gray-800">{provider?.provider?.email}</p>
          </div>
          <div className="mb-2 border-b-[1px] border-b-gray-200 pb-2">
            <p className="text-sm font-medium text-gray-500">Phone number</p>
            <p className="text-md text-gray-800">{provider?.provider?.phone}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Clinic Location</p>
            <p className="text-md text-gray-800">
              {provider?.address}
              <br />
              {provider?.services[0]?.name}
            </p>
          </div>
        </div>
        <div className="absolute z-10 left-0 top-14 bg-white border border-gray-200 rounded-lg p-4 shadow-md">
          <div>
            <p className="text-md font-medium ">{provider?.city}</p>
            <p className="text-sm text-gray-800">
              {provider?.address}
              <br />
              {provider?.services[0]?.name}
            </p>
          </div>
        </div>
        <div>
          <AddressMap location={provider?.location} />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
