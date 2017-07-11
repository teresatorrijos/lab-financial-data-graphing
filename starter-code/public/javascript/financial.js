$(document).ready( () => {

  /* Price data object */
  // class PriceIndex{
  //   constructor(index, currency, startDate, endDate){
  //     this.index = index;
  //     this.currency = currency;
  //     this.startDate = startDate;
  //     this.endDate = endDate;
  //   }
  // }

  /* add price to DOM */
  // const $prices = $("#prices");
  // const addPrice = (price) => {
  //
  //   const name = $('<span>').append(`#${pokemon.number} - ${pokemon.name}`);
  //   const pokm = $('<div>').addClass('pokemon').append(img).append(name);
  //   $pokemons.append(pokm);
  // };

  /* Return a promise to request a pokemon with an ID */
  const baseURL = "http://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05";
  function requestPricePromise(){
    return $.ajax({
      url: baseURL,
      dataType:'json',
    }).then(data => {
      console.log(data.bpi);
      //var p = new PriceIndex(data.index, data.currency);
      //return p;
    }).catch( e  => console.log(e));
  }

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  /* Request 9 pokemons */
  // let pricesPromises = [];
  // for(var i = p.startDate; i <= p.endDate; i++){
    // console.log(`Getting price `);
    // pricesPromises.push(requestPricePromise(i));
 // }
  // Promise.all(pricesPromises).then(prices => {
  //   console.log(prices);
  //   prices.forEach( p => p ? addPrice(p): console.log("Error on price"));
  // });
requestPricePromise();
});
