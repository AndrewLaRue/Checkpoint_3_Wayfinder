import { ProxyState } from "../AppState.js";
import { Unit } from "../Models/Unit.js";
import { Campaign } from "../Models/Campaign.js";




export function saveState(){
  // console.log('saving');
  let data = {
    units : ProxyState.units,
    campaigns: ProxyState.campaigns
  }
  localStorage.setItem('WayFinder', JSON.stringify(data))

}

export function loadState(){
  // console.log('loading');
  
  let rawData = localStorage.getItem('WayFinder')
  if(rawData){
    let data = JSON.parse(rawData)
    ProxyState.campaigns = data.campaigns.map(t => new Campaign(t))
    ProxyState.units = data.units.map(r => new Unit(r))
  }
  


}