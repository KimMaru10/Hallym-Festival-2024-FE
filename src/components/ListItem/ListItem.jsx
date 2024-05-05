import "./Listitem.scss";

const ListItem = ({ title, albumId, url }) => {
  return (
    <div className="ListItem">
      <div className="item">
        <img src={url} />
        <div className="text">
          <div id="text1">{albumId}</div>
          <div id="text2">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
