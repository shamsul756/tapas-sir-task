// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. Red color is for STOP and Green color is for GO.
 
let color= 'ReD';
if ( color.toLowerCase()  === 'red'){
    console.log('stop here');
}
else if(color.toLowerCase() === 'green'){
    console.log('it is time to go');
}
else{
    console.log('wait for a valid light');
}

