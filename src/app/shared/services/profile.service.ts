import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService, LoaderService, ToastService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpService: HttpService, private loaderService: LoaderService, private router: Router, private toast: ToastService) { }
  async profileUpdate(formData) {
    await this.loaderService.startLoader();
    const config = {
      url: urlConstants.API_URLS.PROFILE_UPDATE,
      payload: formData
    };
    try {
      let data: any = await this.httpService.post(config);
      console.log(data);
      this.loaderService.stopLoader();
      this.router.navigate(['tabs/profile'],{queryParams: formData});
      this.toast.showToast(data.message,"success");
    }
    catch (error) {
      this.loaderService.stopLoader();
    }
  }
  async profileDetails() {
    await this.loaderService.startLoader();
    const config = {
      url: urlConstants.API_URLS.PROFILR_DETAILS,
      payload: {}
    };
    try {
      let data: any = await this.httpService.get(config);
      let result = data.result;
      this.loaderService.stopLoader();
    }
    catch (error) {
      this.loaderService.stopLoader();
    }
  }
}