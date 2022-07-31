import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"





export class Campaign{

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

<div class="container text-center clear-fog ${this.collapsed ? 'collapse' : ''}" id="collapse-1-${this.id}">

  <form onsubmit="app.unitsController.createUnit('${this.id}')">
    <div class="row pt-1 align-items-center">
      <div class="col-4 col-md-1">
        <select
          class="form-control border-0 text-center px-0 py-0 border-bottom border-2 border-dark clear heavy text-grey selectable rounded-0"
          name="type" id="type" title="Type" required>
          <option disabled selected value="">Type</option>
          <option title="Land" value="🛣️">🛣️</option>
          <option title="Air" value="🛩️">🛩️</option>
          <option title="Sea" value="🌊">🌊</option>
        </select>
      </div>
      <div class="col-4 col-md-2">
        <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text"
          placeholder="Unit" name="name" id="name" title="Unit">
      </div>
      <div class="col-4 col-md-2">
        <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text"
          placeholder="Authorization" maxlength="10" name="confirmation" id="confirmation" title="Authorization">
      </div>
      <div class="col-4 col-md-3">
        <input required class="border-bottom border-2 border-dark text-center clear heavy" type="text"
          placeholder="Location" name="address" id="address" title="Location">
      </div>
      <div class="col-4 col-md-2">
        <input required class="px-1 heavy text-grey border-bottom border-2 border-dark text-center clear" type="date"
          name="date" id="date" title="Date">
      </div>
      <div class="col-2 col-md-1 px-0">
        <input required step="100" value="" class="border-bottom border-2 border-dark text-center clear heavy"
          type="Number" placeholder="Cost" name="cost" id="cost" title="Cost">
      </div>
      <div class="col-2 col-md-1">
        <button type="submit" class="btn mt-1 py-1 selectable text-center scale-up" title="Deploy Troops"> <i
            class="mdi mdi-radar fs-1 heavy-dark"></i> </button>
      </div>
    </div>
  </form>

  ${this.Units}

  <div class="row clear">
    <button class="col-3 col-md-1 border-0 text-start scale-up clear" type="button" data-bs-toggle="collapse"
      onclick="app.campaignsController.toggleCollapse2('${this.id}')" data-bs-target="#collapse-2-${this.id}">
      <span class="heavy-dark title-font fs-5 ">Notes</span>
    </button>
    <div class="col-9 col-md-11 text-end heavy-dark title-font no-select fs-5">Total Cost: $${this.TotalCost}</div>
  </div>


</div>

<section class="row ${this.collapsed2 ? 'collapse' : ''}" id="collapse-2-${this.id}">

  <div class=" col-10 offset-1">
    <textarea rows="1" placeholder="Notes..." class="form-control heavy bg-dark mobile-note desktop-note "
      onblur="app.campaignsController.editNote('${this.id}')">${this.note}</textarea>
  </div>
</section>
</div>

    `
  }






  get Units() {
    let template = ''
    let units = ProxyState.units.filter(r => r.campaignId == this.id)

    // @ts-ignore
    let sortedRes = units.sort((a, b) => a.date - b.date)
    sortedRes.forEach(r => template += r.Template)
    
        if(template){
      return template
    } else {
      return '<h5 class="heavy">Please add a unit to start planning your campaign.</h5>'
    }
  }

  get TotalCost(){
    let total = 0
    let units = ProxyState.units.filter(r => r.campaignId == this.id)
    units.forEach(reservation => total += reservation.cost)
    return total
  }

}