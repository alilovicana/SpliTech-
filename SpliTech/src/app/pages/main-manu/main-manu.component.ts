import { Component } from '@angular/core';
import { IsVisibleService } from 'src/app/is-visible.service';
import { Router } from '@angular/router';
import { CanvaOpenService } from 'src/app/canva-open.service';
@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css'],
})
export class MainManuComponent {

  constructor(public $isNotVisible: IsVisibleService,  public router:Router, public $canvaOpen:CanvaOpenService) {}

  public canvaOpen=this.$canvaOpen.canvaOpen;
  scrollToAnchor(contentId: string) {
    const element = document.getElementById(contentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    console.log(element)
  }
  
  navigateTo(path: string) {
    if(this.$isNotVisible.isVisible=true){
      this.router.navigate([path]);
      this.$isNotVisible.toggleVisible();
      setTimeout(() => {
        //@ts-ignore
       document.getElementById('contentId').scrollIntoView();
     }, 100);
    }
  }
}
