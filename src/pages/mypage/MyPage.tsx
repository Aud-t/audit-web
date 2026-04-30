import React, { useState, useRef } from 'react';
import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/Pagination';
import Modal from './Modal';

const MyPage: React.FC = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [200, 201, 202];
  });

  const [activeTab, setActiveTab] = useState<'scrapped' | 'recent'>('scrapped');
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem('userProfileImage');
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('userProfileImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmImageDelete = () => {
    setProfileImage(null);
    localStorage.removeItem('userProfileImage');
    setIsDeleteModalOpen(false);
  };

  const handleBookmarkToggle = (id: number) => {
    const nextIds = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((itemId) => itemId !== id)
      : [...bookmarkedIds, id];
    setBookmarkedIds(nextIds);
    localStorage.setItem('bookmarks', JSON.stringify(nextIds));
  };

  return (
    <div className="w-full pb-20">
      <div className="max-w-[880px] mx-auto px-6 pt-10">
        {/* 프로필 & 통계 */}
        <section className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#D7D7D7] mb-10">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center bg-white border border-gray-200 rounded-full px-2.5 py-1.5 shadow-lg space-x-2 z-10">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-black transition-colors p-0.5"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </button>
                <div className="w-[1px] h-2.5 bg-gray-100"></div>
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="text-gray-300 hover:text-black transition-colors p-0.5"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            <div>
              <h2 className="text-[28px] font-bold text-black mb-1 leading-none">공오삼</h2>
              <p className="text-gray-400 font-light text-[14px]">test053@gmail.com</p>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="bg-[#F3F3F4] rounded-[12px] w-[100px] h-[85px] flex flex-col items-center justify-center">
              <p className="text-[10px] text-gray-400 font-bold mb-1">스크랩한 사건</p>
              <p className="text-[34px] font-bold text-black leading-none">
                {bookmarkedIds.length}
              </p>
            </div>
          </div>
        </section>

        {/* 탭 메뉴 라인 */}
        <div className="flex items-end justify-between mb-10 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('scrapped')}
              className={`text-[14px] pb-1 transition-all ${activeTab === 'scrapped' ? 'font-bold text-black border-b-2 border-black' : 'text-gray-300 font-normal hover:text-gray-500'}`}
            >
              스크랩한 사건
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`text-[14px] pb-1 transition-all ${activeTab === 'recent' ? 'font-bold text-black border-b-2 border-black' : 'text-gray-300 font-normal hover:text-gray-500'}`}
            >
              최근 본 사건
            </button>
          </div>

          <button
            onClick={() => setIsWithdrawModalOpen(true)}
            className="group flex items-center space-x-1.5 text-[12px] text-gray-300 hover:text-black transition-all pb-1 border-b border-transparent hover:border-black"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>탈퇴하기</span>
          </button>
        </div>

        {/* 하단 섹션 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 min-h-[300px]">
          {activeTab === 'scrapped' ? (
            bookmarkedIds.map((id) => (
              <NewsCard
                key={id}
                id={id}
                category="의료 개혁"
                title={`스크랩 소식 ${id}`}
                summary="보건복지부는 지방 의료 인력 확충 및 의료 수급 불균형 해소를 위해 대학별 정원 배정 위원회를 가동했습니다."
                date="2026.10.10"
                isBookmarked={true}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-300 font-light">
              최근 본 사건 데이터가 없습니다.
            </div>
          )}
        </div>

        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />

        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmImageDelete}
          title="프로필 이미지 삭제"
          message="현재 설정된 프로필 이미지를 삭제하고 기본 이미지로 변경하시겠습니까?"
          confirmText="삭제하기"
        />
        <Modal
          isOpen={isWithdrawModalOpen}
          onClose={() => setIsWithdrawModalOpen(false)}
          onConfirm={() => setIsWithdrawModalOpen(false)}
          title="정말 탈퇴하시겠습니까?"
          message="탈퇴 시 모든 스크랩 정보와 이용 기록이 삭제되며, 복구할 수 없습니다."
          confirmText="탈퇴하기"
        />
      </div>
    </div>
  );
};

export default MyPage;
