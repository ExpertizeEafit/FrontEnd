import React from 'react';

type IconButtonProps = {
  imageUrl: string;
  altText: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ imageUrl, altText, onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full p-0 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-100 hover:ring-blue-500"
      onClick={onClick}
    >
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={imageUrl}
        alt={altText}
      />
    </button>
  );
}

export default IconButton;