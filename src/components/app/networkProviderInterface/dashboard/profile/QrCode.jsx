import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import Button from "../../../landingPage/Inputs/Button";

const QrCode = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        "https://example.com/brochure-link",
        { width: 100 },
        function (error) {
          if (error) console.error(error);
        }
      );
    }
  }, []);

  return (
    <div>
      <div className="bg-qr flex items-center justify-center">
        <canvas ref={canvasRef} />
      </div>
      <div className="flex justify-between gap-2 mt-3">
        <button className="border rounded-[8px] border-[#63CFAC] h-[49px] w-[205px] text-[#63CFAC] ">
          {" "}
          Copy Link
        </button>
        <div className="w-[205px]">
          <Button text={"Download QR Code"} />
        </div>
      </div>
    </div>
  );
};

export default QrCode;
