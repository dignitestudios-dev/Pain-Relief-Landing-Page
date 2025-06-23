import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";

const ReferralUrlModal = ({ link = "", onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); //
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] p-6 w-[90%] max-w-md">
        {/* close button */}
        <div className="flex justify-end items-center mb-4">
          <button onClick={onClose}>
            <IoMdClose size={22} />
          </button>
        </div>
        {/* title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-800">
          Your Referral Link
        </h2>

        {/* link field */}
        <div className="relative mb-8">
          <input
            readOnly
            value={link}
            className="w-full truncate rounded-lg border border-gray-300 bg-gray-50 py-3 pl-4 pr-12 text-sm text-gray-700 focus:border-cyan-500 focus:bg-white focus:outline-none"
          />

          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-cyan-600 transition hover:bg-cyan-50"
            aria-label="Copy referral link"
          >
            {copied ? (
              <HiCheck size={18} />
            ) : (
              <HiOutlineClipboardCopy size={18} />
            )}
          </button>
        </div>

        {/* open link button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg bg-gradient-to-r from-[#29ABE2] to-[#63CFAC] py-3 text-center text-white transition hover:opacity-90"
        >
          Open Link
        </a>

        {/* copy feedback */}
        {copied && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            Copied to clipboard!
          </p>
        )}
      </div>
    </div>
  );
};

export default ReferralUrlModal;
