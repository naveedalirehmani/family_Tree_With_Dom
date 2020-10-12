  const MyDavidFamily = [
 {
   name: "John",
   children: ["Ali","MOhsin","Alex","Tajwar"]
},
 {
   name: "Alx",
   children: ["Ayaz","Faizan","Karem","Sajjad"]
},
 {
   name: "Cendrella",
   children: ["Michelle","Sarah","Shireen","Sajjad"]
}
];


  const h1 = document.createElement("h1");
  h1.innerHTML = "Mr David";
  h1.style.color = "black";
  h1.style.fontSize = "20px";
  h1.style.textAlign ="center";
  document.body.append(h1);

  const ul = document.createElement("ul");
  document.body.append(ul);

  MyDavidFamily.forEach(family => {
  let li = document.createElement("li");
  li.innerHTML = family.name;
  ul.appendChild(li);
  let inul = document.createElement("ul");
  li.appendChild(inul);
  for(i=0; i < 4; i++){
  let inli = document.createElement("li");
  inli.innerHTML = family.children[i];
  inul.appendChild(inli);
}
});