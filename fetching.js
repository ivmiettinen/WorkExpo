function createNode(element) {
  return document.createElement(element); //Create the type of element you pass in the parametrs
}

function append(parent, el) {
  return parent.appendChild(el); //Append the second parameter(element) to the first one
}

const proxyURL = 'http://localhost:8080/';
//AWS beanstalk:
//const proxyURL = 'http://awrest-env.sze2kbkguc.us-east-2.elasticbeanstalk.com/';
const ul = document.getElementById('workplaces');
const url = 'http://api.academicwork.net/api/adverts?country=fi';

fetch(proxyURL + url)
  .then(resp => resp.json()) //Transform the data into json
  .then(function(data) {
    //Here you get the data to modify as you please

    let workplaces = data; // Get the results

    function WorkplacesInUusimaa() {
      const OnlyUusimaa1 = workplaces.filter(
        workplaces =>
          workplaces.Location === 'Espoo' ||
          workplaces.Location === 'Helsinki' ||
          workplaces.Location === 'Helsinki' ||
          workplaces.Location === 'Vantaa' ||
          workplaces.Location === 'Hanko' ||
          workplaces.Location === 'Hyvinkää' ||
          workplaces.Location === 'Inkoo' ||
          workplaces.Location === 'Järvenpää' ||
          workplaces.Location === 'Kerava' ||
          workplaces.Location === 'Kirkkonummi' ||
          workplaces.Location === 'Lohja' ||
          workplaces.Location === 'Loviisa' ||
          workplaces.Location === 'Nurmijärvi' ||
          workplaces.Location === 'Mäntsälä' ||
          workplaces.Location === 'Porvoo' ||
          workplaces.Location === 'Pääkaupunkiseutu' ||
          workplaces.Location === 'Raasepori' ||
          workplaces.Location === 'Riihimäki' ||
          workplaces.Location === 'Sipoo' ||
          workplaces.Location === 'Siuntio' ||
          workplaces.Location === 'Tuusula' ||
          workplaces.Location === 'Vantaa' ||
          workplaces.Location === 'Vihti'
      );
      console.log('OnlyUusimaa' + OnlyUusimaa1.length);
      return OnlyUusimaa1.length;
    }

    document.getElementById('Information').innerHTML =
      'Meillä on Uudellamaalla avoinna ' +
      '<br>' +
      '<span class=bigger>' +
      WorkplacesInUusimaa() +
      '</span>' +
      ' työpaikkaa.';

    function filterByLocationAndImg(workplaces) {
      //Kaikki kaupungit uudelta maalta:
      const OnlyUusimaa1 =
        workplaces.Location === 'Espoo' ||
        workplaces.Location === 'Helsinki' ||
        workplaces.Location === 'Helsinki' ||
        workplaces.Location === 'Vantaa' ||
        workplaces.Location === 'Hanko' ||
        workplaces.Location === 'Hyvinkää' ||
        workplaces.Location === 'Inkoo' ||
        workplaces.Location === 'Järvenpää' ||
        workplaces.Location === 'Kerava' ||
        workplaces.Location === 'Kirkkonummi' ||
        workplaces.Location === 'Lohja' ||
        workplaces.Location === 'Loviisa' ||
        workplaces.Location === 'Nurmijärvi' ||
        workplaces.Location === 'Mäntsälä' ||
        workplaces.Location === 'Porvoo' ||
        workplaces.Location === 'Pääkaupunkiseutu' ||
        workplaces.Location === 'Raasepori' ||
        workplaces.Location === 'Riihimäki' ||
        workplaces.Location === 'Sipoo' ||
        workplaces.Location === 'Siuntio' ||
        workplaces.Location === 'Tuusula' ||
        workplaces.Location === 'Vantaa' ||
        workplaces.Location === 'Vihti';

      //Kaikki kuvalliset työpaikkailmoitukset Uudeltamaalta:
      if (workplaces.LogoAbsoluteUrl !== '') {
        if (OnlyUusimaa1) {
          //   console.log('Uusimaan kohteet: ' + workplaces.Location);
          return workplaces;
        } else {
          //   console.log('ylimääräisiä kaupunkeja: ' + workplaces.Location);
        }
      }
    }

    const OnlyUusimaa = workplaces.filter(filterByLocationAndImg);

    var MappingThrough = OnlyUusimaa.map(function(workplace) {
      //Map throug the results and for each run the code below

      let li = createNode('li'), // Create the elements we need
        img = createNode('img'),
        span = createNode('span');
      div = createNode('div');

      span.innerHTML = `<img src="${workplace.LogoAbsoluteUrl}" > 
          Nimike: ${workplace.Title}: <br><br>`; //Make the HTML of our span to be the first and last name of our author

      return workplace;
    });

    MappingThrough.forEach(function(workplace) {
      $(
        '<div class="item">' +
          '<div class="logo"><img src="' +
          workplace.LogoAbsoluteUrl +
          '"style="max-height:210px;min-height:160px;max-width:500px"> ' +
          '<br>' +
          '<b>' +
          '</div>' +
          '<div class="nimike">' +
          workplace.Title +
          '</div>' +
          '<div class="kaupunki">' +
          workplace.Location +
          '</div>' +
          '<br>' +
          '</b>' +
          '</div>'
      ).appendTo('.carousel-inner');
    });
  })
  .catch(function(error) {
    //catch errors
    console.log(error);
  });
