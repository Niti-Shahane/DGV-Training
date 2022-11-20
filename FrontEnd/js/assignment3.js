let placevisit=[
    {
        id:1,
        name:"ITLAY",
        capital:"VENICE",
        imageURL:"https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2022/04/DEC273.my_venice.gettyimages_178512081_credit_istock_getty_images_resized-for-web.jpg"
    },
    {
        id:2,
        name:"JAPAN",
        capital:"TOKYO",
        imageURL:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1121589-dfe4-4f69-83b7-dcecba872b03/d582m3-ca426132-ff13-45ce-bd0b-cc8ebfdb5a5f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxMTIxNTg5LWRmZTQtNGY2OS04M2I3LWRjZWNiYTg3MmIwM1wvZDU4Mm0zLWNhNDI2MTMyLWZmMTMtNDVjZS1iZDBiLWNjOGViZmRiNWE1Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.HkMGGYbIZXM0yfsiTe-uGDn3NKBAyp13DPALg-gvMLA"
    },
    {
        id:3,
        name:"POLAND",
        capital:"WARSAW",
        imageURL:"https://annaeverywhere.com/wp-content/uploads/2017/09/DSC01923-1200x864.jpg"
    }
]

function explorePlaces()
{

    placevisit.forEach((place,i)=>{
        
        let ImgDiv=document.createElement("div");
        ImgDiv.classList.add("child1");

        let Image=document.createElement("img");
        Image.classList.add("place-bg");
        Image.src=place.imageURL;

        ImgDiv.append(Image);

        let details=document.createElement("div");
        details.classList.add("details");

        let country=document.createElement("h1");
        country.append(place.name);

        let capital=document.createElement("h3");
        capital.append(place.capital);

        let view=document.createElement("button");
        view.classList.add("viewDetails");

        details.append(country);
        details.append(capital);
        details.append(view);

        
        ImgDiv.append(details);

        let placesDiv=document.getElementById("placevisit");
         placesDiv.append(ImgDiv);



    })


}

explorePlaces();