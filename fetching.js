// fetch('http://api.academicwork.net/api/locations?country=fi')
//   .then(response => {
//     return response.json();
//   })
//   .then(myJson => {
//     console.log(myJson);
//   });

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

    // var MappingThrough1 = MappingThrough;

    // MappingThrough1(function(workplaces) {

    // })

    //Toimiva workplacen etsintä:

    // function NumberOfWorkplaces() {
    //   for (var i = 0; i < workplaces.length; i++) {
    //     if ((i = workplaces.length)) {
    //       console.log('Last number:' + i);
    //     }

    //     return i;
    //   }
    // }

    const filterByLocationAndImg = workplaces => {
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
        // console.log(
        //   'Tässä vain linkin sisältävät: ' + workplaces.LogoAbsoluteUrl
        // );

        if (OnlyUusimaa1) {
          console.log('Tässä: ' + workplaces.Location);
          return workplaces;
        } else {
          //   console.log('ylimääräisiä kaupunkeja: ' + workplaces.Location);
        }
      }
    };

    const OnlyUusimaa = workplaces.filter(filterByLocationAndImg);

    var MappingThrough = OnlyUusimaa.map(function(workplace) {
      //Map throug the results and for each run the code below

      let li = createNode('li'), // Create the elements we need
        img = createNode('img'),
        span = createNode('span');
      div = createNode('div');

      // for (i = 0; i < workplace.length; i++) {
      //   console.log('Workplace Title:' + '<br>' + workplace.Title);
      //   console.log(
      //     'Workplace Requirements:' + '<br>' + workplace.Requirements
      //   );
      // }

      span.innerHTML = `<img src="${workplace.LogoAbsoluteUrl}" style="width:200px;height:200px;"> 
          Nimike: ${workplace.Title}: <br><br>`; //Make the HTML of our span to be the first and last name of our author

      //Uutta, tallennetaan tiedot muuttujiin ja käytetään niitä myöhemmin
      //   const muuttuja1 = [
      //     `<img src="${workplace.LogoAbsoluteUrl}" style="width:100px;height:100px;">`
      //   ];

      //   const muuttuja2 = `Nimike: ${workplace.Title} <br><br>`;
      //   console.log(muuttuja1);
      //   console.log(muuttuja2);
      //   console.log(workplace.Title[i]);

      return workplace;
    });

    MappingThrough.forEach(function(workplace) {
      //   console.log(workplace.LogoAbsoluteUrl);

      //   document.getElementsByClassName('carousel-inner').innerHTML +=
      //     '<div class="item">' + workplace.Location + '</div>';

      //   console.log(index);
      //   console.log(workplace.Title);

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

      //Onko tarpeellinen: ?

      //   $(
      //     '<li data-target="#carousel" data-slide-to="' + index + '"></li>'
      //   ).appendTo('.carousel-indicators');

      //

      //   var divi = (
      //     '<div class="item"><img src=' +
      //     workplace +
      //     '></div>'
      //   ).appendTo('.carousel-inner');
      //   $(
      //     '<li data-target="#carousel" data-slide-to="' + index + '"></li>'
      //   ).appendTo('.carousel-indicators');
      //   //   console.log('AAAAAAAAAAAAAAA' + index);
    });

    //Työn alla:

    // $('#carousel').carousel();
    // $('.carousel-indicators > li')
    //   .first()
    //   .addClass('active');
    // $('.carousel-item')
    //   .first()
    //   .addClass('active');
  })
  .catch(function(error) {
    //errorien catchaus
    console.log(error);
  });

// ------------    SHOW CAROUSEL    -------------
// $('#carousel').carousel();
// $('.carousel-indicators > li')
//   .first()
//   .addClass('active');
// $('.carousel-item')
//   .first()
//   .addClass('active');

/*
    Kuvaus: ${workplace.LeadIn} <br> <br> Tyoaika: ${workplace.WorkExtent} <br><br>  <br><br>
                Vaatimukset: ${workplace.Requirements}<br><br>
                Sijainti: ${workplace.Location} <br><br>
      */
