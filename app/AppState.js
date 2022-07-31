import { Unit } from "./Models/Unit.js"
import { Campaign } from "./Models/Campaign.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
  
  /** @type {import('./Models/Campaign').Campaign[]} */
  campaigns = [
    new Campaign({
      id: 10,
      title: 'Bear World',
      note: 'So fluffy it hurts.'

    }),
    new Campaign({
      id: 40,
      title: 'YellowStone',
      note: 'Way too many people here...'

    })
  ]
  
  
  /** @type {import('./Models/Unit').Unit[]} */
  units = [
    new Unit({
      id: 24370,
      type: '🚙',
      name: 'Car Rental',
      confirmation: '12jsu34we567',
      address: '1234 Blunder Way',
      date: '05-16-2022',
      cost: 50,
      campaignId: 10

    }),
    new Unit({
      id: 277450,
      type: '✈️',
      name: 'Air travel',
      confirmation: '12q34vs567',
      address: '7634 Airport Drive',
      date: '05-15-2022',
      cost: 400,
      campaignId: 10

    }),
    new Unit({
      id: 22340,
      type: '🏨',
      name: 'Lodging',
      confirmation: '3av87v45d67',
      address: '5730 Sleepy street',
      date: '05-17-2022',
      cost: 750,
      campaignId: 10

    }),
    new Unit({
      id: 30,
      type: '🎡',
      name: 'should not see',
      confirmation: '127sd53k67',
      address: 'should not see',
      date: '05-27-2022',
      cost: 10000,
      campaignId: 40

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
