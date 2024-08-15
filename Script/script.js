
var rowNumber = 1, indexNumber = 0;
var eventId;
showEventCard();

function showEventCard() {
    for (i = indexNumber; i < Events.length; i++) {
        if (rowNumber <= 4) {

            eventId = Events[i].id;

            singleEventCard(eventId);

            rowNumber += 1;
            indexNumber = i;
        }
    }
    indexNumber += 1;
}


function viewMore() {
    showEventCard();
    rowNumber = 1;
}


function singleEventCard(eventId) {

    Events.map((item) => {

        if (item.id == eventId) { 
            let eventCardDiv = document.getElementById('eventCardDiv');

            let newDivCard = document.createElement('div');

            newDivCard.innerHTML = `
                <div class="event-card p-2 m-3">
                    <div class="p-2">
                        <img src="${item.thumbnail}" height="100px" width="100%" style="border-radius: 30px;">
                    </div>
                    <div class="p-2">
                        <h6 class="">${item.category}</h6>
                        <p class="">Sponsored : ${item.sponsors[0].name}</p>
                        <marquee behavior="" direction="">
                          <h5 class="text-center py-2">${item.eventName}</h5>
                        </marquee>
                        <div class="d-flex justify-content-between">
                            <p class="px-3">🗓 ${item.date.split('T')[0]}</p>
                            <p class="px-3">${item.location.city}</p>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="px-3 py-2 m-2">View Details</button>
                        </div>
                    </div>
                </div>
            `;

            eventCardDiv.appendChild(newDivCard);

        }

    })
}

caurosalItems()
function caurosalItems() {


    Events.sort((b, a) => new Date(b.date) - new Date(a.date));

    let caurosalDiv = document.getElementById('caurosalDiv');


    for (i = 0; i < 6; i++) {

        let caurosalSingleDiv = document.createElement('div');
        caurosalSingleDiv.className = 'item';
        caurosalSingleDiv.style.backgroundImage = `url(${Events[i].imgUrls[1]})`;
        caurosalSingleDiv.style.backgroundPosition = 'center';
        caurosalSingleDiv.style.backgroundSize = 'cover';

        caurosalSingleDiv.innerHTML = `<div>
                                <h3>Upcoming...</h3>
                                <h3>${Events[i].eventName}</h3>
                                <h6>${Events[i].date.split('T')[0]}</h6>
                                <h6>${Events[i].location.city}</h6>
                                <button>Details</button>
                            </div>`;

        caurosalDiv.appendChild(caurosalSingleDiv);

    }


}


