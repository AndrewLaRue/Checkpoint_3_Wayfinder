import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"





export class Trip{

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.notes = data.notes
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
                      <div class="col-1">
                      <div type="button" class=" btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#modal${this.id}">Notes</div>
                      </div>
                      <div class="col-11 text-end">
                        <button class="btn text-danger text-center m-0 p-0 selectable" title="Delete Trip" onclick="app.tripsController.deleteTrip('${this.id}')"> <i class="mdi mdi-delete-forever fs-1 "></i> </button>
                      </div>
                      <div class="col-1">
                        <p class="mb-0">Type</p>
                      </div>
                      <div class="col-2">
                        <p class="mb-0">Name</p>
                      </div>
                      <div class="col-2">
                        <p class="mb-0">Confirmation #</p>
                      </div>
                      <div class="col-3">
                        <p class="mb-0">Address</p>
                      </div>
                      <div class="col-2">
                        <p class="mb-0">Date</p>
                      </div>
                      <div class="col-1">
                        <p class="mb-0">Cost</p>
                      </div>
                      <div class="col-1">
                        <p class="mb-0"> </p>
                      </div>
                    </div>


                    ${this.Reservations}


                    <div class="row border-top border-dark border-3 pt-1 align-items-center">
                      <div class="col-1">
                        <div class="btn-group">
                          <button class="border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            data-bs-auto-close="true" aria-expanded="false">
                            Type
                          </button>
                          <ul class="dropdown-menu">
                            <li class="dropdown-item selectable" Value="plane" title="Plane" href="#">✈️</li>
                            <li class="dropdown-item selectable" Value="lodging" title="Lodging" href="#">🏨</li>
                            <li class="dropdown-item selectable" Value="activity" title="Activity" href="#">🎡</li>
                            <li class="dropdown-item selectable" Value="vehicle" title="Vehicle" href="#">🚙</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-2">
                        <input type="text" placeholder="Name...">
                      </div>
                      <div class="col-2">
                        <input type="text" placeholder=" Confirmation #">
                      </div>
                      <div class="col-3">
                        <input type="text" placeholder="Address...">
                      </div>
                      <div class="col-2">
                        <input type="date" name="" id="">
                      </div>
                      <div class="col-1">
                        <input type="Number" placeholder="Cost">
                      </div>
                      <div class="col-1 text-center">
                        <button class="btn btn-outline-secondary" onclick="app.reservationsController.createReservation('${this.id}')"> <i class="mdi mdi-plus"></i> </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>





           <div class="modal fade" id="modal${this.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-body">

                   ${this.notes}

                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   <button type="button" class="btn btn-primary">Save changes</button>
                 </div>
               </div>
             </div>
           </div>
    `
  }






  get Reservations() {
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
    reservations.forEach(r => template += r.Template)
    
        if(template){
      return template
    } else {
      return '<h5>Please add a reservation to start planning your trip.</h5>'
    }
  }

}