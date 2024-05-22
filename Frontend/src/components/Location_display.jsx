import React from "react";

function LocationDisplay() {
    const handleGetLocation = () => {
        const status = document.querySelector(".status");
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            
            fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                status.textContent = data.city+", "+data.principalSubdivision;
            });
        }
        const error = () => {
            status.textContent = "Please grant location permission"
        }
        
        navigator.geolocation.getCurrentPosition(success, error);
    };
    
    return (
        <div className="location">
            <img src="src/images/location-pin.png" alt="" />
            <p className="status">Location</p>
            <button type="button" id="get-location-button" onClick={handleGetLocation}>
                Get Location
            </button>
        </div>
    );
}

export default LocationDisplay;
