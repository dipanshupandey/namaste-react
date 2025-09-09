
const Menu = ({ item }) => {
  const info = item.card.info;
  return (
    <div className="menu-card-full">
      <div className="menu-details">
        <h3 className="menu-title">{info.name}</h3>
        <div className="menu-category">{info.category}</div>
        <p className="menu-desc">{info.description}</p>
        <div className="menu-price">Rs.{(info.price || info.defaultPrice) / 100}</div>
      </div>

      {info.imageId && (
        <div className="menu-img-container">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              info.imageId
            }
            alt={info.name}
            className="menu-img"
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
