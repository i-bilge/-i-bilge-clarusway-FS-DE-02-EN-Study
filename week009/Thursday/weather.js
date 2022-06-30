const form = $("form");
const input = $("input");
const msg = $(".msg");
const list = $(".cities");

localStorage.setItem("apikey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));

$(form).on("submit", e => {
    e.preventDefault();
    getWeather();
    $(input).val("");
});

const getWeather = async () => {
    let apikey = DecryptStringAES(localStorage.getItem("apikey"))

    let inputVal = $(input).val();

    let weatherType = "metric";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=${weatherType}&lang=en`;

    // Begin Ajax request:
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (response) {
            // console.log(response)
            const { main, name, sys, weather } = response;
            const cityListItems = $(list).find('.city');
            console.log("items: ", cityListItems);
            const cityListItemArray = Array.from(cityListItems);
            console.log("Array: ", cityListItemArray);

            if (cityListItemArray.length > 0) {
                const filtered = cityListItemArray.filter((card)=> $(card).find(".city-name span").text() == name);
                if(filtered.length > 0){
                    $(msg).text(`You already know the weather for ${name}, please search for a new city 😉`)
                    setTimeout(() => {
                        $(msg).text("")
                    }, 5000);
                    form.reset();
                    $(input).focus()
                    return;
                }
                
            }

            console.log(weather[0].icon);

            const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

            const cityCardLi = $(document.createElement("li"));
            cityCardLi.addClass("city");
            const cityCardHTML = `
                <h2 class="city-name" data-name="${name}, ${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                <figure>
                    <img class="city-icon" src="${iconUrl}">
                    <figcaption>${weather[0].description}</figcaption>
                </figure>
            `

            cityCardLi.html(cityCardHTML);
            $(list).append(cityCardLi);

            $(msg).innerText="";
            form.reset();
            $(input).focus();


        },
        beforeSend: function (request) {
            console.log("ajax send request before");
        },
        complete: () => {
            console.log("ajax send request finished");
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown); 
            console.log(XMLHttpRequest);
            $(msg).text(XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
            setTimeout(()=>{
              $(msg).text("");
            }, 5000);
            form.reset();
            $(input).focus();
      
            if (XMLHttpRequest.readyState == 4) {
      
              // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
            }
            else {
              // something weird is happening
            }
      
        }

    })
}