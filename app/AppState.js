import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
  
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      id: 10,
      title: 'Bear World',
      note: 'So fluffy it hurts.'

    }),
    new Trip({
      id: 40,
      title: 'YellowStone',
      note: 'Way too many people here...'

    })
  ]
  
  
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      id: 24370,
      type: '🚙',
      name: 'Car Rental',
      confirmation: '12jsu34we567',
      address: '1234 Blunder Way',
      date: '05-16-2022',
      cost: 50,
      tripId: 10

    }),
    new Reservation({
      id: 277450,
      type: '✈️',
      name: 'Air travel',
      confirmation: '12q34vs567',
      address: '7634 Airport Drive',
      date: '05-15-2022',
      cost: 400,
      tripId: 10

    }),
    new Reservation({
      id: 22340,
      type: '🏨',
      name: 'Lodging',
      confirmation: '3av87v45d67',
      address: '5730 Sleepy street',
      date: '05-17-2022',
      cost: 750,
      tripId: 10

    }),
    new Reservation({
      id: 30,
      type: '🎡',
      name: 'should not see',
      confirmation: '127sd53k67',
      address: 'should not see',
      date: '05-27-2022',
      cost: 10000,
      tripId: 40

    })
  ]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
