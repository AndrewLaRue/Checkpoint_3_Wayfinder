import { unitsService } from "../Services/UnitsService.js";
import { Pop } from "../Utils/Pop.js";



export class UnitController {

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
      profile: form.profile.value,
      // @ts-ignore
      equipment: form.equipment.value,
      // @ts-ignore
      magicItems: form.magicItems.value,
      // @ts-ignore
      specialRules: form.specialRules.value,
      // @ts-ignore
      magic: form.magic.value,
      // @ts-ignore
      options: form.options.value,
      // @ts-ignore
      movement: form.movement.value,
      // @ts-ignore
      weaponSkill: form.weaponSkill.value,
      // @ts-ignore
      ballisticSkill: form.ballisticSkill.value,
      // @ts-ignore
      strength: form.strength.value,
      // @ts-ignore
      toughness: form.toughness.value,
      // @ts-ignore
      wounds: form.wounds.value,
      // @ts-ignore
      initiative: form.initiative.value,
      // @ts-ignore
      attacks: form.attacks.value,
      // @ts-ignore
      leadership: form.leadership.value,
      // @ts-ignore
      count: form.count.value,
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