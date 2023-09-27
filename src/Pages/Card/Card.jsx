import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();
//   console.log(id);

  const cards = useLoaderData();
//   console.log(cards);

  useEffect(() => {
    // console.log("useEffect");

    const findCard = cards?.find(card => card.id == id);
    // console.log(findCard);
    setCard(findCard)
  }, [id, cards]);

  const {title, picture, title_bg_color, category, category_bg_color, card_bg_color, description, price} = card || {};

  return <div>
    <div className="">
    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={picture} alt="picture" className="donate-page-image w-full" /></figure>
  <div className="absolute -mb-3">
  <button className="btn btn-primary text-white border-none " style={{background: title_bg_color}}>Donate ${price}</button>
  </div>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold">{title}</h2>
    <p className="text-base font-normal">{description}</p>
    
  </div>
</div>
    </div>
  </div>;
};

export default Card;
