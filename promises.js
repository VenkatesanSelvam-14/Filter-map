async function showData(){
    const data=  fetch("https://dummyjson.com/products");
          const api=  data.json();
      //   console.log(api.products);
          for(let i=0;i<api.products.length;i++){
            const para= document.createElement("img");
            let obj=api.products[i];
            
            for(keys in obj)
            {

              if(keys ==="images")
              {
               for(let j=0;j<api.products.images;j++)
               {
                  mying= document.getElementById("mydiv");
                  img.src=obj[keys[j]];
                  document.getElementById("body").appendChild(para);
                  mying.innerHTML="image element added"
               }
               
              }
            }
          }
    
}

showData()

