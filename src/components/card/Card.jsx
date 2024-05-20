import { Link } from "react-router-dom";
import "./card.scss";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Card({ item, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await apiRequest.delete(`/posts/${item.id}`);
      onDelete(item.id); // Call onDelete callback to remove the card from UI
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            {onDelete && ( // Check if onDelete is a function
              <div className="icon" onClick={handleDelete} style={{ cursor: "pointer" }}>
                {isLoading ? "Deleting..." : <p>Delete</p>}
              </div>
            )}
            {error && <span>{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
