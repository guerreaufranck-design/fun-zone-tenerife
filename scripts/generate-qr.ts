import QRCode from 'qrcode';
import path from 'path';

const WAIVER_URL = 'https://axe-throwing-tenerife.vercel.app/waiver';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'images', 'qr-waiver.png');

async function main() {
  await QRCode.toFile(OUTPUT_PATH, WAIVER_URL, {
    width: 400,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });
  console.log(`QR code generated: ${OUTPUT_PATH}`);
  console.log(`URL: ${WAIVER_URL}`);
}

main().catch(console.error);
