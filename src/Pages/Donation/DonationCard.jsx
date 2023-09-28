const DonationCard = (card) => {
    console.log(card)

    const { title, picture2, title_bg_color, category, category_bg_color, card_bg_color, price} = card || {};

  return (
    <div>
      <div>
      <div style={{background: card_bg_color}} className="card flex cursor-pointer shadow-xl">
          <div>
          <figure>
            <img
              src={picture2}
              alt="Album"
            />
          </figure>
          </div>
          <div className="card-body">
          <h2 className="category text-sm font-medium py-1 px-2 max-w-max rounded-md" style={{background: category_bg_color, color: title_bg_color}}>{category}</h2>
            <h2 className="card-title">{title}</h2>
            <h2 className="card-price">${price}</h2>
            
            <div className="card-actions">
              <button className="btn btn-primary border-none text-white " style={{background: title_bg_color}}>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
