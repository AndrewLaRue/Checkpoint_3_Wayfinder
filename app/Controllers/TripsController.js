import { tripsService } from "../Services/TripsService.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrips() {
  let template = ''
  let trips = ProxyState.trips

  trips.forEach(t => template += t.Template)

  // @ts-ignore
  document.getElementById('trip').innerHTML = template
}

export class TripsController{

  constructor() {
    
    // console.log('trips controller');
    // this.test()

    ProxyState.on('trips', _drawTrips)
    ProxyState.on('reservations', _drawTrips)
    ProxyState.on('trips', saveState)
    ProxyState.on('reservations', saveState)

      loadState()
    _drawTrips()
  }
  
  createTrip() {
    console.log('creating a trip');
    // @ts-ignore
    window.event.preventDefault()

    // @ts-ignore
    let form = window.event.target

    let newTrip = {
      // @ts-ignore
      title: form.newTrip.value
      
    }
    console.log(newTrip, ProxyState.trips);
    tripsService.createTrip(newTrip)
    // @ts-ignore
    form.reset()
  }

  async deleteTrip(id) {
    if (await Pop.confirm()) {
      tripsService.deleteTrip(id)
    }
  }


  test() {
    tripsService._test()
  }

  editNote(id) {
     // @ts-ignore
     let newText = window.event.target.value
    tripsService.editNote(id, newText)
    console.log(newText);
  }
  
}