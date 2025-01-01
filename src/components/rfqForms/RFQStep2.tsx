"use client";
import Image from "next/image";
import React, { useState } from "react";

interface RFQStep1Props {
  onNext: () => void;
  onPrev: () => void;
}

const RFQStep2: React.FC<RFQStep1Props> = ({ onNext, onPrev }) => {
  // const [formData, setFormData] = useState({
  //   paymentTerms: "Net 30",
  //   deliverySchedule: "Request for Equipments",
  //   department: "Maternity",
  //   deliveryDate: "2024-12-02",
  //   items: [],
  //   note: "",
  // });

  // const selectedItems = formData.items.map((item) => item.name);

  // const handleInputChange = (e, index, field) => {
  //   const updatedItems = [...formData.items];
  //   if (field === "quantity" || field === "variant") {
  //     updatedItems[index][field] = e.target.value;
  //   } else {
  //     updatedItems[index].deliveryDate = e.target.value;
  //   }
  //   setFormData({ ...formData, items: updatedItems });
  // };

  const [paymentTerms, setPaymentTerms] = useState("Net 30");
  const [shippingMethod, setShippingMethod] = useState("Courier Services");
  const [deliverySchedule, setDeliverySchedule] =
    useState("Immediate delivery");
  const [leadTime, setLeadTime] = useState(10);
  const [attachments, setAttachments] = useState<File | null>(null);

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
  }

  const handleFileUpload = (e: FileUploadEvent): void => {
    setAttachments(e.target.files ? e.target.files[0] : null);
  };
  return (
    // <div className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
    //   <h2 className="text-xl font-bold mb-1">Terms and Attachments</h2>
    //   <p className="text-md text-gray-400">
    //     Provide detailed information on payment and delivery terms
    //   </p>
    //   <form className="mt-8">
    //     <div className="grid grid-cols-2 gap-4 mb-6">
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Payment Terms
    //         </label>
    //         <input
    //           type="text"
    //           name="paymentTerms"
    //           value={formData.paymentTerms}
    //           readOnly
    //           className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Delivery Schedule
    //         </label>
    //         <input
    //           type="text"
    //           name="deliverySchedule"
    //           value={formData.deliverySchedule}
    //           onChange={(e) =>
    //             setFormData({ ...formData, deliverySchedule: e.target.value })
    //           }
    //           className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Department
    //         </label>
    //         <input
    //           type="text"
    //           name="department"
    //           value={formData.department}
    //           onChange={(e) =>
    //             setFormData({ ...formData, department: e.target.value })
    //           }
    //           className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Expected Delivery Date
    //         </label>
    //         <input
    //           type="date"
    //           name="deliveryDate"
    //           value={formData.deliveryDate}
    //           onChange={handleInputChange}
    //           className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
    //         />
    //         <p className={`mt-2 text-xs "text-gray-400`}>
    //           Calculated based on lead time and issue date
    //         </p>
    //       </div>
    //     </div>

    //     <div className="mb-6 mt-4">
    //       <label className="block text-sm font-medium text-gray-700">
    //         Note
    //       </label>
    //       <textarea
    //         name="note"
    //         value={formData.note}
    //         onChange={(e) => {
    //           if (e.target.value.length <= 200) {
    //             handleInputChange();
    //           }
    //         }}
    //         className="w-full md:w-[50%] py-2 px-4 border border-[#D0D5DD] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //         rows={4}
    //       ></textarea>
    //       <div className="flex justify-end md:w-[50%] text-right text-sm text-gray-500 mt-1">
    //         {formData.note.length}/200
    //       </div>
    //     </div>

    //     <div className="flex border-t border-gray-300 pt-4 justify-end">
    //       <div className="flex w-full md:w-[50%]">
    //         <button
    //           type="button"
    //           className=" mr-2 border-2 border-gray-300 px-2 md:px-4 py-2 text-black font-semibold rounded-md hover:bg-gray-400"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="button"
    //           className="w-full mr-2 border-2 border-blue-500 px-2 md:px-6 py-2 text-blue-500 font-semibold rounded-md hover:bg-gray-400"
    //         >
    //           Save as Draft
    //         </button>
    //         <button
    //           type="button"
    //           onClick={onNext}
    //           className="w-full md:px-8 py-1 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    //         >
    //           Continue
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
      <h1 className="text-2xl font-bold text-gray-900">
        Terms and Attachments
      </h1>
      <p className="text-gray-500 mb-6">
        Provide detailed information on payment and delivery terms
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Payment Terms */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Payment Terms
          </label>
          <select
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Net 30</option>
            <option>Net 60</option>
            <option>Net 90</option>
          </select>
        </div>

        {/* Delivery Schedule */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Delivery Schedule
          </label>
          <select
            value={deliverySchedule}
            onChange={(e) => setDeliverySchedule(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Immediate delivery</option>
            <option>Next day delivery</option>
            <option>Scheduled delivery</option>
          </select>
        </div>

        {/* Shipping Method */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Shipping Method
          </label>
          <select
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Courier Services</option>
            <option>Air Freight</option>
            <option>Sea Freight</option>
          </select>
        </div>

        {/* Lead Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Lead time
          </label>
          <input
            type="number"
            value={leadTime}
            onChange={(e) => setLeadTime(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Attachments */}
      <div className="mb-6 w-full md:w-[50%]">
        <label className="block text-gray-700 font-medium mb-2">
          Attachments
        </label>
        <p className="text-gray-500 mb-6">
          Provide detailed information on payment and delivery terms
        </p>
        <div className="border border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center">
          <Image width={50} height={50} src={`/file-icon.png`} alt="delete" />
          <p className="text-gray-500 mb-2">
            <span className="text-blue-500">Click to upload </span>or drag and
            drop
          </p>
          <p className="text-gray-400 text-sm">
            (SVG, PNG, JPG, GIF or max. 800x400px)
          </p>
          <p className="text-gray-500">OR</p>
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="fileUpload"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer px-4 py-2 font-bold border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-600 hover:text-white mt-4"
          >
            Browse Files
          </label>
          {attachments && (
            <p className="text-gray-700 mt-2">Uploaded: {attachments.name}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="md:flex w-full justify-between">
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
            onClick={onNext}
            className="w-full md:px-8 py-1 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RFQStep2;
