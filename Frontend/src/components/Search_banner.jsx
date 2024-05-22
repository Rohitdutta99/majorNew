import React from "react";

function Search_Banner(){
    return <div className="search_banner_div">
        <img src="src/images/search_banner_main.png" alt="" />
        <div className="form_div">
        <form action="./locate">
            <input type="text" placeholder="Look for nearby Gym"/>
            <button type="submit">Search</button>
        </form>
        </div>
            <form action="./Location_display">
                <button id="auto-locate-btn" type="submit">Auto Locate</button>
            </form>
        </div>
}

export default Search_Banner;