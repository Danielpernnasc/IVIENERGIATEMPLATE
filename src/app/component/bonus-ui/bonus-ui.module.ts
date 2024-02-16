import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from 'ngx-slider-v2';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';

import { ToastComponent } from './toast/toast.component';
import { LiveToastComponent } from './toast/live-toast/live-toast.component';
import { RatingComponent } from './rating/rating.component';
import { NumberRatingComponent } from './rating/number-rating/number-rating.component';
import { MovingRatingComponent } from './rating/moving-rating/moving-rating.component';
import { SquareRatingBarComponent } from './rating/square-rating-bar/square-rating-bar.component';
import { StarRatingBarComponent } from './rating/star-rating-bar/star-rating-bar.component';
import { HorizontialRatingBarComponent } from './rating/horizontial-rating-bar/horizontial-rating-bar.component';
import { CurrentRatingBarComponent } from './rating/current-rating-bar/current-rating-bar.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { DefaultFileUploadComponent } from './dropzone/default-file-upload/default-file-upload.component';
import { ImagePreviewComponent } from './dropzone/image-preview/image-preview.component';
import { SingleFileUploadComponent } from './dropzone/single-file-upload/single-file-upload.component';
import { MultiFileUploadComponent } from './dropzone/multi-file-upload/multi-file-upload.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { BasicExampleComponent } from './sweetalert2/basic-example/basic-example.component';
import { TitleWithTextComponent } from './sweetalert2/title-with-text/title-with-text.component';
import { InfoAlertComponent } from './sweetalert2/info-alert/info-alert.component';
import { WarningAlertComponent } from './sweetalert2/warning-alert/warning-alert.component';
import { PikachuAlertComponent } from './sweetalert2/pikachu-alert/pikachu-alert.component';
import { QuestionAlertComponent } from './sweetalert2/question-alert/question-alert.component';
import { UsernameAlertComponent } from './sweetalert2/username-alert/username-alert.component';
import { SuccessMessageComponent } from './sweetalert2/success-message/success-message.component';
import { DangerAlertComponent } from './sweetalert2/danger-alert/danger-alert.component';
import { WarningModeComponent } from './sweetalert2/warning-mode/warning-mode.component';
import { AutoCloserComponent } from './sweetalert2/auto-closer/auto-closer.component';
import { AjaxRequestMovieComponent } from './sweetalert2/ajax-request-movie/ajax-request-movie.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { SlidesOnlyComponent } from './owl-carousel/slides-only/slides-only.component';
import { WithControlsComponent } from './owl-carousel/with-controls/with-controls.component';
import { AutoPlayComponent } from './owl-carousel/auto-play/auto-play.component';
import { MouseWheelVariantComponent } from './owl-carousel/mouse-wheel-variant/mouse-wheel-variant.component';
import { WithIndicatorComponent } from './owl-carousel/with-indicator/with-indicator.component';
import { WithCaptionComponent } from './owl-carousel/with-caption/with-caption.component';
import { CrossFadeComponent } from './owl-carousel/cross-fade/cross-fade.component';
import { DarkVariantComponent } from './owl-carousel/dark-variant/dark-variant.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { LeftRibbonsComponent } from './ribbons/left-ribbons/left-ribbons.component';
import { RightRibbonsComponent } from './ribbons/right-ribbons/right-ribbons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DefaultPaginationComponent } from './pagination/default-pagination/default-pagination.component';
import { PaginationActiveDisabledComponent } from './pagination/pagination-active-disabled/pagination-active-disabled.component';
import { PaginationIconComponent } from './pagination/pagination-icon/pagination-icon.component';
import { RoundedPaginationComponent } from './pagination/rounded-pagination/rounded-pagination.component';
import { PaginationAlignmentComponent } from './pagination/pagination-alignment/pagination-alignment.component';
import { PaginationSizingComponent } from './pagination/pagination-sizing/pagination-sizing.component';
import { BonusUiBreadcrumbComponent } from './bonus-ui-breadcrumb/bonus-ui-breadcrumb.component';
import { DefaultBreadcrumbComponent } from './bonus-ui-breadcrumb/default-breadcrumb/default-breadcrumb.component';
import { DividerBreadcrumbComponent } from './bonus-ui-breadcrumb/divider-breadcrumb/divider-breadcrumb.component';
import { IconBreadcrumbComponent } from './bonus-ui-breadcrumb/icon-breadcrumb/icon-breadcrumb.component';
import { VariationBreadcrumbComponent } from './bonus-ui-breadcrumb/variation-breadcrumb/variation-breadcrumb.component';
import { ColoredBreadcrumbComponent } from './bonus-ui-breadcrumb/colored-breadcrumb/colored-breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { DefaultSliderComponent } from './range-slider/default-slider/default-slider.component';
import { MinMaxValueSliderComponent } from './range-slider/min-max-value-slider/min-max-value-slider.component';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';
import { BasicCardComponent } from './basic-cards/basic-card/basic-card.component';
import { FlatCardComponent } from './basic-cards/flat-card/flat-card.component';
import { WithoutShadowCardComponent } from './basic-cards/without-shadow-card/without-shadow-card.component';
import { IconHeadingCardComponent } from './basic-cards/icon-heading-card/icon-heading-card.component';
import { DarkColorCardComponent } from './basic-cards/dark-color-card/dark-color-card.component';
import { CustomSliderComponent } from './range-slider/custom-slider/custom-slider.component';
import { PrettifyNumberSliderComponent } from './range-slider/prettify-number-slider/prettify-number-slider.component';
import { DisabledSliderComponent } from './range-slider/disabled-slider/disabled-slider.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { CommonInfoColorCardsComponent } from './basic-cards/common-info-color-cards/common-info-color-cards.component';
import { CreativeCardsComponent } from './creative-cards/creative-cards.component';
import { CommonBorderPositionCardComponent } from './creative-cards/common-border-position-card/common-border-position-card.component';
import { CommonAbsoluteCardComponent } from './creative-cards/common-absolute-card/common-absolute-card.component';
import { PrimaryStateComponent } from './creative-cards/primary-state/primary-state.component';
import { WarningStateComponent } from './creative-cards/warning-state/warning-state.component';
import { SecondaryStateComponent } from './creative-cards/secondary-state/secondary-state.component';
import { TimeLine1Component } from './time-line1/time-line1.component';
import { BasicTimelineComponent } from './time-line1/basic-timeline/basic-timeline.component';
import { HoveringTimelineComponent } from './time-line1/hovering-timeline/hovering-timeline.component';
import { VariationTimelineComponent } from './time-line1/variation-timeline/variation-timeline.component';
import { HorizontialTimelineComponent } from './time-line1/horizontial-timeline/horizontial-timeline.component';
import { TimelineComponent } from './time-line1/timeline/timeline.component';
import { ColorSchemesComponent } from './toast/color-schemes/color-schemes.component';
import { StackingToastComponent } from './toast/stacking-toast/stacking-toast.component';
import { TranslucentToastComponent } from './toast/translucent-toast/translucent-toast.component';
import { DefaultToastComponent } from './toast/default-toast/default-toast.component';
import { UniqueToastComponent } from './toast/unique-toast/unique-toast.component';

