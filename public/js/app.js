document.getElementById('form-activo').addEventListener('submit', (e) => {
  e.preventDefault();
  const serial = document.getElementById('serial').value;
  const qrElement = document.getElementById('qr-code');
  qrElement.innerHTML = '';
  
  // Genera QR con la librería QRCode.js
  new QRCode(qrElement, {
    text: `ACTIVO:${Date.now()}|SERIAL:${serial}`,
    width: 200,
    height: 200
  });
});