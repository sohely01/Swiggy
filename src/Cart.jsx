

import { useDispatch } from "react-redux";
import Header from "./Header/Header";
import { clearItem, removeItem } from "./Utils/cartSlice";

const Cart = ()=>{


    const dispatch = useDispatch(); 


    const handleRemoveItem =()=>{
                dispatch(removeItem(""))
    }



    const handleClearButton = ()=>{

        dispatch(clearItem(""))
             
    }





    return(

        <div>
            <Header/>
            <h1 style={{textAlign:'center', padding:'10px', fontWeight:'bold'}}>Cart</h1>

            <div className="" style={{textAlign:"center"}}>

                <button className="" style={{textAlign:'center', padding:'10px', fontWeight:'bold', backgroundColor:'orange', borderRadius:"10px"}} onClick={handleRemoveItem}>Remove Item</button>
                            <br />
                <button className="" style={{textAlign:'center', padding:'10px', fontWeight:'bold', backgroundColor:'orange', borderRadius:"10px", marginTop:'15px'}} onClick={handleClearButton}>Clear Item</button>


            </div>
        </div>
    )
}

export default Cart ;