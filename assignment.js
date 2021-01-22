function kilometerToMeter(x){

    var result;

   if(x<0)
   return console.log("Wrong Input");
    else{
    result=x*1000;
       
    return result;
    }

}

var x=10;

console.log(kilometerToMeter(x));

function budgetCalculator(x,y,z){

        var watchPrice,mobilePrice,laptopPrice,totalPrice;

        if(x<0||y<0||z<0)
            return console.log("wrong input");
        else
        {
        watchPrice=x*50;
        mobilePrice=y*100;
        laptopPrice=z*500;
        

        totalPrice=watchPrice+mobilePrice+laptopPrice;

        return totalPrice;
        }
    
}

var total=budgetCalculator(4,3,1);

console.log(total);


function hotelCost(x){

        if(x<0)
            return console.log("Days cannot be negative!Please insert positive value");
        else if(x<=10){

            var total =x*100;
            return total;
        }
        else if(x<=20){

            var firstTenDays=10*100;
            var remainingDays=x-10;
            var total=(remainingDays*80)+ firstTenDays;
            return total;

        }
        else {

           var firstTenDays=10*100;
            var secondDays=10*80;
            var remainingDays=x-20;
            total=firstTenDays+secondDays+(x-20)*50;
            return total;


        }



}

var days=26;

var cost=hotelCost(days);

console.log(cost);