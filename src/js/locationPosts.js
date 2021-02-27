const data = [
    {
      id: 1,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Riverfront_Ahmedabad.jpg",
      name: "Ahmedabad",
      desc: "One of the largest city and former capital of Gujarat, Ahmedabad is also known as Amdavad. It is situated on the banks of Sabarmati river, mostly known for its tourist attractions. It is famous for its cotton textiles, street food places, diamond cutting and much more.",
      price: 423,
      offer: false,

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      name: "Mumbai",
      desc: "Mumbai is the commercial capital of India. It is also known as the city that never sleeps. Mumbai is the perfect blend of culture, customs and lifestyles. Mumbai is India’s most cosmopolitan city, its financial powerhouse and the nerve center of India’s fashion industry.",
      price: 390,
      offer: "true",

 
    },
    {
      id: 3,
      pic:
        "https://imgk.timesnownews.com/story/1551426666-GettyImages-154010161.jpg?tr=w-1200,h-900",
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





const allDestiniations = (dest) => {
    const body = document.getElementById('location')
    const col = document.createElement('div')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const span = document.createElement('span')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    // styles
    col.setAttribute('class', 'col')
    div.setAttribute('class', 'card view zoom')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', dest.pic)
    div2.setAttribute('class', 'mask rgba-stylish-light')
    div3.setAttribute('class', 'text-white text-center py-lg-5 py-0 my-0')
    span.setAttribute('class', 'text-offer badge badge-danger rounded-pill font-weight-bold')
    h2.setAttribute('class', 'card-title font-weight-bold pt-2')
    p.setAttribute('class', 'card-text font-weight-bold pt-2')




    
    // adding to the html file
    // p.innerHTML = dest.desc
    h2.innerHTML = dest.name
    p.innerHTML = "£" + dest.price
    span.innerHTML = dest.offer
    
    
    
    // creating the card
    body.append(col)
    col.append(div)
    div.append(img)
    div.append(div2)
    div2.append(div3)
    div3.append(div4)
    div4.append(span)
    div4.append(h2)
    div4.append(p)





    if (dest.offer == true){
      span.innerHTML = "Special Offer"
    }
    else if(dest.offer == "truefalse"){
      span.innerHTML = "50% OFF"
    }
    else{
      span.innerHTML = ""
    }
    
    
}

data.forEach(dest => allDestiniations(dest))



// <div class="col">
// <div class="card view zoom">
//   <img
//     src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
//     class="card-img-top"
//     alt="..."
//   />
//   <div class="mask rgba-stylish-light">
//     <div class="text-white text-center py-lg-5 py-0 my-0">
//       <div>
//         <!-- offer tag -->
//         <span
//           class="text-offer badge badge-danger rounded-pill font-weight-bold"
//         >
//           Special Offer
//         </span>
//         <!-- offer tag end -->
//         <h2 class="card-title font-weight-bold pt-2">
//           <strong>This is news title</strong>
//         </h2>
//         <p class="card-text font-weight-bold pt-2">
//           <strong>£200</strong>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>