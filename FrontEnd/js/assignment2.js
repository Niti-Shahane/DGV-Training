let places=[
    {
        id:1,
        name:"Australia",
        capital:"Canberra",
        imageURL:"https://i.natgeofe.com/k/b76526f3-bb84-489d-b229-56bcc08aa915/australia-sydney-opera-house.jpg?w=636&h=358"
    },
    {
        id:2,
        name:"Greece",
        capital:"Athens",
        imageURL:"https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop"
    },
    {
        id:3,
        name:"Satara",
        capital:"Wai",
        imageURL:"https://www.trawell.in/admin/images/upload/794934986Satara_Kaas_Main.jpg"
    }
]


function displayPlaces()
{

    places.forEach((place,i)=>{

        let placeCard=document.createElement("div");
        placeCard.classList.add('place-card');

        let placeImg=document.createElement("div");
        placeImg.classList.add("place-img");

        let placeImage=document.createElement("img");
        placeImage.src=place.imageURL;

        placeImg.append(placeImage);
        placeCard.append(placeImg);

        let details=document.createElement("div");
        details.classList.add("details");

        let title=document.createElement("h1");
        title.append(place.name);

        let capital=document.createElement("h3");
        capital.append(place.capital);

        let viewMore=document.createElement("button");
        viewMore.append("View More");

        details.append(title);
        details.append(capital);
        details.append(viewMore);

        placeCard.append(details);

        let placesContainer=document.getElementById("places");
        placesContainer.append(placeCard);

    })




}

displayPlaces();