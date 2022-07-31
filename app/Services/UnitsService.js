import { ProxyState } from "../AppState.js";
import { Unit } from "../Models/Unit.js";





class UnitsService {

  deleteUnit(id) {
    ProxyState.units = ProxyState.units.filter(r => r.id != id)
  }

    createUnit(newUnit) {
    ProxyState.units = [...ProxyState.units, new Unit(newUnit)]
  }

  // _test(){
  // console.log('units service');
// }
  
}







export const unitsService = new UnitsService()