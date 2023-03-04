import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"





export class Campaign {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.note = data.note || ''
    this.collapsed = data.collapsed || false
    this.collapsed2 = data.collapsed2 || false
  }





  get Template() {
    return /*html*/ `
          <section class="container">
            <div class="row clear align-items-center mb-2">
              <div class="col-11">
                <button class="border border-dark border-3 rounded clear selectable scale-up" type="button"
                  data-bs-toggle="collapse" onclick="app.campaignsController.toggleCollapse('${this.id}')"
                  data-bs-target="#collapse-1-${this.id}">
                  <span class="fs-2 heavy-dark title-font">${this.title}</span>
                </button>
              </div>
              <div class="col-1 text-end">
                <button class="btn text-danger selectable scale-up p-0 m-0" title="Delete Campaign"
                  onclick="app.campaignsController.deleteCampaign('${this.id}')"> <i
                    class="mdi mdi-delete-forever fs-1 "></i></button>
              </div>
            </div>
          </section>
            
          <section class="container text-center clear-fog ${this.collapsed ? 'collapse' : ''}" id="collapse-1-${this.id}">
            <section class="row">
            
      <div class="col-12">
  <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add Units
  </button>
</div>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
              <form onsubmit="app.unitsController.createUnit('${this.id}')">
                <div class="row pt-1 align-items-center">
                <!--Name-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Name" name="name"   id="name" title="Name">
                  </div>
    
                <!--Profile-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Profile"  name="profile" id="profile" title="Profile">
                  </div>
    
                  <!--Type-->
                  <div class="col-4 col-md-2">
                    <select class="form-control border-0 text-center px-0 py-0 border-bottom border-2 border-dark clear heavy text-grey selectable  rounded-0"
                      name="type" id="type" title="Type" required>
                      <option disabled selected value="">Type</option>
                      <option title="Characters" value="Characters">Characters</option>
                      <option title="Infantry" value="Infantry">Infantry</option>
                      <option title="Monstrous Infantry" value="Monstrous Infantry">Monstrous Infantry</option>
                      <option title="Cavalry" value="Cavalry">Cavalry</option>
                      <option title="Monstrous Cavalry" value="Monstrous Cavalry">Monstrous Cavalry</option>
                      <option title="Swarm" value="Swarm">Swarm</option>
                      <option title="War Beast" value="War Beast">War Beast</option>
                      <option title="Monstrous Beast" value="Monstrous Beast">Monstrous Beast</option>
                      <option title="Monster" value="Monster">Monster</option>
                      <option title="Chariot" value="Chariot">Chariot</option>
                      <option title="War Machine" value="War Machine">War Machine</option>
                      <option title="Unique Unit" value="Unique Unit">Unique Unit</option>
                    </select>
                  </div>
    
                  <!--Equipment-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Equipment"  name="equipment" id="equipment" title="Equipment">
                  </div>
                  <!--Magic Items-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Magic Items"  name="magicItems" id="magicItems" title="Magic Items">
                  </div>
                  <!--Special Rules-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Special Rules"  name="specialRules" id="specialRules" title="Special Rules">
                  </div>
                  <!--Magic-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Magic" name="magic"   id="magic" title="Magic">
                  </div>
                  <!--Options-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Options"  name="options" id="options" title="Options">
                  </div>
                  <!--Movement-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Movement"   name="movement" id="movement" title="Movement">
                  </div>
                  <!--Weapon Skill-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Weapon Skill"   name="weaponSkill" id="weaponSkill" title="Weapon Skill">
                  </div>
                  <!--Ballistic Skill-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Ballistic Skill"  name="ballisticSkill" id="ballisticSkill" title="Ballistic Skill">
                  </div>
                  <!--Strength-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Strength"   name="strength" id="strength" title="Strength">
                  </div>
                  <!--Toughness-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Toughness"  name="toughness" id="toughness" title="Toughness">
                  </div>
                  <!--Wounds-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Wounds"   name="wounds" id="wounds" title="Wounds">
                  </div>
                  <!--Initiative-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Initiative"   name="initiative" id="initiative" title="Initiative">
                  </div>
                  <!--Attacks-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Attacks"  name="attacks" id="attacks" title="Attacks">
                  </div>
                  <!--Leadership-->
                  <div class="col-4 col-md-2">
                    <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text" placeholder="Leadership"   name="leadership" id="leadership" title="Leadership">
                  </div>
                  <!--Count-->
                  <div class="col-4 col-md-2">
                    <input required step="1" value="" class="border-bottom border-2 border-dark text-center clear heavy" type="Number"  placeholder="Count" name="count" id="count" title="Count">
                  </div>
                  <!--Cost-->
                  <div class="col-4 col-md-2">
                    <input required step="1" value="" class="border-bottom border-2 border-dark text-center clear heavy" type="Number"  placeholder="Points" name="cost" id="cost" title="Points">
                  </div>
                  <div class="col-4 col-md-2">
                    <button type="submit" class="btn mt-1 py-1 selectable text-center scale-up" title="Deploy Troops"> <i class="mdi mdi-radar fs-1   heavy-dark"></i> </button>
                  </div>
                </div>
              </form>
  </div>
</div>

            

            </section>

            ${this.Units}
            
            <div class="row clear">
              <button class="col-3 col-md-1 border-0 text-start scale-up clear" type="button" data-bs-toggle="collapse" onclick="app.campaignsController.toggleCollapse2('${this.id}')" data-bs-target="#collapse-2-${this.id}">
                <span class="heavy title-font fs-5 ">Notes</span>
              </button>
              <div class="col-9 col-md-11 text-end heavy title-font no-select fs-5">Total Points: ${this.TotalCost}</div>
            </div>
            
            
          </section>
            
          <section class="row ${this.collapsed2 ? 'collapse' : ''}" id="collapse-2-${this.id}">
            
            <div class=" col-10 offset-1">
              <textarea rows="1" placeholder="Notes..." class="form-control heavy bg-dark mobile-note desktop-note " onblur="app.campaignsController.editNote('${this.id}')">${this.note}</textarea>
            </div>
          </section>

    `
  }






  get Units() {
    let template = ''
    let units = ProxyState.units.filter(r => r.campaignId == this.id)

    // @ts-ignore
    let sortedRes = units.sort((a, b) => a.date - b.date)
    sortedRes.forEach(r => template += r.Template)

    if (template) {
      return template
    } else {
      return '<h5 class="heavy">Please add a unit to start building your army.</h5>'
    }
  }

  get TotalCost() {
    let total = 0
    let units = ProxyState.units.filter(r => r.campaignId == this.id)
    units.forEach(reservation => total += reservation.cost * reservation.count)
    return total
  }

}