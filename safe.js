<!DOCTYPE html>

<html lang="en-US">
  <head>
    <title>Academyn työpaikat</title>

    <!-- <script type="text/javascript" src="academyFetching.js"></script> -->
  </head>

  <body>
    <h1>Tyopaikat</h1>

    <h1 id="Workplaces"></h1>

    <ul id="workplaces"></ul>
  </body>

  <script>
    async function postData(
      url = 'http://api.academicwork.net/api/locations?country=fi',
      data = {}
    ) {
      // Default options are marked with *                  
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
      console.log(data);
    }
  </script>

  <script>
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

    const ul = document.getElementById('workplaces');
    const url = 'http://api.academicwork.net/api/adverts?country=fi';

    fetch(url)
      .then(resp => resp.json()) //Transform the data into json
      .then(function(data) {
        //Here you get the data to modify as you please
        console.log(data);

        let workplaces = data.ArrayOfAdvertItem; // Get the results
        return workplaces.map(function(author) {
          //Map throug the results and for each run the code below
          let li = createNode('li'), // Create the elements we need
            img = createNode('img'),
            span = createNode('span');

          img.src = author.picture.medium; // Add the source of the image to be the src or the img element
          span.innerHTML = `${author.name.first} ${author.name.last}`; //Make the HTML of our span to be the first and last name of our author
          append(li, img); //Append all our elements
          append(li, span);
          append(ul, li);
        });
      })
      .catch(function(error) {
        //errorien catchaus
        console.log(error);
      });
  </script>
</html>
