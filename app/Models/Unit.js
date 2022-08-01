import { generateId } from "../Utils/generateId.js"





export class Unit{

  constructor(data) {
    this.id = data.id || generateId()
    this.type = data.type
    this.name = data.name
    this.confirmation = data.confirmation
    this.address = data.address
    this.date = new Date(data.date)
    this.cost = data.cost
    this.campaignId = data.campaignId
  }


  get Template() {
    return `
                    <div class="row heavy units-mobile rounded border border-1 my-2 border-dark bg-dark">
                      <div class="col-4 col-md-1 scale-up" title="Type">
                        <p class="my-2 no-select">${this.type}</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up" title="Unit">
                        <p class="my-2 no-select">${this.name}</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up" title="Authorization">
                        <p class="my-2 no-select">${this.confirmation}</p>
                      </div>
                      <div class="col-4 col-md-3 scale-up" title="Location">
                        <p class="my-2 no-select">${this.address}</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up" title="Date">
                      <p class="my-2 no-select">${this.date.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })}</p>
                      </div>
                      <div class="col-2 col-md-1 scale-up" title="Unit Cost">
                        <p class="my-2 no-select">$${this.cost}</p>
                      </div>
                      <div class="col-1 text-center" title="Delete Unit">
                        <button class="btn text-danger selectable scale-up p-0 my-1 fs-5" onclick="app.unitsController.deleteUnit('${this.id}')"> <i class="mdi mdi-delete-forever"></i> </button>
                      </div>
                    </div>
    `
  }
}