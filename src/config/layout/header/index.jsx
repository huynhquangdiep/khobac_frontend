import "./index.css";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="sides">
          <a href="/" className="logo">
            Trang Chủ
          </a>
        </div>
        <div className="sides">
          {" "}
          {/* <a href="#" className="menu">
            {" "}
          </a> */}
        </div>
        <div className="info">
        </div>
      </div>
    </>
  );
};

export default Header;
