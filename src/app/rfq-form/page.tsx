"use client";
import RFQStep1 from "@/components/rfqForms/RFQStep1";
import RFQStep2 from "@/components/rfqForms/RFQStep2";
import RFQStep3 from "@/components/rfqForms/RFQStep3";
import { useState } from "react";

const RFQForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="border-t border-gray-300">
      <h3
        className={`mx-6 py-8 text-sm font-semibold text-gray-500
              `}
      >
        {" "}
        <span className="text-blue-500">Quotes</span> / Quote Response
      </h3>
      <div className="mt-2 shadow-sm p-6 rounded-lg mx-6 flex justify-between items-center space-x-4  border border-[#E4E7EC]">
        <div className="md:flex items-center space-x-2">
          <div
            className={`ml-4 md:ml-0 w-8 h-8 flex items-center justify-center ${
              step === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            } font-bold rounded-full`}
          >
            1
          </div>
          <div>
            <h3
              className={`text-sm font-semibold ${
                step === 1 ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Request Information
            </h3>
            <p
              className={`text-xs ${
                step === 1 ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Provide details about the RFQ
            </p>
          </div>
        </div>

        <div className="md:flex items-center space-x-2">
          <div
            className={`ml-4 md:ml-0 w-8 h-8 flex items-center justify-center ${
              step === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            } font-bold rounded-full`}
          >
            2
          </div>
          <div>
            <h3
              className={`text-sm font-semibold ${
                step === 2 ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Terms and Attachments
            </h3>
            <p
              className={`text-xs ${
                step === 2 ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Payment and delivery terms
            </p>
          </div>
        </div>

        <div className="md:flex items-center space-x-2">
          <div
            className={`ml-4 md:ml-0 w-8 h-8 flex items-center justify-center ${
              step === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            } font-bold rounded-full`}
          >
            3
          </div>
          <div>
            <h3
              className={`text-sm font-semibold ${
                step === 3 ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Review
            </h3>
            <p
              className={`text-xs ${
                step === 3 ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Confirm all information provided
            </p>
          </div>
        </div>
      </div>
      {step === 1 && <RFQStep1 onNext={nextStep} />}
      {step === 2 && <RFQStep2 onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <RFQStep3 onNext={nextStep} onPrev={prevStep} />}
    </div>
  );
};

export default RFQForm;
