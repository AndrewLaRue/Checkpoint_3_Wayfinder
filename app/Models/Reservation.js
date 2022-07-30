import { generateId } from "../Utils/generateId.js"





export class Reservation{

  constructor(data) {
    this.id = data.id || generateId()
    this.type = data.type
    this.name = data.name
    this.address = data.address
    this.date = data.date
    this.cost = data.cost
    this.tripId = data.tripId
  }


TODO


  get Template() {
    return `
                    <div id="reservation" class="row bg-secondary rounded align-items-center mb-3">
                      
                      <div class="col-1">
                        ${this.type}
                      </div>
                      <div class="col-2">
                        ${this.name}
                      </div>
                      <div class="col-2">
                        ${this.id}
                      </div>
                      <div class="col-3">
                        ${this.address}
                      </div>
                      <div class="col-2">
                        ${this.date}
                      </div>
                      <div class="col-1">
                        ${this.cost}
                      </div>
                      <div class="col-1 text-end">
                        <button class="btn text-danger text-center selectable" onclick="app.reservationsController.deleteReservation('${this.id}')"> <i class="mdi mdi-delete-forever"></i> </button>
                      </div>

                    </div>
    `
  }
}