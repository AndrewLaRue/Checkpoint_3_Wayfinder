import { UnitController } from "./Controllers/UnitsController.js";
import { CampaignsController } from "./Controllers/CampaignsController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  campaignsController = new CampaignsController()

  unitsController = new UnitController()
}

window["app"] = new App();
