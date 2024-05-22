import React from "react";
import gym_lists from "../gym_lists";
function Listing_card(props){
    return <div className="gym_cards">
        <div className="name_label">
            <h3>{gym_lists[0].name}</h3>
            <p className="location_gym">{"📍: "+gym_lists[0].location}</p>
            <p className="ph_gym">{"📞: "+gym_lists[0].ph}</p>
        </div>
        <img src={props.img} alt="" />
    </div>
}

export default Listing_card;