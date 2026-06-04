import React, { useState } from "react";
import Banner from "./Banner";
import logoUrl from "../assets/images/giving.jpg";
import gcashQR from "../assets/images/gcash-qr.jpg";
import Button from "../components/Button";

// QR Code Component
// const QRCodePlaceholder = () => {
//   return (
//     <div className="flex justify-center mb-8">
//       <img
//         src={gcashQR}
//         alt="GCash QR Code"
//         className="w-50 h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//       />
//     </div>
//   );
// };

// Donation Modal Component
const DonationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-50 bg-black pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transform transition-all duration-500 ease-out`}
      >
        <div
          className={`bg-white rounded-2xl shadow-2xl max-w-md mx-4 max-h-[90vh] flex flex-col pointer-events-auto transform transition-all duration-500 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-2xl font-bold text-gray-800">
              Support Our Mission
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-2xl font-bold hover:scale-110 transform"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto flex-1">
            <div className="text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Scan the QR code below to make your donation securely
              </p>

              {/* QR Code with Animation */}
              {/* <div className="">
                <QRCodePlaceholder />
              </div> */}
              <div className="flex justify-center mb-8">
                <img
                  src={gcashQR}
                  alt="GCash QR Code"
                  className="w-60 h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>

              {/* Donation Info */}
              {/* <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg mb-6 border-l-4 border-red-700">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Secure & Easy:</span> Your
                  donation is 100% secure and processed immediately.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Receipt:</span> You'll receive
                  a confirmation email for tax purposes.
                </p>
              </div> */}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animation */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }
      `}</style>
    </>
  );
};

const Give = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Banner text="Giving" logoUrl={logoUrl} position="70% 25%" />
      <div className="flex items-center justify-center py-12 ">
        <div className="w-3/7">
          <p className="text-5xl font-semibold mt-4 text-center tracking-wide leading-snug">
            See what
            <span className="font-bold text-red-700 tracking-wide"> God </span>
            can do <br />
            through your generosity.
            <br />
          </p>

          <p className="text-xl font-light mt-10 text-justify tracking-wider leading-snug">
            Every act of generosity makes a difference—helping more people hear
            the Gospel, find hope, and take their next step in faith. Giving is
            simple and secure. You can give a one-time gift or set up recurring
            giving. Together, we’re building the Church and changing lives for
            eternity.
          </p>

          <div className="flex justify-center mt-14">
            <div onClick={() => setIsModalOpen(true)}>
              <Button text="Give Online" color="bg-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Give;
