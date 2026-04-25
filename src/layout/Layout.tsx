const Layout = () => {
  return (
    // 1. 제일 바깥쪽은 배경색을 본체와 똑같이 맞춰서 빈 공간이 없게 합니다.
    <div className="min-h-screen bg-[#f8f9fa] w-full">
      {/* 2. 헤더나 카테고리바 같은 상단바는 w-full을 줘서 옆으로 꽉 채웁니다. */}
      {/* (단, Header 내부의 글자들은 다시 1440px 안으로 모아야 합니다) */}
      <Header />
      <Category />

      {/* 3. 실제 본문 내용만 중앙에 1440px로 모아줍니다. */}
      <main className="w-[1440px] mx-auto relative min-h-[1500px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
