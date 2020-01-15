function createNode(element) {
  return document.createElement(element); //Create the type of element you pass in the parametrs
}

function append(parent, el) {
  return parent.appendChild(el); //Append the second parameter(element) to the first one
}

const proxyURL = 'http://localhost:8080/';
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
      'Academic Workilla on Uudellamaalla avoinna ' +
      WorkplacesInUusimaa() +
      ' työpaikkaa.';

    function filterByLocationAndImg(workplaces) {
      //Kaikki kaupungit uudelta maalta:

      //Kaikki kuvalliset työpaikkailmoitukset Uudeltamaalta:
      if (workplaces.LogoAbsoluteUrl !== '') {
        if (WorkplacesInUusimaa) {
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

      span.innerHTML = `<img src="${workplace.LogoAbsoluteUrl}" style="width:200px;height:200px;"> 
          Nimike: ${workplace.Title}: <br><br>`; //Make the HTML of our span to be the first and last name of our author

      return workplace;
    });

    MappingThrough.forEach(function(workplace) {
      $(
        '<div class="item"><img src="' +
          workplace.LogoAbsoluteUrl +
          '"style="width:250px; block; margin-left: auto; margin-right: auto; border-radius:5px;"> ' +
          '<br>' +
          '<b>' +
          workplace.Title +
          '<br>' +
          workplace.Location +
          '<br>' +
          '</b>' +
          '</div>'
      ).appendTo('.carousel-inner');
    });
  })
  .catch(function(error) {
    //errorien catchaus
    console.log(error);
  });
