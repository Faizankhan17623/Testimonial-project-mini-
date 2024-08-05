import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
function Card(props){
    let reviews = props.reviews;
    // console.log(reviews)
    return(
        <div>
            <div>
                <img src={reviews.image}></img>
                <div></div>
                <div className="name">
                    <p className="">{reviews.name}</p>
                    <p className="">{reviews.job}</p>
                </div>
                <div>
                    <RiDoubleQuotesL></RiDoubleQuotesL>
                </div>

                <div>
                    <p>{reviews.text}</p>
                </div>

                <div>
                    <RiDoubleQuotesR></RiDoubleQuotesR>
                </div>
            </div>
        </div>
    )
}
export default Card;