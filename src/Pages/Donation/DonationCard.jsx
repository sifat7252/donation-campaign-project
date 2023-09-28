import { Link,  } from "react-router-dom";

const DonationCard = ({ card }) => {
  // console.log(card)

  const {
    id,
    title,
    picture2,
    title_bg_color,
    category,
    category_bg_color,
    card_bg_color,
    price,
  } = card || {};
  // console.log(title)

  const handleBackToDonation = () => {
   < Link to = {`/cards/${id}`}></Link>
  }

  return (
    <div >
      <div>
        <div
          style={{ background: card_bg_color }}
          className=" flex cursor-pointer rounded-md shadow-xl"
        >
          <div>
            <figure >
              <img className="h-full" src={picture2} alt="Album" />
            </figure>
          </div>
          <div className="card-body">
            <h2
              className="category text-sm font-medium py-1 px-2 max-w-max rounded-md"
              style={{ background: category_bg_color, color: title_bg_color }}
            >
              {category}
            </h2>
            <h2 className="card-title">{title}</h2>
            <h2 className="card-price">${price}</h2>

            <div className="card-actions">
              <button onClick={handleBackToDonation} 
                className="btn btn-primary border-none text-white "
                style={{ background: title_bg_color }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
