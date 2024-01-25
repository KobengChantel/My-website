var dreamCar = {    
    make: "Jaguar",    
    model: "65v",    
    color: "Purple",    
    year: 2023,    
    bodyStyle: "Luxury Car",    
    price: 5500 ,
};


document.getElementById("pricetag"). innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color
document.getElementById("body").innerHTML = dreamCar.make + " " + 
dreamCar.model;

alert("The type of dreamCar is:" + dreamCar);