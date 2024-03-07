const arr=[{id:2 ,names:"prathakshanaa" , mark:100},{id:25 ,names:"dhananjeyan" , mark:95},
{id:5 ,names:"midhun" , mark:90},{id:25 ,names:"dheenadhayalan" , mark:80},
{id:30 ,names:"vignesh" , mark:87},{id:18 ,names:"varun" , mark:83},
{id:27 ,names:"hariharan" , mark:74},{id:17 ,names:"brindha" , mark:72},
{id:14 ,names:"venki" , mark:100},{id:14 ,names:"indhu" , mark:30},
{id:5 ,names:"Nishanth" , mark:50}];


var obj={id:14,mark:100};
var  TF=true;
 

 const search = (Arr,Obj) =>
{  
    if(!Array.isArray(Arr) || typeof Obj !== 'object')
    console.log('invalid');


    const searchedobject= Arr.filter((details) => {
    
        const check=hasObject(details,Obj);
       if(check)
       {
        return details;
       }  
          
    }).map(x => {
        return x;
    });

    if(searchedobject.length===0)
    return "student doesnot exists";
else{
    return searchedobject;
}

}


function  hasObject(parentObj, childObj){
    let keyLength = Object.keys(childObj).length;
    let match =0;
    for(keys in childObj){
        if(parentObj[keys] !== childObj[keys] )
        {
            return false;
            
        }
        else{
            match++;
        }

        if(match === keyLength)
        {
            return true;
        }
      
    }
    
 } ;
console.log(search(arr,obj));
