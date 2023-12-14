// reference: https://stackoverflow.com/questions/16349490/html-css-buttons-that-scroll-down-to-different-div-sections-on-a-webpage
// google places: AIzaSyDHIwquBQ8zHxOkb_XIoa8bdZwMERIP4qI
function scrollToSection() {
    document.querySelector("#down").scrollIntoView({ 
        behavior: 'smooth' 
    });
}
function scrollToSection() {
    document.querySelector("#down2").scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initMap();

    const clothesIcon = document.getElementById('clothes-icon');
    const locationIcon = document.getElementById('location-icon');

    clothesIcon.classList.add('move-right');
    locationIcon.classList.add('move-left');
});


// ----------------- autocomplete field --------------------------
function initMap() {
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        { types: ['establishment'], 
        componentRestrictions: { country: "us" } 
    });
    

    autocomplete.addListener('place_changed', searchNearbyPlaces);
}

document.getElementById('type').onchange = searchNearbyPlaces

// --------------- search nearby locations --------------------
function searchNearbyPlaces() {
    document.getElementById('places').innerHTML = ''
    // get the place details in Json
    var place = autocomplete.getPlace();
    console.log(place)

    // create a map centered at the autocompleted location 
    map = new google.maps.Map(document.getElementById('map'), {
        center: place.geometry.location,
        zoom: 15
    });

    // nearby search
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: place.geometry.location,
        radius: '1000',
        type: [document.getElementById('type').value],
        keyword: 'vintage secondhand shops thrift thrifting store'
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results.length)
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var storeContainer = document.getElementById("store-container");

    var storeDiv = document.createElement("div");
    storeDiv.className = 'store';

    // name
    var storeName = document.createElement("p");
    storeName.textContent = place.name;

    // distance
    var userLocation = autocomplete.getPlace().geometry.location;
    var placeLocation = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
    var distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, placeLocation);
    var distanceInKm = distance / 1000;

    var storeDistance = document.createElement("p");
    storeDistance.textContent =  distanceInKm.toFixed(2) + " km";


    // price level
    var storePrice = document.createElement("p");

    if (place.price_level !== undefined) {
        var priceLevelString = "$".repeat(place.price_level);
        storePrice.textContent = priceLevelString;
    } else {
        storePrice.textContent = "Price Level: Not listed";
    }

    //review score
    var storeRating = document.createElement('p');
    if (place.rating) {
        storeRating.textContent = 'Rating: (' + place.rating + ' / 5)';
    } else {
        storeRating.textContent = 'Rating: Not Available';
    }

    // image
    var storeImage = document.createElement("img");
    if (place.photos) {
        storeImage.src = place.photos[0].getUrl();
    } else {
        storeImage.src = "https://via.placeholder.com/150";
    }

    // like button 
    // var likeButton = document.createElement("img");
    // likeButton.src = "likebtn.png";
    // likeButton.className = 'like-button'; 
    // likeButton.alt = "Like";
    // likeButton.id = "searchLike";


    storeDiv.appendChild(storeImage);
    storeDiv.appendChild(storeName);
    storeDiv.appendChild(storeDistance); 
    storeDiv.appendChild(storePrice);
    storeDiv.appendChild(storeRating);
    // storeDiv.appendChild(likeButton);


    storeContainer.appendChild(storeDiv);
    storeContainer.appendChild(storeDiv);

}

