import React from 'react';

const TELEGRAM_LINK = 'https://t.me/ttsp_00';

export const TelegramButton: React.FC = () => (
  <a
    href={TELEGRAM_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 mt-8 text-lg text-[#221d1d] border border-[#221d1d] bg-transparent rounded-full hover:bg-[#221d1d] hover:text-white transition-colors duration-200 font-normal"
  >
    Напишите нам
  </a>
);

export default TelegramButton; 