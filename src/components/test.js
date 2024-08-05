import { FcNext ,FcPrevious} from "react-icons/fc";
import Card from './card'
import { useState } from "react";
function Testimonial(props){
    const [index,changestate] = useState(0)
    let reviews = props.reviews;

    function NextHandler(){
        console.log("clicked handler started")
        if(index +1 >=reviews.length){
            changestate(0)
        }else{
            changestate(index+1)
        }
        console.log("clicked handler exit")
    }

    function prevHandler(){
        console.log("clicked on the prev handler started")
        if(index -1 <0){
            changestate(reviews.length -1 )
        }else{
            changestate(index -1)
        }
        console.log("clicked in the prev handler ended")
    }

    function surpriseHandler(){
        console.log("clicking on the surpirs handler started")
        let Surprise = Math.floor(Math.random() * reviews.length);
        changestate(Surprise)
        console.log("clicking on the surpirse sdhandler ended")        
    }
    return(
        <div>
            <Card reviews={reviews[index]}></Card>
            <div>
                <button onClick={NextHandler}>
                    <FcNext></FcNext>
                </button>
            </div>
            <div>
                <button onClick={prevHandler}>
                    <FcPrevious></FcPrevious>
                </button>
            </div>
            <div>
                <button onClick={surpriseHandler}>Surprise me</button>
            </div>
        </div>
    )
}
export default Testimonial