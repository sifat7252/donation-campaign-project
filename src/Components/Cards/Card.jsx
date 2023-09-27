const Card = ({card}) => {

// console.log(card)
const {id, title, picture, title_bg_color, category, category_bg_color, card_bg_color,} = card || {};

  return (
    <div>
      <div>
        <div style={{background: card_bg_color}} className="card  shadow-xl">
          <figure>
            <img
              src={picture}
              alt="picture"
            />
          </figure>
          <div className="card-body">
            <h2 className="category text-sm font-medium py-1 px-2 max-w-max rounded-md" style={{background: category_bg_color, color: title_bg_color}}>{category}</h2>
            <h3 className="title text-xl font-semibold" style={{color: title_bg_color,}}>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
