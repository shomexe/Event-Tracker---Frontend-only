console.log("Welcome to the community portal");
let ele = document.querySelector('.display')

function show() {
  ele.innerHTML = 'button clicked'
}

let ele2 = document.querySelector('.phone')

let ele3 = document.querySelector('.validate')

function validate() {
  if (ele2.value.length !== 10 && ele2.value.length !== 0) {
    ele3.innerHTML = 'number not valid'
    ele2.value = ''
  }
}

let ele4 = document.querySelector('.fee')

let ele5 = document.querySelector('.val')

function fee() {
  if (ele5.value === 'Rock') {
    ele4.innerHTML = 'Your fee is 300Rs.'
  } else if (ele5.value === 'Pop') {
    ele4.innerHTML = 'Yout fee is 200Rs.'
  } else if (ele5.value === 'Hiphop') {
    ele4.innerHTML = 'Yout fee is 350Rs.'
  }
}

function findNearbyEvents() {
  let output = document.getElementById('output')

  if (!navigator.geolocation) {
    output.textContent = 'Geolocation is not supported by your browser.'
    return
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    output.innerHTML = `
      <p><strong>Coordinates found:</strong></p>
      <p>Latitude: ${latitude}</p>
      <p>Longitude: ${longitude}</p>
      `
  })
}
