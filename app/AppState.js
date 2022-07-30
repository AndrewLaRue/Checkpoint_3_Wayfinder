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
      notes: 'So fluffy it hurts.'

    }),
    new Trip({
      id: 40,
      title: 'YellowStone',
      notes: 'Way too many people here...'

    })
  ]
  
  
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      id: 24370,
      type: '🚙',
      name: 'Car Rental',
      address: '1234 Blunder Way',
      date: '05-16-1987',
      cost: 50,
      tripId: 10

    }),
    new Reservation({
      id: 277450,
      type: '✈️',
      name: 'Air travel',
      address: '7634 Airport Drive',
      date: '05-15-1987',
      cost: 400,
      tripId: 10

    }),
    new Reservation({
      id: 22340,
      type: '🏨',
      name: 'Lodging',
      address: '5730 Sleepy street',
      date: '05-17-1987',
      cost: 750,
      tripId: 10

    }),
    new Reservation({
      id: 30,
      type: '🎡',
      name: 'should not see',
      address: 'should not see',
      date: 'should not see',
      cost: 1000000000,
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
