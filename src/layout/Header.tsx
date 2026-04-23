import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="border-2 border-black">
        <h1>헤더</h1>
        <Link className="text-blue-700" to={'/mypage'}>
          마이페이지
        </Link>
        |
        <Link className="text-blue-700" to={'/'}>
          사건 리스트(홈)
        </Link>
        |
        <Link className="text-blue-700" to={'/event-detail'}>
          사건 요약
        </Link>
        |
        <Link className="text-blue-700" to={'/timeline'}>
          타임라인으로 보는 사건
        </Link>
        |
        <Link className="text-blue-700" to={'/abusing'}>
          어뷰징 리스트
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
