import React, { useEffect, useRef } from 'react';
import { Brochure } from '../../../../../assets/export';
import Button from '../../../landingPage/Inputs/Button';
import QRCode from 'qrcode';

const BrochureSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        'https://example.com/brochure-link',
        { width: 100 },
        function (error) {
          if (error) console.error(error);
        }
      );
    }
  }, []);

  return (
    <div className="relative inline-block">
      {/* Brochure Image */}
      <img src={Brochure} alt="Brochure" className="w-full" />

      {/* QR Code on top of the image */}
      <div className="absolute top-[302px] left-[265px]">
        <canvas ref={canvasRef} />
      </div>

      {/* Download Button */}
      <div className="mt-4">
        <Button text={'Download brochure'} />
      </div>
    </div>
  );
};

export default BrochureSection;
