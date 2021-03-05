const data = [
    {
      id: 1,
      pic:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/04/01/667228-ahmedabad-city.jpg",
      name: "Ahmedabad",
      ahref : '/destination/ahmedabad.html',
      price: 423,
      offer: false,

    },
    {
      id: 2,
      pic:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      name: "Mumbai",
      ahref : '/destination/mumbai.html',
      price: 390,
      offer: "true",

 
    },
    {
      id: 3,
      pic:
        "https://imgk.timesnownews.com/story/1551426666-GettyImages-154010161.jpg?tr=w-1200,h-900",
      name: "Rajkot",
      ahref : '/destination/rajkot.html',
      price: 415,
      offer: false,

     
    },
    {
      id: 4,
      pic:
        "https://static.toiimg.com/photo/78805433.cms",
      name: "Goa",
      ahref : '/destination/goa.html',
      price: 419,
      offer: false,

    
    },
    {
      id: 5,
      pic:
        "http://www.smartcitiesworld.net/AcuCustom/Sitename/DAM/022/Life-Republic-township-Pune_Planet_rt.jpg",
      name: "Pune",
      ahref : '/destination/pune.html',
      price: 420,
      offer: false,

    
    },
    {
      id: 6,
      pic:
        "https://breathedreamgo.com/wp-content/uploads/2019/04/SS-India-Gate-1200-px.jpg",
      name: "Delhi",
      ahref : '/destination/delhi.html',
      price: 304,
      offer: false,

    
    },
    {
      id: 7,
      pic:
        "https://www.tripsavvy.com/thmb/3uRtizyHdHLxxZEcknIyn2foERA=/2121x1414/filters:fill(auto,1)/palace-of-winds-in-jaipur--india-1079569482-9e23894f8fcd49d9ac71c18100fb6826.jpg",
      name: "Jaipur",
      ahref : '/destination/jaipur.html',
      price: 487,
      offer: false,

    
    },
    {
      id: 8,
      pic:
        "https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg",
      name: "Kolkata",
      ahref : '/destination/kolkata.html',
      price: 394,
      offer: false,

    
    },
    {
      id: 9,
      pic:
        "https://www.india-briefing.com/news/wp-content/uploads/2013/05/India-Briefing-Bangalore-economy-industries-infrastructure.jpg",
      name: "Bangalore",
      ahref : '/destination/bangalore.html',
      price: 335,
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
    const a = document.createElement('a')

    // styles
    col.setAttribute('class', 'col')
    div.setAttribute('class', 'card view zoom')
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('src', dest.pic)
    div2.setAttribute('class', 'mask rgba-stylish-light')
    div3.setAttribute('class', 'text-white text-center py-lg-5 py-0 my-0')
    span.setAttribute('class', 'text-offer badge badge-danger rounded-pill font-weight-bold')
    a.setAttribute('class', 'card-title font-weight-bold pt-2 text-white')
    p.setAttribute('class', 'card-text font-weight-bold pt-2')
    a.setAttribute('href', dest.ahref)




    
    // adding to the html file
    // p.innerHTML = dest.desc
    a.innerHTML = dest.name
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
    div4.append(a)
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