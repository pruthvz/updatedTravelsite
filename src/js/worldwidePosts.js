const data = [
    {
      id: 1,
      pic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Beijing_skyline_from_northeast_4th_ring_road.jpg/1920px-Beijing_skyline_from_northeast_4th_ring_road.jpg",
      name: "Beijing",
      price: 444,
      offer: false,

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Cape Town",
      price: 449,
      offer: "true",

 
    },
    {
      id: 3,
      pic:
        "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Hong Kong",
      price: 380,
      offer: false,

     
    },
    {
      id: 4,
      pic:
        "https://images.unsplash.com/photo-1496116013258-67a0855f9f82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Manila",
      price: 449,
      offer: false,

    
    },
    {
      id: 5,
      pic:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Falexcapri%2Ffiles%2F2018%2F09%2FSingapore-1200x800.jpg",
      name: "Singapore",
      price: 430,
      offer: false,

    
    },
    {
      id: 6,
      pic:
        "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Atlanta",
      price: 726,
      offer: false,

    
    },
    {
      id: 7,
      pic:
        "https://images.unsplash.com/photo-1506551907304-60bb62ffc9b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      name: "Boston",
      price: 297,
      offer: false,

    
    },
    {
      id: 8,
      pic:
        "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      name: "Melbourne",
      price: 592,
      offer: false,

    
    },
    {
      id: 9,
      pic:
        "https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80",
      name: "New York",
      price: 306,
      offer: false,

    
    },
    {
        id: 10,
        pic:
          "https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        name: "Sydney",
        price: 664,
        offer: false,
  
      
      },
      {
        id: 11,
        pic:
          "https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        name: "Auckland",
        price: 746,
        offer: true,
  
      
      },
      {
        id: 12,
        pic:
          "https://images.unsplash.com/photo-1465414951857-102134ffaa57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
        name: "Dubai",
        price: 272,
        offer: true,
  
      
      },
      {
        id: 13,
        pic:
          "https://upload.wikimedia.org/wikipedia/commons/6/63/2014_Victoria_Island_Lagos_Nigeria_15006436297.jpg",
        name: "Lagos",
        price: 459,
        offer: false,
  
      
      },
      {
        id: 14,
        pic:
          "https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        name: "Miami",
        price: 310,
        offer: false,
  
      
      },
      {
        id: 15,
        pic:
          "https://images.unsplash.com/photo-1463797987952-208b34e8e887?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        name: "Orlando",
        price: 439,
        offer: false,
  
      
      },
      {
        id: 16,
        pic:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        name: "Toronto",
        price: 321,
        offer: false,
  
      
      },
      {
        id: 17,
        pic:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Chaophraya_River_%288767097465%29.jpg",
        name: "Bangkok",
        price: 402,
        offer: false,
  
      
      },
      {
        id: 18,
        pic:
          "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        name: "Los Angeles",
        price: 410,
        offer: false,
  
      
      },
      {
        id: 19,
        pic:
          "https://images.unsplash.com/photo-1562161092-01d53ec54edd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        name: "Perth",
        price: 643,
        offer: false,
  
      
      },
      {
        id: 20,
        pic:
          "https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        name: "Montreal",
        price: 325,
        offer: false,
  
      
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
    h2.setAttribute('class', 'card-title font-weight-bold pt-2 text-white')
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