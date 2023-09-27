import Card from "./Card";


const Cards = ({cards}) => {
    // console.log(cards)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;