let adjust=document.querySelector(".btn");
let container=document.querySelector(".main-container");


function makegrid(rows,columns){
  for(let i=0;i<rows;i++){
      let row=document.createElement("div");
      row.classList.add("rows");
    for(let j=0;j<columns;j++){
      let innersq=document.createElement("div");
      innersq.classList.add("columns");
      innersq.style=`width:${1000/columns}px;`;
      row.appendChild(innersq);
    }
    container.appendChild(row);
  }
  return container;
}
makegrid(16,16);
adjust.addEventListener("click",function(){


  container.innerHTML="";
  let nrows=(prompt("Enter number of rows"));
  let ncols=(prompt("Enter number of cols"));


  makegrid(nrows,ncols);
});

container.addEventListener("mouseover",function(e){
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);

  if(e.target.classList.contains("columns")){
    e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
  }
});

