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
      title: 'Western Offensive',
      note: '',
      collapsed: true,
      collapsed2: true

    }),
    new Campaign({
      id: 40,
      title: 'YellowStone',
      note: 'Way too many people here...',
      collapsed: true,
      collapsed2: true

    })
  ]
  
  
  /** @type {import('./Models/Unit').Unit[]} */
  units = [
    new Unit({
      id: 24370,
      type: '🛩️',
      name: 'Recon Drone',
      confirmation: '12jsu34we5',
      address: 'Columbia River',
      date: '05-01-2022',
      cost: 500,
      campaignId: 10

    }),
    new Unit({
      id: 277450,
      type: '🌊',
      name: 'Carrier Group',
      confirmation: '12q34vs567',
      address: 'Columbia River Mouth',
      date: '05-04-2022',
      cost: 4000,
      campaignId: 10

    }),
    new Unit({
      id: 22340,
      type: '🛣️',
      name: 'Battalion',
      confirmation: '3av87v45d67',
      address: 'North of Columbia River Mouth',
      date: '05-07-2022',
      cost: 250,
      campaignId: 10

    }),
    new Unit({
      id: 22343540,
      type: '🛩️',
      name: 'Medical Evac',
      confirmation: '3av87v45d67',
      address: 'Columbia River Mouth',
      date: '05-08-2022',
      cost: 350,
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
