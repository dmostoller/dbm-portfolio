import { createCanvas, loadImage, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';

async function generateOGImage() {
  try {
    // Canvas setup
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background color
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Load and register DOS font
    const fontPath = path.resolve('./public/fonts/Perfect-DOS-VGA.ttf');
    if (!fs.existsSync(fontPath)) {
      throw new Error(`Font file not found: ${fontPath}`);
    }
    registerFont(fontPath, { family: 'DOS' });

    // Set text properties
    ctx.font = '24px DOS';
    ctx.fillStyle = '#00ff00';

    // ASCII Border
    const border = [
      '╔═══════════════════════════════════════════════════════════════╗',
      '║                                                               ║',
      '║                                                               ║',
      '╚═══════════════════════════════════════════════════════════════╝',
    ];

    border.forEach((line, index) => {
      ctx.fillText(line, 20, 50 + index * 30);
    });

    // Add Name and Title
    ctx.font = '64px DOS';
    ctx.fillText('David Mostoller', 100, 250);
    ctx.font = '36px DOS';
    ctx.fillText('Software Engineer', 100, 300);

    // Add Tech Stack Icons
    const icons = ['typescript', 'react', 'node', 'tailwind'];
    let iconX = 100;
    const iconY = 400;

    for (const icon of icons) {
      const iconPath = path.resolve(`./public/icons/${icon}.png`);
      if (!fs.existsSync(iconPath)) {
        console.warn(`Icon not found: ${iconPath}`);
        continue;
      }
      const img = await loadImage(iconPath);
      ctx.drawImage(img, iconX, iconY, 64, 64);
      iconX += 100;
    }

    // Save the image to the public folder
    const outputPath = path.resolve('./public/og-image.png');
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log(`OG image successfully created at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

generateOGImage();
