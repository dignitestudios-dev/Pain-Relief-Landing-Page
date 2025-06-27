import React, { useEffect, useRef } from "react";
import { Brochure } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";
import QRCode from "qrcode";
import html2canvas from "html2canvas";

const BrochureSection = ({ referralCode }) => {
  const canvasRef = useRef(null);
  const bigCanvasRef = useRef(null);

  const captureRef = useRef(null); // 📌 for capturing the DOM

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        referralCode?.referralLink || "https://example.com", // fallback
        { width: 145 },
        function (error) {
          if (error) console.error(error);
        }
      );
    }
  }, [referralCode]);

  useEffect(() => {
    if (bigCanvasRef.current) {
      QRCode.toCanvas(
        bigCanvasRef.current,
        referralCode?.referralLink || "https://example.com", // fallback
        { width: 230 },
        function (error) {
          if (error) console.error(error);
        }
      );
    }
  }, [referralCode]);

  // 📥 Download handler
  const handleDownload = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current, {
        scale: 2, // ⬅️ 2x resolution for sharper image
        useCORS: true, // ⬅️ if your image is from external domain (important!)
      });

      const link = document.createElement("a");
      link.download = "brochure.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div>
      <div className="relative inline-block h-[480px] overflow-auto">
        {/* Brochure Image */}
        <img src={Brochure} alt="Brochure" className="max-w-[640px]" />

        {/* QR Code overlaid */}
        <div className="absolute -bottom-40 right-12 ">
          <canvas ref={canvasRef} />
        </div>
        <div className="mt-4">
          <Button text={"Download Brochure"} onClick={handleDownload} />
        </div>
      </div>
      {/* Download Button */}
      <div className="mt-96"></div>
      <div ref={captureRef} className="relative inline-block -z-40 ">
        <img src={Brochure} alt="Brochure" className="max-w-[1200px]" />

        <div className="absolute bottom-[360px] right-28 ">
          <canvas ref={bigCanvasRef} />
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;
