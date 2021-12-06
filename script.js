var btn = document.querySelector('.btn');
var circle = document.querySelector('.circle');
var slider = document.querySelector('#price-slider');
var priceUpdate = document.querySelectorAll('.price');
var pricing = slider.value;

slider.addEventListener('input',(e)=>{
    pricing = e.target.value;
    
    slashPrice(pricing);
    var pricingB = pricing * 2.6;
    slider.style.background = "linear-gradient(90deg, hsl(174, 86%, 45%) " + pricing+ "%, hsl(227, 19%, 81%) " + pricingB+ "%)";
    
});

            
function slashPriceBtn(){
    circle.classList.toggle('active');
    slashPrice(pricing);
}

function slashPrice(value){
    if(value==8){
        document.querySelector('.first').innerHTML = '10K pageviews';
    }else if(value == 12){
        document.querySelector('.first').innerHTML = '50K pageviews';
    }else if(value==16){
        document.querySelector('.first').innerHTML = '100K pageviews';
    }else if(value==24){
        document.querySelector('.first').innerHTML = '500 pageviews';
    }else if(value==36){
        document.querySelector('.first').innerHTML = '1M pageviews';
    }

    if(circle.classList.contains("active")){
        priceUpdate.forEach(price => {
            price.innerHTML = "$" + `${value-(value *(25/100))}` + "<span>/month</span>";
        });
    }else{
        priceUpdate.forEach(price => {
            price.innerHTML = "$" +`${value}` + "<span>/month</span>";
        });
    }
};


