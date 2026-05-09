import React, { useId, useState } from 'react';
import headerBg from '@/assets/back1.jpg';
import NotificationBox from '@/layout/components/notification/NotificationBox';
import MobileMenu from '@/layout/components/menu/MobileMenu';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일용 햄버거바
  const searchId = useId();

  const menus = ['내 정보', '소개', '로그아웃'];

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header
      className="w-full h-[185px] md:h-[230px] bg-cover bg-[50%_50%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url(${headerBg})`,
      }}
    >
      {/* 로고 & 사용자 관련 네비 */}
      <div className="w-full h-16 flex justify-between items-center px-5 md:px-16">
        <h1 className="font-bold text-[#f6f6f6] text-xl md:text-2xl">한 눈</h1>
        <nav aria-label="주요 메뉴" className="flex justify-between items-center md:w-56">
          {/* 알림 */}
          <NotificationBox />

          {/* pc버전 나머지 메뉴 */}
          <div className="hidden md:block">
            {menus.map((item) => (
              <button
                key={item}
                type="button"
                className={`${item === '로그아웃' ? 'md:ml-7' : ''} text-[#f6f6f6] text-sm p-0 cursor-pointer`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* 모바일버전 메뉴 */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </button>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} menus={menus} />
        </nav>
      </div>
      <h1 className="mt-7 md:mt-12 font-bold text-[#dddddd] text-l md:text-2xl flex items-center justify-center">
        오늘의 이슈, 관점을 더하다
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={onSearch}
          role="search"
          className="mt-3 md:mt-6 mx-6 h-9 md:h-11 max-w-[800px] w-full flex items-center bg-[#ffffff26] rounded-[30px] overflow-hidden border border-solid border-[#cbcbcba1] backdrop-blur-[12.5px]"
        >
          <input
            id={searchId}
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="ml-6 h-6 flex-1 bg-transparent outline-none border-0 text-[#f6f6f6] text-xs md:text-base placeholder:text-[#b3b3b3]"
          />
          <button
            type="submit"
            className="mr-[19px] mb-[2px] flex h-[30px] w-[30px] items-center justify-center bg-transparent p-0 border-0 cursor-pointer"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

// 아이콘 컴포넌트
const SearchIcon = () => {
  return (
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
  );
};

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="size-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
