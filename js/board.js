document.addEventListener('DOMContentLoaded',()=>{

    const mapDiv = document.getElementById('map');



    const map = new google.maps.Map(mapDiv, mapOptions);
    return map;
})