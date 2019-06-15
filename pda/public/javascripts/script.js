function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation);
    } else {
        alert('Failed retrieving location');
    }
}

function setLocation(position) {
    console.log(position);
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
}
