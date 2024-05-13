import "./Listitem.scss";

const ListItem = ({ booth_name, content, url }) => {
  return (
    <div className="ListItem">
      <div className="item">
        <img src={url} />
        <div className="text">
          <div id="text1">{booth_name}</div>
          <div id="text2">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
