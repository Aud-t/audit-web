import { useState } from 'react';

const NotificationBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-[#f6f6f6] text-sm cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        알림
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
