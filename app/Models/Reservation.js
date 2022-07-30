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


TODO


  get Template() {
    return `
                    <div id="reservation" class="row bg-secondary rounded align-items-center my-3">
                      
                      <div class="col-4 col-md-1 pt-2">
                        <p>${this.type}</p>
                      </div>
                      <div class="col-4 col-md-2 pt-2">
                        <p>${this.name}</p>
                      </div>
                      <div class="col-4 col-md-2 pt-2">
                        <p>${this.confirmation}</p>
                      </div>
                      <div class="col-4 col-md-3 pt-2">
                        <p>${this.address}</p>
                      </div>
                      <div class="col-4 col-md-2 pt-2">
                        <p>${this.date.toLocaleDateString('en-us', { timeZone: 'Europe/Helsinki' })}</p>
                      </div>
                      <div class="col-2 col-md-1 pt-2">
                        <p>$${this.cost}</p>
                      </div>
                      <div class="col-1 col-md-1 pt-2">
                        <button class="btn text-danger selectable" onclick="app.reservationsController.deleteReservation('${this.id}')"> <i class="mdi mdi-delete-forever"></i> </button>
                      </div>
                    </div>
    `
  }
}