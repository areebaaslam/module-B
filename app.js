var mobileBrands = {
    brand1:{
        name:'apple',
        country:'united state',
        founded:1976,
        popularModels:['iphone 12','iphone13','iphone14'],
        flagship:{
            model:'iphone 13 pro',
            relaseyear:2021
        }
    },
    brand2: {
        name:'samsung',
        country:'south koriya',
        founded:1938,
        popularModels:['glaxcy s21','glaxcy s22','glaxcy s20'],
        flagship:{
            model:'glaxcy s21 ultra',
            relaseyear:2021
        }
    },
    brand3: {
        name:'huwavi',
        country:'china',
        founded:1987,
        popularModels:['p48','mate 40','nova 71'],
        flagship:{
            model:'mate 40',
            relaseyear:2020
        }
    }
};
window.addEventListener('DOMContentLoaded',function(){
    var searchButton = document.querySelector('button');
    var searchInput = document.getElementById("input");
    var searchValueContainer = document.getElementById("printValue");

    searchButton.addEventListener('click',function(){
        var searchValue = searchInput.value;

        var mobileData = mobileData(searchValue);
        if(mobileData){
            renderMobieData(mobileData);
        }else{
            searchValueContainer.textContent = 'mobile data not found..';
        }
    });


function mobileData(searchValue){
    searchValue = searchValue.tolowerCase();
    for(var brand in mobileBrands){
        var brandData = mobileBrands[brand];
        var brandName = brandData.name.tolowerCase();

        if(brandData === searchValue){
            return brandData;
        }
    }
    return null;
}

function renderMobieData(mobileData){
    var output = "<h2>" + mobileData.name + "</h2>";
    output += "<p><strong>country:</strong>" + mobileData.country + "</p>";
    output += "<p><strong>founded:</strong>" + mobileData.founded + "</p>";
    output += "<p><strong>popular Models:</strong>" + mobileData.popularModels.join(",") + "</p>";
    output += "<p><strong>flagship Model:</strong>" + mobileData.flagship.model + "</p>";
    output += "<p><strong>relase year:</strong>" + mobileData.flagship .relaseyear + "</p>";
    
    searchValueContainer.innerHTML = output;
}

});   







