import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


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

  const { title, picture, title_bg_color, description, price} = card || {};

  const handlecardclick = ()=> {

    const addedCardArray = [];

    const storageCardItems = JSON.parse(localStorage.getItem('donateCard'))

    if(!storageCardItems) {
        addedCardArray.push(card)
        localStorage.setItem('donateCard', JSON.stringify(addedCardArray))
        swal("Good job!", "Your Donation Paid Successfully", "success");
    }
    else{
        const isExist = storageCardItems.find((card) => card.id == id)
        if(!isExist){

            addedCardArray.push(...storageCardItems, card)
            localStorage.setItem('donateCard', JSON.stringify(addedCardArray))
            swal("Good job!", "Your Donation Paid Successfully", "success");
        }
        else{
            swal("OOPS !!!!", "You have already paid this");
    }
    
    }
    // console.log(card);
    // localStorage.setItem('donateCard', JSON.stringify{phone})
  }

  return <div>
    <div className="" >
    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={picture} alt="picture" className="donate-page-image h-screen w-full" /></figure>
  <div className=" absolute w-full items-center bottom-0">
  <button onClick={handlecardclick} className="btn btn-primary text-white border-none py-1.5 px-5 ml-7 lg:my-44 text-xl font-normal" style={{background: title_bg_color}}>Donate ${price}</button>
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
