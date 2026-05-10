const ArticleCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-5 shadow-sm mb-4">
      <div className="hidden md:block w-48 h-32 bg-slate-300"></div>
      <div className="flex-1 md:ml-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-1 text-sm">
          <p className="text-gray-400 order-2 md:order-1">메디컬 데일리 리뷰 • 2시간 전</p>
          <p className="w-fit mb-2 rounded-full bg-blue-500 text-white px-4 pt-[1px] text-xs md:order-2">
            진보
          </p>
        </div>
        <h3 className="text-base md:text-lg font-bold line-clamp-1">
          정부, '2,000명 증원' 정책 타협 불가 입장 고수
        </h3>
        <p className="line-clamp-3 text-gray-600 text-sm leading-relaxed">
          보건복지부는 공식 성명을 통해 필수 의료 분야의 "심각한 의사 부족"을 언급하며, 증원 규모 는
          협상의 대상이 아님을 재확인했습니다 보건복지부는 공식 성명을 통해 필수 의료 분야의 "심각한
          의사 부족"을 언급하며, 증원 규모 는 협상의 대상이 아님을 재확인했습니다 보건복지부는 공식
          성명을 통해 필수 의료 분야의 "심각한 의사 부족"을 언급하며, 증원 규모 는 협상의 대상이
          아님을 재확인했습니다 보건복지부는 공식 성명을 통해 필수 의료 분야의 "심각한 의사 부족"을
          언급하며, 증원 규모 는 협상의 대상이 아님을 재확인했습니다
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
