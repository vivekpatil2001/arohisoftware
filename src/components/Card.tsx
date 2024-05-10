import React from 'react';

function Card() {
  const images = [
    'https://www.google.com/search?q=images+software&rlz=1C1CHBF_enIN1067IN1067&oq=images+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGD0yBggGEEUYPTIGCAcQRRg80gEIMjE4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8', // Replace this URL with your desired image URL
  ];

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div
        className="relative bg-cover bg-center h-96" // Increased height to 96 (adjust as needed)
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Card Title</h2>
            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet mollis ipsum, id dictum justo porttitor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
