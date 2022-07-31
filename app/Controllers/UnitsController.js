import { unitsService } from "../Services/UnitsService.js";
import { Pop } from "../Utils/Pop.js";



export class UnitController{

  constructor() {
    // console.log('units controller');
    // this.test()
  }


    createUnit(campaignId) {
    // @ts-ignore
    window.event.preventDefault()
    
      // @ts-ignore
      let form = window.event.target

      let newUnit = {
        // @ts-ignore
        type: form.type.value,
        // @ts-ignore
        name: form.name.value,
        // @ts-ignore
        confirmation: form.confirmation.value,
        // @ts-ignore
        address: form.address.value,
        // @ts-ignore
        date: form.date.value,
        // @ts-ignore
        cost: parseInt(form.cost.value),
        campaignId: campaignId
      }
      // console.log('new res', newUnit);

      unitsService.createUnit(newUnit)
      // @ts-ignore
      form.reset()
  }


 async deleteUnit(id) {
    if (await Pop.confirm()) {
      unitsService.deleteUnit(id)
    }
  }

  // test() {
  //   unitsService._test()
  // }
}