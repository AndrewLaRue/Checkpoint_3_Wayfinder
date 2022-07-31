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
              <div class="accordion-item clear border-0" >

                

                <h1 class="accordion-header border-0" id="headingOne">
                  <button class="accordion-button border-0 clear" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}"
                    aria-expanded="true" aria-controls="collapse${this.id}">
                    <span class="fs-2 heavy-dark title-font">${this.title}</span> 
                  </button>
                </h1>


                <div id="collapse${this.id}" class="accordion-collapse collapse show clear-fog" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="row border-bottom border-secondary border-3 mb-3 heavy-dark fs-6">
                      <div class="col-4 col-md-1 scale-up">
                        <p class="">Type</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up">
                        <p class="">Unit</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up">
                        <p class="">Authorization</p>
                      </div>
                      <div class="col-4 col-md-3 scale-up">
                        <p class="">Location</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up">
                        <p class="">Date</p>
                      </div>
                      <div class="col-4 col-md-2 scale-up">
                        <p class="">Cost</p>
                      </div>
                    </div>


                    ${this.Reservations}

                    <div class="text-end text-light">Total Cost: $${this.TotalCost}</div>


                    <form onsubmit="app.reservationsController.createReservation('${this.id}')">
                      <div class="row border-top border-secondary border-3 pt-1 align-items-center">
                        <div class="col-4 col-md-1">
                          <select class="form-control border-0 py-0 text-light bg-dark text-secondary text-secondary selectable" name="type" id="type" title="Type" required>
                            <option disabled selected value="">Type</option>
                            <option value="🛣️">🛣️ Land</option>
                            <option value="🛩️">🛩️ Air</option>
                            <option value="🌊">🌊 Sea</option>
                          </select>
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded bg-dark text-secondary" type="text" placeholder="Unit" name="name" id="name" title="Unit">
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded bg-dark text-secondary" required type="text" placeholder="Authorization" name="confirmation" id="confirmation" title="Authorization">
                        </div>
                        <div class="col-4 col-md-3">
                          <input required class="rounded bg-dark text-secondary" type="text" placeholder="Location" name="address" id="address" title="Location">
                        </div>
                        <div class="col-4 col-md-2">
                          <input required class="rounded px-1 text-secondary bg-dark text-secondary" type="date" name="date" id="date" title="Date">
                        </div>
                        <div class="col-2 col-md-1">
                          <input required step="100" value="0" class="rounded bg-dark text-secondary" type="Number" placeholder="Cost" name="cost" id="cost" title="Cost">
                        </div>
                        <div class="col-2 col-md-1">
                          <button type="submit" class="btn m-1 selectable bg-dark text-secondary" title="Deploy Troops"> <i class="mdi mdi-plus"></i> </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="row">
                    <div class="col-8 col-md-10">
                      <textarea rows="2" placeholder="Notes..." class="form-control heavy ms-5 mb-3 bg-dark" onblur="app.tripsController. editNote('${this.id}')">${this.note}</textarea>
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
      return '<h5>Please add a unit to start planning your campaign.</h5>'
    }
  }

  get TotalCost(){
    let total = 0
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    reservations.forEach(reservation => total += reservation.cost)
    return total
  }

}