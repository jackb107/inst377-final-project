function goToAbout() {
    window.location.href = "AboutPage.html";
}

function goToAirports() {
    window.location.href = "InfoPage.html";
}

function goHome() {
    window.location.href = "HomePage.html";
}

async function loadAirport() {
    event.preventDefault();
    const userChoice = document.getElementById("search-input").value
    if (userChoice === "Newark Liberty International Airport") {
        const info = await fetch(`https://airportdb.io/api/v1/airport/KEWR?apiToken=09767c6e50f568644c128554816dc84b1e0eaa85cd99546e013f4cf2791f2ea4c2537dfe6e788a7af4f05ce6d14c521a`)
        .then(result=>result.json())
        document.getElementById("airportName").innerHTML = info.name;
        document.getElementById("airportCode").innerHTML = "Airport Code: " + info.ident;
        document.getElementById("airportWebsite").innerHTML = "Official Website: " + info.home_link;
        document.getElementById("slide1").src = "https://www.tripsavvy.com/thmb/W69PMGh81s_na6t0ZBMG_yUi-bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aerial-view-of-airport-583578513-5cee77dad0624f45a7d85b2b197489d3.jpg"
        document.getElementById("slide2").src = "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_340,q_60,w_580/v1/clients/newark/newark_airport_aerial_f9060faf-56a1-40c6-986c-961b6d12c506.jpg"
        document.getElementById("slide3").src = "https://static01.nyt.com/images/2025/05/12/multimedia/12trav-newark-service-flgw/12trav-newark-service-flgw-videoSixteenByNine3000.jpg"
    }
    if (userChoice === "John F. Kennedy International Airport") {
        const info = await fetch(`https://airportdb.io/api/v1/airport/KJFK?apiToken=09767c6e50f568644c128554816dc84b1e0eaa85cd99546e013f4cf2791f2ea4c2537dfe6e788a7af4f05ce6d14c521a`)
        .then(result=>result.json())
        document.getElementById("airportName").innerHTML = info.name;
        document.getElementById("airportCode").innerHTML = "Airport Code: " + info.ident;
        document.getElementById("airportWebsite").innerHTML = "Official Website: " + info.home_link;
        document.getElementById("slide1").src = "https://s28477.pcdn.co/wp-content/uploads/2018/01/JFK_1.jpg"
        document.getElementById("slide2").src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/JFK_Aerial_Nov_14_2018.jpg"
        document.getElementById("slide3").src = "https://www.nyhabitat.com/blog/wp-content/uploads/2019/01/getting-around-JFK-airport-transportation-guide-terminal-interior.jpg"
    }
    if (userChoice === "LaGuardia Airport") {
        const info = await fetch(`https://airportdb.io/api/v1/airport/KLGA?apiToken=09767c6e50f568644c128554816dc84b1e0eaa85cd99546e013f4cf2791f2ea4c2537dfe6e788a7af4f05ce6d14c521a`)
        .then(result=>result.json())
        document.getElementById("airportName").innerHTML = info.name;
        document.getElementById("airportCode").innerHTML = "Airport Code: " + info.ident;
         document.getElementById("airportWebsite").innerHTML = "Official Website: " + info.home_link;
        document.getElementById("slide1").src = "https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/800px-LaGuardia_Airport.jpg"
        document.getElementById("slide2").src = "https://www.usa.skanska.com/49d1a9/globalassets/externalcontent2/project/laguardia-airport-lga-terminal-b-redevelopment/035b3ec2-fe28-40b9-ae9a-9d87c491af33.1.jpg"
        document.getElementById("slide3").src = "https://archello.s3.eu-central-1.amazonaws.com/images/2020/12/13/supermass-studio-laguardia-airport-terminal-b-concourse-parks-parks-gardens-archello.1607883495.1628.jpg"
    }
    document.getElementById("airportInfo").style.display = "block";
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function createChart() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['New Jersey', 'New York'],
        datasets: [{
            label: '# of Airports',
            data: [1, 2],
            borderWidth: 1
        }]
        },
        options: {
        scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

async function addFavorite() {
    const airportName = document.getElementById("airportName").innerHTML;
    const airportCode = document.getElementById("airportCode").innerHTML;
    const airportWebsite = document.getElementById("airportWebsite").innerHTML;
    const newAirport = {
        airportName: airportName,
        airportCode: airportCode,
        airportWebsite: airportWebsite
    };
    const response = await fetch("/airport", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAirport),
    })
    if (response.ok) {
        console.log("Airport added successfully!");
        alert("Favorite airport added! Check the home page to see it at any time.");
    } else {
        console.error("Failed to add airport.");
    }
}

async function showFavorite() {
    const response = await fetch("/airports");
    const airports = await response.json();
    const airport = airports[0];
    const retrievedName = airport.airport_name;
    const retrievedCode = airport.airport_code;
    const retrievedWebsite = airport.airport_website;
    document.getElementById("favAirportName").innerHTML = retrievedName;
    document.getElementById("favAirportCode").innerHTML = retrievedCode;
    document.getElementById("favAirportWebsite").innerHTML = retrievedWebsite;
    document.getElementById("favAirportInfo").style.display = "block";
}

async function deleteFavorite() {
    alert("Your favorite airport has been deleted. Please refresh the page.");
    const response = await fetch("/airportdelete", {
        method: "DELETE"
    });
}

window.onload = function() {
    if (window.location.href.indexOf("AboutPage.html") > -1) {
        createChart();
    }
    if (window.location.href.indexOf("HomePage.html") > -1) {
        showFavorite();
    }
}