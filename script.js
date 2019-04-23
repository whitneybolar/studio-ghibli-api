// REF: https://ghibliapi.herokuapp.com/films

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://ghibliapi.herokuapp.com/films';

// Do stuff with returned data
let doStuff = function(data) {

   // How big is array?     
  //console.log(data.results); 
  console.log('OK')
 console.log( data.length );
  console.log( data[0]);
  //console.log( data.results[1].trackName);
  // console.log( data.results[2].trackName)
  // console.log( data.results[3].trackName);

 
  for ( i=0; i < data.length; i++ ) {
  
     const template = `<section> <h3>${data[i].title}</h3> <p> Release Date: ${data[i].release_date}</p> <p>Producer: ${data[i].producer}</p> <p>Director: ${data[i].director}</p> <p>${data[i].description}</p> </section> 
  `;  

    $('#app').append( template ); 

  } 
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
let showStuff = function(data) {
  
  console.log( data );  
 
}