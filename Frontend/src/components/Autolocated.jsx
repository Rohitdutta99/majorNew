import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GymLocator() {
    const [userLocation, setUserLocation] = useState(null);
    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        // Function to fetch user's location using Google Geolocation API
        const fetchUserLocation = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                setUserLocation(data.location);
            } catch (error) {
                console.error("Error fetching user location:", error);
            }
        };

        // Fetch user's location and nearby gyms
        fetchUserLocation()
            .then((location) => {
                if (location) {
                    setUserLocation(location);
                }
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
            <Header />
            <div>
                <h2>Nearest Gyms</h2>
                {userLocation && (
                    <p>
                        Your current location: {userLocation.lat}, {userLocation.lng}
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default GymLocator;
