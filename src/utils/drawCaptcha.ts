export const drawCaptcha = (
  canvas: HTMLCanvasElement,
  code: string,
  options: {
    backgroundColor: string;
    noiseDensity: number;
    lineCount: number;
    font: string;
    padding: number;
  }
) => {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.warn("Canvas rendering is not supported in this environment.");
    return;
  }

  const { width, height } = canvas;
  const { backgroundColor, noiseDensity, lineCount, font, padding } = options;

  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Set background color
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  // Add noise
  for (let i = 0; i < noiseDensity; i++) {
    ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.2})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  // Add random lines
  for (let i = 0; i < lineCount; i++) {
    ctx.strokeStyle = `rgba(0, 0, 0, ${Math.random() * 0.3})`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Draw the CAPTCHA text
  const fontSize = Math.min(height / 2, 24);
  const textWidth = width - 2 * padding;
  const charSpacing = textWidth / code.length;

  ctx.font = `${fontSize}px ${font}`;
  ctx.textBaseline = "middle";

  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const x = padding + i * charSpacing + Math.random() * 10;
    const y = height / 2 + (Math.random() * 10 - 5);

    // Random color
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;

    // Random rotation
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((Math.random() - 0.5) * 0.5);
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }
};
