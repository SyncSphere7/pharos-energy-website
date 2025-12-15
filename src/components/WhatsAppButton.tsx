import { useState } from 'react';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31Z"
      fill="white"
    />
    <path
      d="M16 28.5C22.3513 28.5 27.5 23.3513 27.5 17C27.5 10.6487 22.3513 5.5 16 5.5C9.64873 5.5 4.5 10.6487 4.5 17C4.5 19.3711 5.24784 21.5633 6.51649 23.3542L5.22222 28.5L10.5577 27.2457C12.3016 28.4244 14.3709 29.1111 16.5833 29.1111"
      fill="#25D366"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9.5C12.1672 8.83333 11.6565 8.83333 11.1407 8.83333C10.2188 8.83333 8.78125 9.72222 8.78125 11.6944C8.78125 13.5278 9.77925 15.2222 12.0382 17.8889C14.297 20.5556 17.6667 22.7222 20.4271 22.7222C23.1875 22.7222 23.9167 20.8889 23.9167 20.1667C23.9167 19.4444 23.4375 19.1667 23.1875 19.1667C22.9375 19.1667 21.25 18.5556 20.9375 18.4167C20.625 18.2778 20.375 18.5833 20.1875 18.7778C19.7188 19.3056 19.1875 20.1111 18.9375 20.1111C18.6875 20.1111 16.8438 19.2778 15.125 17.3611C13.4062 15.4444 12.7188 14.2778 12.7188 14.0278C12.7188 13.7778 13.375 13.0556 13.75 12.6389C14.125 12.2222 14.0625 11.8889 13.9375 11.5556C13.8125 11.2222 12.9167 10.1667 12.5 9.5Z"
      fill="white"
    />
  </svg>
);

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '447377469494';
  const message = encodeURIComponent('Hello, I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <div className="flex items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            <WhatsAppIcon />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isHovered ? 'max-w-xs pr-4' : 'max-w-0'
            }`}
          >
            <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
              Chat with us
            </span>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </a>
    </div>
  );
}
