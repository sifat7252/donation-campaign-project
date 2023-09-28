import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [notFound, setNotFound] = useState(false);

  const [isSee, setIsSee] = useState(false)

  useEffect(() => {
    const storageCardItems = JSON.parse(localStorage.getItem("donateCard"));
    if (storageCardItems) {
      setDonation(storageCardItems);
    } else {
      setNotFound("No Data Found");
    }
  }, []);

//   console.log(donation)

  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3  w-11/12 mx-auto">
                {
                   isSee ? donation?.map(card => <DonationCard key= {card.id} card={card}></DonationCard>)
                   :
                   donation?.slice(0,4).map(card => <DonationCard key= {card.id} card={card}></DonationCard>)
                }
            </div>
            <div className="flex justify-center items-center m-10 ">
           {donation.length > 4 &&  <button onClick={()=> setIsSee(!isSee)} className="bg-green-600 rounded-md text-white text-base font-bold py-2 px-5 ">See All</button>}
            </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
