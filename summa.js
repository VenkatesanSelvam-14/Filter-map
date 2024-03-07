const arr= 7 ; // createorder,proceedtopayment,showordersummary,updatewallet

const promise=  createorder(arr)
promise.then(function (val){
    proceedtopayment(val);
});
promise.then(function (val){
    showordersummary(val);
});
promise.then(function (val){
    updatewallet(val);
});
promise.then(function (val){
    console.log(val);
});
promise.catch(function (er){
    updatewallet(err.message);
});



function createorder(val)
{
    const pr=new Promise(function(resolve,reject){
        
if(!validate(val)){

    const err=new Error("Aaniye pudunga vendam")
    reject(err);
}
if(validate(val)){
    resolve(val)
}

    });

    return pr;

}



function validate(val){
    if(val<10)
        return true;
    else
        return false;
}

function proceedtopayment(val){
    const pr=new Promise(function(resolve,reject){
    if(val<5){
        resolve(val)
    }
    else{
        const err=new Error("Venamda venamda daii venamda..")
        reject(err)
    }
    });
       
}

function showordersummary(val){
    const pr=new Promise(function(resolve,reject){
        if(val>1){
            resolve(val)
        }
        else{
            const err=new Error("sonna kelu pinnadi prachanai aagirum");
            reject(err)
        }
        });
           
}

function updatewallet(val){
    const pr=new Promise(function(resolve,reject){
        if(val===2){
            resolve(val)
        }
        else{
            const err=new Error("varata-maame durr...");
            reject(err)
        }
        });
           
}