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

// function TyopaikatEriSivuille(item, index) {
//   var element = document.getElementsByClassName('carousel-inner');
//   element.classList.add('item');
// }

const proxyURL = 'http://localhost:8080/';
const ul = document.getElementById('workplaces');
const url = 'http://api.academicwork.net/api/adverts?country=fi';

//Still necessary?:
const workplaces = data => {
  if (workplace.Location === 'Espoo') {
    return workplace;
  }
};

fetch(proxyURL + url)
  .then(resp => resp.json()) //Transform the data into json
  .then(function(data) {
    //Here you get the data to modify as you please
    // console.log(data);

    let workplaces = data; // Get the results

    const filterByLocation = workplaces => {
      if (
        workplaces.Location === 'Espoo' ||
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
        workplaces.Location === 'Vihti' ||
        workplaces.LogoAbsoluteUrl === '(unknown)'
        // ||
        // workplace.location === 'Helsinki'
      ) {
        return workplaces;
      } else {
        console.log('Toimiikos?)');
      }
    };

    const OnlyUusimaa = workplaces.filter(filterByLocation);

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

      span.innerHTML = `<img src="${workplace.LogoAbsoluteUrl}" style="width:100px;height:100px;"> 
      Nimike: ${workplace.Title}: <br><br>`; //Make the HTML of our span to be the first and last name of our author

      //Muuttuja, josta olisi tarkoitus vapauttaa tietoja 3 kerrallaan sivustolle.

      //   document.getElementById('Workplaces1').append(li, img); //Append all our elements
      //   document.getElementById('Workplaces1').append(li, span);
      //   document.getElementById('Workplaces1').append(ul, li);
      //   document.getElementById('Workplaces1').append(ul, div);

      //Uutta, tallennetaan tiedot muuttujiin ja käytetään niitä myöhemmin
      const muuttuja1 = [
        `<img src="${workplace.LogoAbsoluteUrl}" style="width:100px;height:100px;">`
      ];

      const muuttuja2 = `Nimike: ${workplace.Title} <br><br>`;
      //   console.log(muuttuja1);
      //   console.log(muuttuja2);
      //   console.log(workplace.Title[i]);

      return workplace;
    });

    MappingThrough.forEach(function(workplace, index) {
      //   console.log(workplace.LogoAbsoluteUrl);

      //   document.getElementsByClassName('carousel-inner').innerHTML +=
      //     '<div class="item">' + workplace.Location + '</div>';

      console.log(index);
      console.log(workplace.Title);

      $(
        '<div class="item"><img src="' +
          workplace.LogoAbsoluteUrl +
          '" style="width:100px;height:100px;"> ' +
          workplace.Title +
          '</div>'
      ).appendTo('.carousel-inner');
      $(
        '<li data-target="#carousel" data-slide-to="' + index + '"></li>'
      ).appendTo('.carousel-indicators');

      //   $('<div class="item"><img src=' + workplace + '></div>');

      //   var newDiv = '<div class="item"><img src=' + workplace + '></div>';

      //   var newContent = document.createTextNode(workplace.LogoAbsoluteUrl);

      //   element.classList.add('.carousel-inner');

      //newDiv.appendChild(newContent);

      //   var currentDiv = document.getElementById('Workplaces1');

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
