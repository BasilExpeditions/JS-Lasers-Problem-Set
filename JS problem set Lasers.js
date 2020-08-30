// PROBLEM 3
// Firing a laser has a 50% chance of hitting, reducing enemyHealth by 1 each time
// Use Math.random() to determine whether the laser was successful or not
// Continue firing lasers (subtract one from the lasers variable) until the enemyHealth is 0 or lasers is 0
// Each time, log how many lasers are left, and how much enemyHealth remains


let lasers = 10;
let enemyHealth = 5;

for(lasers; lasers >= 0; lasers--) {
  console.log(lasers);
  console.log('laser ammo: ' + lasers);
    
  if (Math.random() > 0.5) value = true;
  else {
        value = false; 
       }
  console.log('FIRING!')
  console.log(value);
  
  if (lasers != 0 && value === true) {
    enemyHealth = enemyHealth - 1;
    console.log('Hit! Enemy health is ' + enemyHealth);
  } else {
    console.log('lazer has missed, enemies health remains ' + enemyHealth)
  }
  if(enemyHealth === 0) {
    console.log('TARGET DESTROYED')
    break;
  }
  if (lasers === 0) {
    console.log('Out of Fuel, enemies health remains ' + enemyHealth )
    break;
  }
}