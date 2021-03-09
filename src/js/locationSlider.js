const locationData = [
    {
      id: 1,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/SabarmatiThermalPlant.jpg/1280px-SabarmatiThermalPlant.jpg",
      name: "Ahmedabad",
      price: 423,
      offer: false,
      page: './destination/ahmedabad.html'

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1594146032116-80033545b0b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      name: "Mumbai",
      price: 390,
      offer: "true",
      page: './destination/mumbai.html'
 
    },
    {
      id: 3,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/High_street_-_150_ft_Ring_road_Rajkot.jpg/1920px-High_street_-_150_ft_Ring_road_Rajkot.jpg",
      name: "Rajkot",
      price: 415,
      offer: false,
      page: './destination/rajkot.html'
     
    },
    {
      id: 4,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/GOA_Colva_Beach_-_panoramio.jpg/1280px-GOA_Colva_Beach_-_panoramio.jpg",
      name: "Goa",
      price: 419,
      offer: false,
      page: './destination/goa.html'
    
    },
    {
      id: 5,
      pic:
        "https://static.toiimg.com/photo/71775173.cms",
      name: "Kochi",
      price: 379,
      offer: false,
      page: './features.html'
    
    },
    {
      id: 6,
      pic:
        "https://cdn.pixabay.com/photo/2018/08/21/10/00/architectural-3620857_1280.jpg",
      name: "Vadodara",
      price: 462,
      offer: false,
      page: './features.html'

    },
    {
      id: 7,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Patna_Montage_2014.jpg/800px-Patna_Montage_2014.jpg",
      name: "Patna",
      price: 463,
      offer: false,
      page: './features.html'

    },
    {
      id: 8,
      pic:
        "https://images.unsplash.com/photo-1470075446540-4391a96ec621?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      name: "Hyderabad",
      price: 371 ,
      offer: true,
      page: './features.html'

    },

    
  ];





const newLocations = (loc) => {
    const body = document.getElementById('newSlider')
    const col = document.createElement('div')
    const div = document.createElement('div')
    const div2 = document.createElement('div')

    const img = document.createElement('img')
    const div3 = document.createElement('div')
    const a = document.createElement('a')


    const div4 = document.createElement('div')
    const divType = document.createElement('div')
    const city = document.createElement('a')
    const countryName = document.createElement('span')

    const price = document.createElement('a')
    const icon = document.createElement('span')
    
    // styles
    col.setAttribute('class', 'col-md-4')
    div.setAttribute('class', 'imgBox')

    div2.setAttribute('class', 'slide-img view zoom')
    img.setAttribute('src', loc.pic)
    img.setAttribute('class', 'img-fluid ')
    // div3.setAttribute('class', "overlay")
    // a.setAttribute('class', 'offer-btn')

    // detail box
    div4.setAttribute('class', 'detail-box')
    divType.setAttribute('class', 'type')


    price.setAttribute('class', 'price')

    icon.setAttribute('class', 'locationIcon fal fa-map-marker-alt')
    city.setAttribute('href', loc.page)
    
    // adding to the html file
    // p.innerHTML = loc.desc
    city.innerHTML = loc.name
    price.innerHTML = "£" + loc.price
    a.innerHTML = "Special Offer"
    countryName.innerHTML = "India"
    
    
    
    // creating the card
    body.append(col)
    col.append(div)
    div.append(div2)
    div2.append(img)
    // div2.append(div3)
    // div3.append(a)


    div.append(div4)
    div4.append(divType)
    divType.append(city)
    divType.append(icon)
    divType.append(countryName)
    



    div4.append(price)







    
}

console.log("Slider script loaded..");

locationData.forEach(loc => newLocations(loc))



//   <div class="imgBox">
// <div class="slide-img">
//   <img src="./assets/images/test.jpg" alt="image" />
//   <div class="overlay">
//     <a href="#" class="offer-btn">Special Offer</a>
//   </div>
// </div>

// <div class="detail-box">
//   <div class="type">
//     <a href="#">Mumbai</a>
//     <span>India</span>
//   </div>

//   <a href="#" class="price">£23</a>
// </div>
// </div> 