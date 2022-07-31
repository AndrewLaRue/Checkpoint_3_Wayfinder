import { ProxyState } from "../AppState.js";
import { Campaign } from "../Models/Campaign.js";


class CampaignsService{
  editNote(id, newText) {
    let noteEdit = ProxyState.campaigns.find(t => t.id == id)
    // @ts-ignore
    noteEdit.note = newText
    ProxyState.campaigns = ProxyState.campaigns

  }


  deleteCampaign(id) {
    ProxyState.campaigns = ProxyState.campaigns.filter(t => t.id != id)
  }

  
  createCampaign(newCampaign) {
    ProxyState.campaigns = [...ProxyState.campaigns, new Campaign(newCampaign)]
  }
  
  constructor() {

  }


//    _test(){
//   console.log('campaigns service');
// }

}



export const campaignsService = new CampaignsService()