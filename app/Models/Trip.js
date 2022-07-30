import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"





export class Trip{

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.note = data.note || ''
  }





  get Template() {
    return /*html*/ `
                <section class="mt-2 mx-md-5 accordion" id="accordionExample">
              <div class="accordion-item" >

                

                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}"
                    aria-expanded="true" aria-controls="collapse${this.id}">
                    ${this.title}
                  </button>
                </h2>


                <div id="collapse${this.id}" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="row border-bottom border-dark border-3 mb-3">
                      <div class="col-6 col-md-1">

                      </div>
                      <div class="col-6 col-md-11 text-end">

                      </div>
                      <div class="col-4 col-md-1">
                        <p class="">Type</p>
                      </div>
                      <div class="col-4 col-md-2">
                        <p class="">Name</p>
                      </div>
                      <div class="col-4 col-md-2">
                        <p class="">Confirmation</p>
                      </div>
                      <div class="col-4 col-md-3">
                        <p class="">Address</p>
                      </div>
                      <div class="col-4 col-md-2">
                        <p class="">Date</p>
                      </div>
                      <div class="col-4 col-md-2">
                        <p class="">Cost</p>
                      </div>
                    </div>


                    ${this.Reservations}

                    <div class="text-end">Total Cost: $${this.TotalCost}</div>


                    <form onsubmit="app.reservationsController.createReservation('${this.id}')">
                      <div class="row border-top border-dark border-3 pt-1 align-items-center">
                        <div class="col-4 col-md-1">
                          <select required class="form-control bg-white py-0 text-secondary" type="text" name="type" id="type">
                            <option value="">Type</option>
                            <option value="Plane">Plane</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Car">Car</option>
                          </select>
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded" type="text" placeholder="Name..." name="name" id="name">
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded" required type="text" placeholder=" Confirmation #" name="confirmation" id="confirmation">
                        </div>
                        <div class="col-4 col-md-3">
                          <input required class="rounded" required type="text" placeholder="Address..." name="address" id="address">
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded px-1" required type="date" name="date" id="date">
                        </div>
                        <div class="col-2 col-md-1">
                          <input required class="rounded" required type="Number" placeholder="Cost" name="cost" id="cost">
                        </div>
                        <div class="col-2 col-md-1">
                          <button type="submit" class="btn m-1 selectable"> <i class="mdi mdi-plus"></i> </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="row">
                    <div class="col-8 col-md-10">
                      <textarea rows="2" placeholder="Notes..." class="form-control ms-5 mb-3 bg-white" onblur="app.tripsController. editNote('${this.id}')">${this.note}</textarea>
                    </div>
                    <div class="col-1 offset-1">
                      <button class="btn text-danger text-center m-0 p-0 selectable" title="Delete Trip" onclick="app.tripsController.deleteTrip('${this.id}')"> <i class="mdi mdi-delete-forever fs-1 "></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>




    `
  }






  get Reservations() {
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)

    // @ts-ignore
    let sortedRes = reservations.sort((a, b) => a.date - b.date)

    sortedRes.forEach(r => template += r.Template)
    
        if(template){
      return template
    } else {
      return '<h5>Please add a reservation to start planning your trip.</h5>'
    }
  }

  get TotalCost(){
    let total = 0
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    reservations.forEach(reservation => total += reservation.cost)
    return total
  }

}