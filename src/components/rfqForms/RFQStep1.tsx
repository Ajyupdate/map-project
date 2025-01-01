import Image from "next/image";
import { useState } from "react";

interface RFQStep1Props {
  onNext: () => void;
  onPrev?: () => void;
}
const RFQStep1 = ({ onNext }: RFQStep1Props) => {
  const availableItems = [
    { name: "Oxygen Concentrator", variants: ["Blue", "White"], price: 12.0 },
    { name: "Mechanical Ventilator", variants: ["Black", "Gray"], price: 15.0 },
    { name: "Patient Monitor", variants: ["Green", "Red"], price: 20.0 },
  ];

  const [formData, setFormData] = useState<FormData>({
    rfqNo: "RFQ-10234",
    title: "Request for Equipments",
    department: "Maternity",
    deliveryDate: "2024-12-02",
    items: [],
    note: "",
  });

  const selectedItems = formData.items.map((item) => item.name);
  const availableDropdownItems = availableItems.filter(
    (item) => !selectedItems.includes(item.name)
  );

  interface Item {
    name: string;
    variant: string;
    quantity: number;
    price: number;
    deliveryDate: string;
  }

  interface FormData {
    rfqNo: string;
    title: string;
    department: string;
    deliveryDate: string;
    items: Item[];
    note: string;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    field: keyof Item
  ) => {
    const updatedItems = [...formData.items];
    if (field === "quantity" || field === "variant") {
      if (field === "quantity") {
        updatedItems[index][field] = parseInt(e.target.value, 10);
      } else {
        updatedItems[index][field] = e.target.value;
      }
    } else {
      updatedItems[index].deliveryDate = e.target.value;
    }
    setFormData({ ...formData, items: updatedItems });
  };

  interface AvailableItem {
    name: string;
    variants: string[];
    price: number;
  }

  const handleItemChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedItem: AvailableItem | undefined = availableItems.find(
      (item) => item.name === e.target.value
    );
    if (!selectedItem) return;
    const updatedItems = [...formData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      name: selectedItem.name,
      price: selectedItem.price,
      variant: "",
      quantity: 1,
    };
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", variant: "", quantity: 1, price: 0, deliveryDate: "" },
      ],
    });
  };

  const removeItem = (index: number) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const calculateAmount = (quantity: number, price: number): number =>
    quantity * price;

  const calculateSubtotal = () => {
    return formData.items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div className="my-6 mx-6 p-6 bg-white rounded-lg shadow border border-[#E4E7EC]">
      <h2 className="text-xl font-bold mb-1">Request for Quote</h2>
      <p className="text-md text-gray-400">
        Fill out these details to send the RFQ
      </p>
      <form className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              RFQ No
            </label>
            <input
              type="text"
              name="rfqNo"
              value={formData.rfqNo}
              readOnly
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Delivery Date
            </label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={(e) => handleInputChange(e, 0, "deliveryDate")}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xs "
            />
            <p className={`mt-2 text-xs "text-gray-400`}>
              Calculated based on lead time and issue date
            </p>
          </div>
        </div>

        <h3 className="text-md font-medium mb-2">Add Items</h3>
        <div className="overflow-auto mb-4">
          <table className="min-w-full table-auto  ">
            <thead className="bg-[#F7F9FC]">
              <tr>
                <th className=" px-4 py-1 text-left">Items</th>
                <th className=" px-4 py-1 text-left">Variant</th>
                <th className=" px-4 py-1 text-left">Quantity</th>
                <th className=" px-4 py-1 text-left">Price</th>
                <th className=" px-4 py-1 text-left">Delivery Date</th>
                <th className=" px-4 py-1 text-left">Amount</th>
                <th className=" px-4 py-1 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td className=" py-2">
                    <select
                      value={item.name || ""}
                      onChange={(e) => handleItemChange(e, index)}
                      className="bg-gray-200 py-2 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="" disabled>
                        Select Item
                      </option>
                      {availableDropdownItems.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className=" px-4 py-2">
                    <select
                      value={item.variant || ""}
                      onChange={(e) => handleInputChange(e, index, "variant")}
                      className="py-2 px-4  border border-[#D0D5DD] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      disabled={!item.name}
                    >
                      <option value="" disabled>
                        Select Variant
                      </option>
                      {item.name &&
                        availableItems
                          .find(
                            (availableItem) => availableItem.name === item.name
                          )
                          ?.variants.map((variant) => (
                            <option key={variant} value={variant}>
                              {variant}
                            </option>
                          ))}
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleInputChange(e, index, "quantity")
                        }
                        className="py-2 px-2 border border-[#D0D5DD] rounded-md shadow-sm pr-16 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      <span className="absolute top-1/2 transform -translate-y-1/2 right-2 px-2 bg-gray-100 text-gray-700 rounded text-sm">
                        pack
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-2 ">
                    <p className="py-1 px-2 border border-[#D0D5DD] rounded-md shadow-sm pr-16 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <span className="pr-2 text-lg">$</span>
                      <span className="text-lg">{item.price.toFixed(2)}</span>
                    </p>
                  </td>
                  {/* <td className="px-4 py-2 ">
                    <p className="py-1 px-2 border border-[#D0D5DD] rounded-md shadow-sm pr-16 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <span className="pr-2 text-lg">$</span>
                      <span className="text-lg">
                        {calculateAmount(item.quantity, item.price).toFixed(2)}
                      </span>
                    </p>
                  </td> */}
                  {/* <td className="px-4 py-2">
                    ${calculateAmount(item.quantity, item.price).toFixed(2)}
                  </td> */}
                  <td className="px-4 py-2">
                    <input
                      type="date"
                      value={item.deliveryDate || ""}
                      onChange={(e) =>
                        handleInputChange(e, index, "deliveryDate")
                      }
                      className="py-2 px-2 border border-[#D0D5DD] rounded-md shadow-sm pr-16 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </td>
                  <td className="px-4 py-2  font-bold">
                    $ {calculateAmount(item.quantity, item.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:underline"
                    >
                      <Image
                        width={20}
                        height={20}
                        src={`/bin.png`}
                        alt="delete"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t pt-4 border-gray-300 flex justify-between">
          <button
            type="button"
            onClick={addItem}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Item
          </button>

          <div>
            <p className="text-[#475367]">Sub Total</p>
            <p className="text-[#475367]">
              {" "}
              $ {calculateSubtotal().toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mb-6 mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Note
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={(e) => {
              if (e.target.value.length <= 200) {
                setFormData({ ...formData, note: e.target.value });
              }
            }}
            className="w-full md:w-[50%] py-2 px-4 border border-[#D0D5DD] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          ></textarea>
          <div className="flex justify-end md:w-[50%] text-right text-sm text-gray-500 mt-1">
            {formData.note.length}/200
          </div>
        </div>

        <div className="flex border-t border-gray-300 pt-4 justify-end">
          <div className="flex w-full md:w-[50%]">
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
      </form>
    </div>
  );
};

export default RFQStep1;
