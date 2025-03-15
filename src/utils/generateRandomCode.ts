/**
 * Generates a random CAPTCHA code.
 * @param length - Length of the CAPTCHA code.
 * @param chars - Characters to use for generating the code.
 * @returns A random string of specified length.
 */
export const generateRandomCode = (length: number, chars: string): string => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
