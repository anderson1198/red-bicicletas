
export default class map {

    constructor() {
        this.token =  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXJzb25vamVkYSIsImEiOiJja2Y2MmRyM2UwMWhyMnhsYmN2d3A3ZTQwIn0.kGdONbfcnR8MNek3qQj4aw';
        this.map = new mapboxgl.Map({
            container: 'map',
            center: [-76.5205, 3.42158],
            zoom: 11,
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }
    

    addBci(latitud,longitud){
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXJzb25vamVkYSIsImEiOiJja2Y2MmRyM2UwMWhyMnhsYmN2d3A3ZTQwIn0.kGdONbfcnR8MNek3qQj4aw';

        var marker = new mapboxgl.Marker({
            color: "#FFFFFF",
            draggable: true
             }).setLngLat([`${longitud}`,`${latitud}`])
            .addTo(this.map);
            
            console.log(marker);
    }
}


