const Arr=[{id:2 ,names:"prathakshanaa" , mark:100},{id:25 ,names:"dhananjeyan" , mark:95},
{id:5 ,names:"midhun" , mark:90},{id:25 ,names:"dheenadhayalan" , mark:80},
{id:30 ,names:"vignesh" , mark:87},{id:18 ,names:"varun" , mark:83},
{id:27 ,names:"hariharan" , mark:74},{id:17 ,names:"brindha" , mark:72},
{id:14 ,names:"venki" , mark:100},{id:14 ,names:"indhu" , mark:30},
{id:5 ,names:"Nishanth" , mark:50}];


const keyname=['names'];
const Value= false ;


  
const result=(kEy,val) =>{
if(val===true)
{

    if(kEy[0]=='id' || kEy[0]== 'mark'){
    Arr.sort((a, b) => a[kEy[0]] - b[kEy[0]]);
    console.log(Arr);
    }
    
    if(kEy[0]=='names')
    {
    Arr.sort((a, b) => {
      const A = a[kEy[0]].toUpperCase();
      const B = b[kEy[0]].toUpperCase(); 
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
    
      return 0;
    });
    console.log(Arr);
    }
}





if(val===false)
{
    
  if(kEy[0]=='id' || kEy[0]== 'mark'){
    Arr.sort((a, b) => a[kEy[0]] - b[kEy[0]]);
    console.log(Arr.reverse());
    }
    
    
    if(kEy[0]=='names')
    {
    Arr.sort((a, b) => {
      const A = a[kEy[0]].toUpperCase();
      const B = b[kEy[0]].toUpperCase(); 
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
    
      return 0;
    });
    console.log(Arr.reverse());
    }



else{
    console.log("no");
}
}
}


result(keyname,Value);