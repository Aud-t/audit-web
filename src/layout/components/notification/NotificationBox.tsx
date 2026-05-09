import { useState } from 'react';

const NotificationBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-[#f6f6f6] text-sm cursor-pointer flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="hidden md:inline">알림</span>
        <BellIcon />
      </button>
      {isOpen && (
        <div className="w-[350px] bg-[#f6f6f6] absolute top-8 -right-10 p-3 z-[1000] rounded-md shadow-[0_2px_11px_0_rgba(0,0,0,0.25)]">
          <p className="text-center text-lg mb-6">알림센터</p>
          <ul>
            <li className="border-[#e2e2e2] border-b-2">
              <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                <p>새로운 사건</p>
                <p>방금 전</p>
              </div>
              <p className="py-2">‘의료 개혁’에 새로운 사건이 등록되었습니다.</p>
            </li>
          </ul>
          <button
            className="w-full text-center mt-3 hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationBox;

const BellIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 md:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
      />
    </svg>
  );
};
