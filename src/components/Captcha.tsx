import React, { useState, useRef, useEffect } from "react";
import { CaptchaProps } from "../types/CaptchaProps";
import { generateRandomCode } from "../utils/generateRandomCode";
import { drawCaptcha } from "../utils/drawCaptcha";

const Captcha: React.FC<CaptchaProps> = ({
  onChange,
  charCount = 6,
  caseSensitive = false,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  backgroundColor = "#f3f4f6",
  noiseDensity = 100,
  lineCount = 5,
  font = "Arial",
  padding = 10,
}) => {
  const [captchaCode, setCaptchaCode] = useState<string>(
    generateRandomCode(charCount, chars)
  );
  const [userInput, setUserInput] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCaptcha(canvasRef.current, captchaCode, {
        backgroundColor,
        noiseDensity,
        lineCount,
        font,
        padding,
      });
    }
  }, [captchaCode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    const isValid = caseSensitive
      ? value === captchaCode
      : value.toLowerCase() === captchaCode.toLowerCase();

    if (onChange) onChange(isValid);
  };

  const refreshCaptcha = () => {
    const newCode = generateRandomCode(charCount, chars);
    setCaptchaCode(newCode);
    setUserInput("");
    if (onChange) onChange(false);
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Canvas for CAPTCHA */}
      <canvas
        ref={canvasRef}
        onClick={refreshCaptcha}
        className="border border-gray-300 cursor-pointer w-52 h-12 rounded-lg"
        aria-label="CAPTCHA Image"
      />

      {/* Input for user to enter CAPTCHA */}
      <input
        type="text"
        placeholder="Enter CAPTCHA"
        className="border p-2 text-center rounded-lg focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        value={userInput}
        onChange={handleInputChange}
        aria-label="Enter CAPTCHA code"
      />
    </div>
  );
};

export default Captcha;
