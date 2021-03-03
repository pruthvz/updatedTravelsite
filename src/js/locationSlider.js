const locationData = [
    {
      id: 1,
      pic:
        "./assets/images/test.jpg",
      name: "Ahmedabad",
      desc: "One of the largest city and former capital of Gujarat, Ahmedabad is also known as Amdavad. It is situated on the banks of Sabarmati river, mostly known for its tourist attractions. It is famous for its cotton textiles, street food places, diamond cutting and much more.",
      price: 423,
      offer: false,

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80",
      name: "Mumbai",
      desc: "Mumbai is the commercial capital of India. It is also known as the city that never sleeps. Mumbai is the perfect blend of culture, customs and lifestyles. Mumbai is India’s most cosmopolitan city, its financial powerhouse and the nerve center of India’s fashion industry.",
      price: 390,
      offer: "true",

 
    },
    {
      id: 3,
      pic:
        "https://images.unsplash.com/photo-1533656274249-01a343657cea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80",
      name: "Rajkot",
      desc: "Rajkot is the 35th-largest metropolitan area in India, with a population of more than 1.8 million as of 2018. Rajkot is the second-cleanest city of India.",
      price: 415,
      offer: false,

     
    },
    {
      id: 4,
      pic:
        "https://static.toiimg.com/photo/78805433.cms",
      name: "Goa",
      desc: "Goa -- Silver sands, sparkling blue waters, the sky mirroring the sea below, white churches resting against green paddy fields and coconut trees lining the coastal streets. ",
      price: 419,
      offer: false,

    
    },
    {
      id: 5,
      pic:
        "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
      name: "Germany",
      desc: "With an interesting and rich history narrated by the old-fashion and colorful architecture, castles, palaces, cathedrals and monuments themselves, its landscapes, mountains and forests, delicious food and beer, Germany remains one of the top destinations in the world for travelers.",
      price: 298,
      offer: false,

    
    },
    {
      id: 6,
      pic:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Portugal",
      desc: "An enchantingly diverse country filled with gorgeous Mediterranean beaches, rolling hills, dramatic mountain scenery and a myriad charming towns, Portugal is brimming with beauty, both in its natural and urban spaces.",
      price: 88,
      offer: false,



    },
    {
      id: 7,
      pic:
        "https://images.unsplash.com/photo-1470470558828-e00ad9dbbc13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "France",
      desc: "France is one of the world's leading tourist destinations. If you have all the time in the world, you may not need to plan your holiday in France, you can just wander along at your own leisurely pace, and it will be a wonderful and varied experience.",
      price: 320,
      offer: false,


    },
    {
      id: 8,
      pic:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "London",
      desc: "London Heathrow, Heathrow Airport in London is the UK's largest and busiest airport as well as being the busiest airport in Europe and the seventh busiest in the world based on passenger traffic.",
      price: 390 ,
      offer: true,
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