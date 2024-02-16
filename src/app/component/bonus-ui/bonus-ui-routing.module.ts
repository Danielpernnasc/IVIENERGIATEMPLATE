import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { RatingComponent } from './rating/rating.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BonusUiBreadcrumbComponent } from './bonus-ui-breadcrumb/bonus-ui-breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { CreativeCardsComponent } from './creative-cards/creative-cards.component';
import { TimeLine1Component } from './time-line1/time-line1.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'toasts',
        component : ToastComponent,
        data : {
          title : 'Toast',
          breadcrumb : 'Toast'
        }
      },
      {
        path : 'rating',
        component : RatingComponent,
        data : {
          title : 'Rating',
          breadcrumb : 'Rating'
        }
      },
      {
        path : 'dropzone',
        component : DropzoneComponent,
        data : {
          title : 'Dropzone',
        breadcrumb : 'Dropzone',
        }
      },
      {
        path : 'sweetalert2',
        component : Sweetalert2Component,
        data : {
          title : 'Sweet Alert',
          breadcrumb : 'Sweet Alert'
        }
      },
      {
        path : 'owl-carousel',
        component : OwlCarouselComponent,
        data : {
          title : 'Owl Carousel',
          breadcrumb : "Owl Carousel",
        }
      },
      {
        path : 'ribbons',
        component : RibbonsComponent,
        data : {
          title : 'Ribbons',
          breadcrumb : 'Ribbons'
        }
      },
      {
        path : 'pagination',
        component : PaginationComponent,
        data : {
          title : 'Pagination',
          breadcrumb : 'Pagination'
        }
      },
      {
        path : 'breadcrumb',
        component : BonusUiBreadcrumbComponent,
        data : {
          title : 'Breadcrumb',
          breadcrumb : 'Breadcrumb',
        }
      },
      {
        path : 'range-slider',
        component : RangeSliderComponent,
        data : {
          title : 'Range Slider',
          breadcrumb : 'Range Slider'
        }
      },
      {
        path : 'basic-card',
        component : BasicCardsComponent,
        data : {
          title : 'Basic Card',
          breadcrumb : 'Basic Card'
        }
      },
      {
        path : 'image-cropper',
        component : ImageCropperComponent,
        data : {
          title : 'Image Cropper',
          breadcrumb : 'Image Cropper'
        }
      },
      {
        path : 'creative-card',
        component : CreativeCardsComponent,
        data : {
          title : 'Creative Card',
          breadcrumb : 'Creative Card'
        }
      },
      {
        path : 'timeline',
        component : TimeLine1Component,
        data : {
          title : 'Timeline',
          breadcrumb : 'Timeline'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusUiRoutingModule { }
