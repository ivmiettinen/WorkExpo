//AWS beanstalk URL:
//awrest-env.sze2kbkguc.us-east-2.elasticbeanstalk.com/

const proxyURL = 'http://localhost:8080/';
const ul = document.getElementById('workplaces');
const url = 'http://api.academicwork.net/api/adverts?country=fi';

fetch(proxyURL + url)
  .then(resp => resp.json())
  .then(function(data) {
    let workplaces = data;

    const UusimaaWorkplaces = function(workplaces) {
      return (
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
    };

    function UusimaaNumber() {
      const OnlyUusimaa1 = workplaces.filter(UusimaaWorkplaces);

      return OnlyUusimaa1.length;
    }

    document.getElementById('Information').innerHTML =
      'Meillä on Uudellamaalla avoinna ' +
      '<br>' +
      '<span class=bigger>' +
      UusimaaNumber() +
      '</span>' +
      ' työpaikkaa.';

    function filterByLocationAndImg(workplaces) {
      const OnlyUusimaa2 =
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
        if (OnlyUusimaa2) {
          // console.log('Uusimaan kohteet: ' + workplaces.Location);
          return workplaces;
        } else {
        }
      }
    }

    const OnlyUusimaa = workplaces.filter(filterByLocationAndImg);

    let MappingThrough = OnlyUusimaa.map(function(workplace) {
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
