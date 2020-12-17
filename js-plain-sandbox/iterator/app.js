//Generate a number between 1 and 99 for the profile pictures
function generateNumber() {
  const number = (Math.random(10).toFixed(2)) * 100;
  return number;
}

//Numbers
const number1 = generateNumber();
const number2 = generateNumber();
const number3 = generateNumber();

console.log(number1, number2, number3);

//Hardcoded data for the purpose of the exercise; this could also come as live data from an API fetch
const data = [{
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: `https://randomuser.me/api/portraits/men/${number1}.jpg`
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    location: 'Miami FL',
    image: `https://randomuser.me/api/portraits/women/${number2}.jpg`
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingFor: 'female',
    location: 'Lynn MA',
    image: `https://randomuser.me/api/portraits/men/${number3}.jpg`
  }
];

const profiles = profileIterator(data);

//Call firts profile automatically
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.lookingFor}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `
  } else {
    //No more profiles
    window.location.reload();
  }


}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  };
}