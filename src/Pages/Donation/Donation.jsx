import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const storageCardItems = JSON.parse(localStorage.getItem("donateCard"));
    if (storageCardItems) {
      setDonation(storageCardItems);
    } else {
      setNotFound("No Data Found");
    }
  }, []);

  console.log(donation)

  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <div>
            <div className="grid grid-cols-2 gap-3">
                {
                    donation?.map(card => <DonationCard key= {card.id} card={card}></DonationCard>)
                }
            </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
