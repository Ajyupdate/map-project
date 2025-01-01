"use client";
import Image from "next/image";
import { useState } from "react";
import { PiNotePencil } from "react-icons/pi";
import Modal from "../Modal";
import Toast from "../Toast";
interface RFQStep3Props {
  onNext: () => void;
  onPrev: () => void;
}

const RFQStep3 = ({ onPrev }: RFQStep3Props) => {
  const [showTerms, setShowTerms] = useState(false);

  const toggleTerms = () => setShowTerms(!showTerms);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "Request for Equipments",
    rfqNo: "#RQ 01234",
    requestor: "Jane Doe • Head Nurse, Paediatrics",
    department: "Maternity",
    deliveryDate: "2024-12-02",
  });

  interface FormData {
    title: string;
    rfqNo: string;
    requestor: string;
    department: string;
    deliveryDate: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({ ...prevData, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuoteSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.rfqNo ||
      !formData.requestor ||
      !formData.department ||
      !formData.deliveryDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsToastVisible(true);

      setTimeout(() => setIsToastVisible(false), 3000);
    }, 1000);
  };

  return (
    <div className="">
      {/* Request Information Section */}
      <section className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Request Information
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={toggleEdit}
          >
            <PiNotePencil size={24} />
          </button>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-gray-600">Title</p>
            {isEditing ? (
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="font-medium text-gray-800">{formData.title}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-gray-600">RFQ No</p>
            {isEditing ? (
              <input
                type="text"
                name="rfqNo"
                value={formData.rfqNo}
                onChange={handleInputChange}
                className="w-full py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="font-medium text-gray-800">{formData.rfqNo}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-gray-600">Requestor</p>
            {isEditing ? (
              <input
                type="text"
                name="requestor"
                value={formData.requestor}
                onChange={handleInputChange}
                className="w-full py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="font-medium text-gray-800 flex items-center">
                <span className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                  JD
                </span>
                {formData.requestor}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-gray-600">Department</p>
            {isEditing ? (
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="font-medium text-gray-800">{formData.department}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <p className="text-gray-600">Expected delivery date</p>
            {isEditing ? (
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                className="w-full py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="font-medium text-gray-800">
                {formData.deliveryDate}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
        <h2 className="text-lg font-semibold text-gray-800">Item(s)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md mt-4">
            <thead className="bg-gray-50">
              <tr>
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

        <div className="mt-4 flex justify-end text-right">
          <div>
            <p className=" text-gray-800 font-medium">
              <span className="mr-8">Sub Total:</span> $7,500.00
            </p>
            <p className="text-gray-800 font-semibold">
              <span className="mr-12">Total: </span>$7,500.00
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Attachments Section */}
      <section className="px-6">
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

      {/* Actions */}
      <div className="mx-6 mb-12 mt-4 md:flex  justify-between">
        <button
          onClick={onPrev}
          className=" px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Previous
        </button>
        <div className="mt-2 md:mt-0 flex w-full md:w-[50%]">
          <button
            type="button"
            className=" mr-2 border-2 border-gray-300 px-2 md:px-4 py-2 text-black font-semibold rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full mr-2 border-2 border-blue-500 px-2 md:px-6 py-2 text-blue-500 font-semibold rounded-md hover:bg-gray-400"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={handleQuoteSubmit}
            className="w-full md:px-8 py-1 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          title="Confirmation"
          message="You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />

        {isSubmitting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-24 rounded-lg shadow-lg items-center space-x-3">
              <div className="ml-6 flex justify-center loader border-t-4 border-blue-600 border-solid rounded-full w-6 h-6 animate-spin"></div>
              <span className="text-sm font-medium">Sending Quote...</span>
            </div>
          </div>
        )}

        <Toast
          isVisible={isToastVisible}
          message="Quote submitted successfully!"
          onClose={() => setIsToastVisible(false)}
        />
      </div>
    </div>
  );
};

export default RFQStep3;
