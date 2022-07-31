import { generateId } from "../Utils/generateId.js"





export class Reservation{

  constructor(data) {
    this.id = data.id || generateId()
    this.type = data.type
    this.name = data.name
    this.confirmation = data.confirmation
    this.address = data.address
    this.date = new Date(data.date)
    this.cost = data.cost
    this.tripId = data.tripId
  }


  get Template() {
    return `
                    <div id="reservation" class="row heavy-dark rounded align-items-center mb-2">
                      
                      <div class="col-4 col-md-1 py-1 fs-6 scale-up" title="Type">
                        ${this.type}
                      </div>
                      <div class="col-4 col-md-2 py-1 fs-6 scale-up" title="Unit">
                        ${this.name}
                      </div>
                      <div class="col-4 col-md-2 py-1 fs-6 scale-up" title="Authorization">
                        ${this.confirmation}
                      </div>
                      <div class="col-4 col-md-3 py-1 fs-6 scale-up" title="Location">
                        ${this.address}
                      </div>
                      <div class="col-4 col-md-2 py-1 fs-6 scale-up" title="Date">
                      ${this.date.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })}
                      </div>
                      <div class="col-2 col-md-1 py-1 fs-6 scale-up" title="Unit Cost">
                        $${this.cost}
                      </div>
                      <div class="col-1 col-md-1 text-end py-1" title="Delete Unit">
                        <button class="btn text-danger selectable p-0" onclick="app.reservationsController.deleteReservation('${this.id}')"> <i class="mdi mdi-delete-forever"></i> </button>
                      </div>
                    </div>
    `
  }
}