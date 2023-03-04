import { generateId } from "../Utils/generateId.js"





export class Unit {

  constructor(data) {
    this.id = data.id || generateId()
    this.campaignId = data.campaignId
    this.name = data.name
    this.type = data.type
    this.profile = data.profile
    this.equipment = data.equipment
    this.magicItems = data.magicItems
    this.specialRules = data.specialRules
    this.magic = data.magic
    this.options = data.options
    this.movement = data.movement
    this.weaponSkill = data.weaponSkill
    this.ballisticSkill = data.ballisticSkill
    this.strength = data.strength
    this.toughness = data.toughness
    this.wounds = data.wounds
    this.initiative = data.initiative
    this.attacks = data.attacks
    this.leadership = data.leadership
    this.count = data.count
    this.cost = data.cost
  }


  get Template() {
    return `
                    <div class="row heavy units-mobile">
                      <div class="col-4 col-md-2" title="Name">
                        <p class="my-2 no-select"><span class="border-bottom border-3 text-grey">Name</span><br>${this.name}</p>
                      </div>
                      <div class="col-4 col-md-2" title="Profile">
                        <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Profile</span><br>${this.profile}</p>
                      </div>
                      <div class="col-4 col-md-2" title="Type">
                        <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Type</span><br>${this.type}</p>
                      </div>
                      <div class="col-6">
                        <div class="row justify-content-around">
                          <div class="col-1" title="Movement">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-1">M</span><br>${this.movement}</p>
                          </div>
                          <div class="col-1" title="Weapon Skill">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Ws</span><br>${this.weaponSkill}</p>
                          </div>
                          <div class="col-1" title="Ballistic Skill">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Bs</span><br>${this.ballisticSkill}</p>
                          </div>
                          <div class="col-1" title="Strength">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-1">S</span><br>${this.strength}</p>
                          </div>
                          <div class="col-1" title="Toughness">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-1">T</span><br>${this.toughness}</p>
                          </div>
                          <div class="col-1" title="Wounds">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-1">W</span><br>${this.wounds}</p>
                          </div>
                          <div class="col-1" title="Initiative">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-2">I</span><br>${this.initiative}</p>
                          </div>
                          <div class="col-1" title="Attacks">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey px-1">A</span><br>${this.attacks}</p>
                          </div>
                          <div class="col-1" title="Leadership">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Ld</span><br>${this.leadership}</p>
                          </div>
                          <div class="col-4 col-md-2" title="Unit Size">
                            <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Unit Size</span><br>${this.count}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                      <div class="row justify-content-around">
                        <div class="col-4 col-md-2" title="Equipment">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Equipment</span><br>${this.equipment}</p>
                        </div>
                        <div class="col-4 col-md-2" title="Magic Items">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Magic Items</span><br>${this.magicItems}</p>
                        </div>
                        <div class="col-4 col-md-2" title="Special Rules">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Special Rules</span><br>${this.specialRules}</p>
                        </div>
                        <div class="col-4 col-md-2" title="Magic">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Magic</span><br>${this.magic}</p>
                        </div>
                        <div class="col-4 col-md-2" title="Options">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Options</span><br>${this.options}</p>
                        </div>
                        <div class="col-4 col-md-2" title="Unit Cost">
                          <p class="my-2 no-select"><span class="border-bottom border-3 border-light text-grey">Cost</span><br>${this.cost}</p>
                        </div>
                      </div>
                      
                      <div class="col-12 text-end  border-bottom border-3 border-danger" title="Delete Unit">
                      <button class="btn text-danger selectable p-0 my-1 fs-5"
                        onclick="app.unitsController.deleteUnit('${this.id}')"> <i class="mdi mdi-delete-forever"></i> </button>
                      </div>

    `
  }
}