import React, { useId, useState } from 'react';
import headerBg from '../assets/header2.png';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const searchId = useId();

  const menus = [
    { label: '알림', leftClassName: 'left-[1080px]' },
    { label: '내 정보', leftClassName: 'left-[1124px]' },
    { label: '소개', leftClassName: 'left-[1184px]' },
    { label: '로그아웃', leftClassName: 'left-[1258px]' },
  ];

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header
      className="absolute top-0 left-0 w-[1440px] h-[253px] overflow-hidden bg-cover bg-[50%_50%]"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div
        className="absolute top-0 left-0 w-[1440px] h-[273px] flex flex-col gap-9 bg-[#000000a3]"
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 w-[1440px] h-[253px]">
        <div className="top-3.5 left-[130px] h-[34px] font-bold text-[#f6f6f6] absolute flex items-center text-2xl">
          AI PROJECT
        </div>
        <nav aria-label="주요 메뉴">
          {menus.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`absolute top-5 ${item.leftClassName} h-[21px] font-normal text-[#f6f6f6] text-sm flex items-center bg-transparent border-0 p-0 cursor-pointer hover:text-white`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute top-[106px] left-1/2 -translate-x-1/2 h-[27px] font-bold text-[#dddddd] text-2xl flex items-center">
          오늘의 이슈, 관점을 더하다
        </div>
        <form
          onSubmit={onSearch}
          role="search"
          className="absolute top-[169px] left-[308px] w-[824px] h-[51px] flex items-center bg-[#ffffff26] rounded-[30px] overflow-hidden border border-solid border-[#cbcbcba1] backdrop-blur-[12.5px]"
        >
          <input
            id={searchId}
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="ml-[21px] h-[23px] w-[745px] bg-transparent outline-none border-0 font-normal text-[#f6f6f6] text-base placeholder:text-[#b3b3b3]"
          />
          <button
            type="submit"
            className="ml-auto mr-[19px] flex h-[30px] w-[30px] items-center justify-center bg-transparent p-0 border-0 cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
