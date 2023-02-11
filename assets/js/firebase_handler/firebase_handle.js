var database = firebase.database();
var usersCollection = database.ref('/users');


const config = {
    type: 'line',
    data: {
        labels: ["Feb 10","Feb 11","Feb 12","Feb 13","Feb 14"],
        datasets: [{
            label: 'Carbon Emission',
            backgroundColor: '#FFF275',
            borderColor: '#FFF275',
            data: [12,35,23,20,28],
            tension: 0.1
        }]
    },
    options: {
        plugins: {  // 'legend' now within object 'plugins {}'
            legend: {
              labels: {
                color: "#FFF",
                font : {
                    size : 18,
                    family : "Roboto"
                }
                  
              }
            }
        },
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 40,
                ticks: {
                    stepSize: 5,
                    color : "#FFF275"
                }
            },
            x: {
                ticks : {
                    color : "#FFF275"
                }
            }
        },
        layout: {
            height: 200,
            padding: 5
        }
    }
};
new Chart(document.getElementById("myChart"),config);



chrome.storage.local.get("userID", async function(items){

    
    var userID = items.userID[0];

    await usersCollection.child(userID).once('value').then(snapshot => {
        const result = snapshot.val();
        console.log(result);

        const date = Object.keys(result);
        console.log("date is ",date[0]);

        // const date = 
    })

})
