const links = document.querySelectorAll('.nav-link');
var ule = document.getElementById('test');


if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('spt');
      });
      link.classList.add('spt');
    });
  });
}


let shopping ={
  id1:{
   productname:"Twinkler Girl's Sandal",
   price:2290,
   details:'Gladiator sandal ',
   image:'img/id1.jpg'
  },
  id2:{
    productname:"Sprint Men's Canvas",
    price:2000,
    details:'This is a Sneaker',
    image:'img/id2.jpg'
   },
   
   id3:{
    productname:"Nino Rossi Mid Heel Sandel",
    price:1990,
    details:'Comfortable low mid heel',
    image:'img/id3.jpg'
   },
   
   id4:{
    productname:'Moochie womens tote bag',
    price:2690,
    details:'Chic tote bag ',
    image:'img/id4.jpeg'
   },
   
   id5:{
    productname:"Maverick Men's Belt",
    price:2400,
    details:'Genuine leather belt',
    image:'img/id5.jpeg'
   }, 
   
   id6:{
    productname:"Apex Men's Dress Shoe",
    price:2966,
    details:'Premium leather dress shoe',
    image:'img/id6.jpg'
   }
   
  }

let product = Object.values(shopping);

for(let i=0;i<product.length;i++){

var secsions= document.getElementById('sec');

var bar=document.createElement('div');
bar.className='menu-item';

var im=document.createElement('img');
im.src=product[i].image;
im.className='imgae';
bar.appendChild(im);

var para= document.createElement('p');
para.className='name';
para.innerHTML=product[i].productname;
bar.appendChild(para);

var pric= document.createElement('p');
pric.className='price';
pric.innerHTML="৳"+product[i].price;
bar.appendChild(pric);

var btn=document.createElement('button');
btn.className='btn';
btn.innerHTML='Add to cart';

btn.addEventListener('click', function() {
  cat(i);
});
bar.appendChild(btn);
secsions.appendChild(bar);

}

var totals=0;
function cat(idd){

  var create=document.getElementById("create");
  var pric= document.createElement('li');
  pric.innerHTML=product[idd].productname+"---"+product[idd].price;
  create.appendChild(pric);

  totals+=product[idd].price;
  var total=document.getElementById('total');
  total.innerHTML="Total: "+totals+" ৳" ;

  var aa=document.getElementById('a');
  var bb=document.getElementById('b');
  aa.className='ania';
  bb.className='ani';
}

function closesss(){
 var aa=document.getElementById('a');
 var bb=document.getElementById('b');

 aa.className='a';
 bb.className='b';
}