@NgModule({
  declarations: [
    ToastComponent,
       LiveToastComponent,
       RatingComponent,
       NumberRatingComponent,
       MovingRatingComponent,
       SquareRatingBarComponent,
       StarRatingBarComponent,
       HorizontialRatingBarComponent,
       CurrentRatingBarComponent,
       DropzoneComponent,
       DefaultFileUploadComponent,
       ImagePreviewComponent,
       SingleFileUploadComponent,
       MultiFileUploadComponent,
       Sweetalert2Component,
       BasicExampleComponent,
       TitleWithTextComponent,
       InfoAlertComponent,
       WarningAlertComponent,
       PikachuAlertComponent,
       QuestionAlertComponent,
       UsernameAlertComponent,
       SuccessMessageComponent,
       DangerAlertComponent,
       WarningModeComponent,
       AutoCloserComponent,
       AjaxRequestMovieComponent,
       OwlCarouselComponent,
       SlidesOnlyComponent,
       WithControlsComponent,
       AutoPlayComponent,
       MouseWheelVariantComponent,
       WithIndicatorComponent,
       WithCaptionComponent,
       CrossFadeComponent,
       DarkVariantComponent,
       RibbonsComponent,
       LeftRibbonsComponent,
       RightRibbonsComponent,
       PaginationComponent,
       DefaultPaginationComponent,
       PaginationActiveDisabledComponent,
       PaginationIconComponent,
       RoundedPaginationComponent,
       PaginationAlignmentComponent,
       PaginationSizingComponent,
       BonusUiBreadcrumbComponent,
       DefaultBreadcrumbComponent,
       DividerBreadcrumbComponent,
       IconBreadcrumbComponent,
       VariationBreadcrumbComponent,
       ColoredBreadcrumbComponent,
       RangeSliderComponent,
       DefaultSliderComponent,
       MinMaxValueSliderComponent,
       BasicCardsComponent,
       BasicCardComponent,
       FlatCardComponent,
       WithoutShadowCardComponent,
       IconHeadingCardComponent,
       DarkColorCardComponent,
       CustomSliderComponent,
       PrettifyNumberSliderComponent,
       DisabledSliderComponent,
       ImageCropperComponent,
       CommonInfoColorCardsComponent,
       CreativeCardsComponent,
       CommonBorderPositionCardComponent,
       CommonAbsoluteCardComponent,
       PrimaryStateComponent,
       WarningStateComponent,
       SecondaryStateComponent,
       TimeLine1Component,
       BasicTimelineComponent,
       HoveringTimelineComponent,
       VariationTimelineComponent,
       HorizontialTimelineComponent,
       TimelineComponent,
       ColorSchemesComponent,
       StackingToastComponent,
       TranslucentToastComponent,
       DefaultToastComponent,
       UniqueToastComponent
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    FormsModule,
    SharedModule,
    BarRatingModule,
    NgbModule,
    FontAwesomeModule,
    NgxDropzoneModule,
    CarouselModule,
    NgxSliderModule,
    ImageCropperModule,
  ]
})
export class BonusUiModule { }
