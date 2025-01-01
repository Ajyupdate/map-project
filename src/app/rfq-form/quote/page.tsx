"use client";
import Image from "next/image";
import { useState } from "react";

const QuoteDetails = () => {
  const [showTerms, setShowTerms] = useState(false);
  const toggleTerms = () => setShowTerms(!showTerms);
  return (
    <div className="">
      {/* Header */}

      {/* Quote Details */}
      <div className="mx-6 bg-white rounded-lg   mb-6">
        <div className="md:flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Quote details</h1>
            <p className="text-sm text-gray-400">
              Created on Wed, 12th June 2022, 08:00am
            </p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">
              Respond
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* Quote Information */}
      <div className="my-6 mx-6 py-4 px-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Quote details</h1>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              Expected delivery date : 2024-12-02
            </p>
          </div>
        </div>
        <div>
          <div className="pr-6 md:grid grid-cols-2 md:gap-4 mb-4">
            <div className=" my-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="text-gray-500 text-sm">Title</p>
                <p className="font-medium">Request for Equipments</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="text-gray-500 text-sm">RFQ No</p>
                <p className="font-medium">RQ #01234</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="text-gray-500 text-sm">Requestor</p>
                <p className="font-medium flex items-center">
                  <span className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                    JD
                  </span>
                  <span className="text-sm  font-normal">
                    Jane Doe &middot; Head Nurse, Paediatrics
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="text-gray-500 text-sm">Status</p>
                <p className="text-yellow-600 font-medium">Awaiting</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="text-gray-500 text-sm">Department</p>
                <p className="font-medium">Maternity</p>
              </div>
            </div>

            <div className="w-full  my-6 mx-6 py-4 px-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src={`/building.png`}
                  alt="delete"
                />
                <p className="pl-2 pl-0 pt-2 text-gray-500 text-sm">Client</p>
              </div>

              <p className="font-medium flex items-center mt-4">
                <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                  W
                </span>
                <div>
                  <p>Westend Hospital </p>

                  <p className="pl-1 pt-1 text-gray-500 text-sm">
                    Clear street
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
        <h2 className="text-lg font-semibold text-gray-800">Item(s)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg mt-4">
            <thead className="bg-gray-50 ">
              <tr className="rounded-xl">
                <th className="p-2 text-left text-gray-600">
                  <input type="checkbox" className="cursor-pointer" />
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Items
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Variants
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Quantity
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Price
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Amount
                </th>
                <th className="p-2 text-left font-thin text-sm text-gray-700">
                  Expected Delivery Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  item: "Oxygen concentrator",
                  avatar:
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
                  variant: "Blue",
                  quantity: "100 pieces",
                  price: "$200.00",
                  amount: "$2,000.00",
                  date: "2024-08-07",
                },
                {
                  item: "Mechanical ventilator",
                  avatar:
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
                  variant: "NIL",
                  quantity: "45 Kg",
                  price: "$350.00",
                  amount: "$2,500.00",
                  date: "2024-08-07",
                },
                {
                  item: "Patient Monitor",
                  avatar:
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
                  variant: "Blue",
                  quantity: "30 Units",
                  price: "$300.00",
                  amount: "$1,500.00",
                  date: "2024-08-07",
                },
                {
                  item: "Mechanical ventilator",
                  avatar:
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
                  variant: "Blue",
                  quantity: "35 Units",
                  price: "$200.00",
                  amount: "$1,500.00",
                  date: "2024-08-07",
                },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-2">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>
                  <td className="p-2 flex items-center space-x-2">
                    <img
                      src={row.avatar}
                      alt={`${row.item} avatar`}
                      className="h-8 w-8 rounded-md object-cover"
                    />
                    <span>{row.item}</span>
                  </td>
                  <td className="p-2">{row.variant}</td>
                  <td className="p-2">{row.quantity}</td>
                  <td className="p-2">{row.price}</td>
                  <td className="p-2">{row.amount}</td>
                  <td className="p-2">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-right mt-4">
          <p className="text-gray-500">
            Sub Total: <span className="font-medium text-black">$8,000.00</span>
          </p>
          <p className="text-gray-500">
            Total: <span className="font-medium text-black">$8,750.00</span>
          </p>
        </div>
      </div>

      {/* Terms and Attachments */}
      <section className="px-6 mb-6">
        <button
          onClick={toggleTerms}
          className="flex items-center justify-between w-full bg-white px-4 py-2 rounded-md border border-gray-300"
        >
          <div className="py-2 flex items-start space-x-4 mb-6">
            <Image
              className="w-12 h-12 object-cover"
              width={20}
              height={20}
              src={"/sign-doc.png"}
              alt="icon"
            />{" "}
            <div>
              <p className="flex justify-start text-lg font-semibold text-gray-800">
                Terms and Attachment
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Please review the terms and conditions before proceeding.
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-4 h-4 transition-transform ${
              showTerms ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 9l-7.5 7.5L4.5 9"
            />
          </svg>
        </button>

        {showTerms && (
          <div className="mt-4 border border-gray-300 p-4 rounded-md bg-gray-50">
            {/* The terms and attachment form from the previous example */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">
                Provide detailed information:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Payment Terms
                  </label>
                  <select className="w-full mt-1 border border-gray-300 rounded-md p-2">
                    <option>Net 30</option>
                    <option>Net 60</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    Delivery Schedule
                  </label>
                  <select className="w-full mt-1 border border-gray-300 rounded-md p-2">
                    <option>Immediate delivery</option>
                    <option>Scheduled delivery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    Shipping Method
                  </label>
                  <select className="w-full mt-1 border border-gray-300 rounded-md p-2">
                    <option>Courier Services</option>
                    <option>Pickup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    Lead Time
                  </label>
                  <input
                    type="number"
                    className="w-full mt-1 border border-gray-300 rounded-md p-2"
                    defaultValue="10"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Attachments
                </label>
                <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
                  <p className="text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-400">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default QuoteDetails;
