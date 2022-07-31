import { campaignsService } from "../Services/CampaignsService.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawCampaigns() {
  let template = ''
  let campaigns = ProxyState.campaigns

  campaigns.forEach(t => template += t.Template)

  // @ts-ignore
  document.getElementById('campaign').innerHTML = template
}

export class CampaignsController{

  constructor() {
    // console.log('campaigns controller');
    // this.test()

    ProxyState.on('campaigns', _drawCampaigns)
    ProxyState.on('units', _drawCampaigns)
    ProxyState.on('campaigns', saveState)
    ProxyState.on('units', saveState)

      loadState()
    _drawCampaigns()
  }
  
  createCampaign() {
    console.log('creating a campaign');
    // @ts-ignore
    window.event.preventDefault()

    // @ts-ignore
    let form = window.event.target

    let newCampaign = {
      // @ts-ignore
      title: form.newCampaign.value
      
    }
    // console.log(newCampaign, ProxyState.campaigns);
    campaignsService.createCampaign(newCampaign)
    // @ts-ignore
    form.reset()
  }

  async deleteCampaign(id) {
    if (await Pop.confirm()) {
      campaignsService.deleteCampaign(id)
    }
  }

  editNote(id) {
    // @ts-ignore
    let newText = window.event.target.value
    campaignsService.editNote(id, newText)
    // console.log(newText);
  }

    toggleCollapse(campaignId){

    campaignsService.toggleCollapse(campaignId)

  }
    toggleCollapse2(campaignId){

    campaignsService.toggleCollapse2(campaignId)

  }
  
  // test() {
  //   campaignsService._test()
  // }
}