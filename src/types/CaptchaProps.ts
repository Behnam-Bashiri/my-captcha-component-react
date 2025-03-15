/**
 * Props for the Captcha component.
 */
export interface CaptchaProps {
  /**
   * Callback function triggered when CAPTCHA validation changes.
   */
  onChange: (isValid: boolean) => void;

  /**
   * Number of characters in the CAPTCHA code.
   */
  charCount?: number;

  /**
   * Whether CAPTCHA validation is case-sensitive.
   */
  caseSensitive?: boolean;

  /**
   * Characters to use for generating the CAPTCHA code.
   */
  chars?: string;

  /**
   * Background color of the CAPTCHA canvas.
   */
  backgroundColor?: string;

  /**
   * Density of noise dots on the canvas.
   */
  noiseDensity?: number;

  /**
   * Number of random lines drawn on the canvas.
   */
  lineCount?: number;

  /**
   * Font family for the CAPTCHA text.
   */
  font?: string;

  /**
   * Width of the CAPTCHA canvas.
   */
  canvasWidth?: number;

  /**
   * Height of the CAPTCHA canvas.
   */
  canvasHeight?: number;

  /**
   * Padding around the CAPTCHA text.
   */
  padding?: number;
}
