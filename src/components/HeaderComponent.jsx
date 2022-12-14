import { BsFillCaretDownFill, BsTextLeft, BsGrid } from "react-icons/bs";

const HeaderComponent = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between px-4 mb-3">
      <div className="headerLeft d-flex">
        <h3 className="videoType">Recommended TV Shows</h3>
        <div className="genres d-flex align-items-center">
          <div>Genres</div>
          <div>
            <BsFillCaretDownFill />
          </div>
        </div>
      </div>
      <div className="headerRight d-flex">
        <BsTextLeft className="viewButtons" />
        <BsGrid className="viewButtons" />
      </div>
    </div>
  );
};

export default HeaderComponent;
