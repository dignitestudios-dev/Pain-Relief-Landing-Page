import React from "react";

const CareCosts = () => {
  const costData = [
    {
      service: "Member Direct Pay",
      details: [
        "Chiropractic Manipulation Therapy (1–2 body regions)",
        "Massage",
        "Hot/Cold Pack Treatment",
        "Electronic Stimulation",
      ],
      usualCost: "$127.46",
      yourCost: "$50.00",
      savings: "$77.46",
    },
    {
      service: "Wellness Coaching Session",
      usualCost: "$99.00",
      yourCost: "$69.30",
      savings: "$29.70",
    },
    {
      service: "Acupuncture Therapy Session",
      usualCost: "$125.00",
      yourCost: "$87.50",
      savings: "$37.50",
    },
    {
      service: "Massage Therapy (one hour session)",
      usualCost: "$90.00",
      yourCost: "$63.00",
      savings: "$27.00",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg overflow-hidden shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-[#181818]">Care Costs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D9F3F7] text-[#000000] text-[14px]">
              <th className="p-4">Service/Procedure</th>
              <th className="p-4">Usual Cost</th>
              <th className="p-4">Your Cost</th>
              <th className="p-4">Your Savings</th>
            </tr>
          </thead>
          <tbody>
            {costData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 align-top">
                <td className="p-4 text-[#181818] text-sm min-w-[200px]">
                  <div className="font-medium">{item.service}</div>
                  {item.details && (
                    <ul className="list-disc ml-5 mt-1 text-[#565656] text-sm">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </td>
                <td className="p-4 text-sm text-[#181818] min-w-[120px]">
                  {item.usualCost}
                </td>
                <td className="p-4 text-sm text-[#181818] min-w-[120px]">
                  {item.yourCost}
                </td>
                <td className="text-sm h-[80px] font-semibold text-white w-[140px]">
                  <div className="bg-gradient-to-r from-[#29ABE2] to-[#63CFAC] text-center h-full flex  pt-3 justify-center rounded">
                    <span>{item.savings}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CareCosts;
