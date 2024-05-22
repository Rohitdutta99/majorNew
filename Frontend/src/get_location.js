const button = document.getElementById("get-location-button");

function gotlocation(position){
    alert(position);
}

function failedtogetlocation(){
    alert("There was some issue.");
}
button.addEventListener('click', async () => {
    const result = navigator.geolocation.getCurrentPosition(gotlocation, failedtogetlocation)
});