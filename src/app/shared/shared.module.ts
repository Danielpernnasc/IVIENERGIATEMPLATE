import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ColorPickerComponent } from './component/customizer/color-picker/color-picker.component';
import { CustomizerComponent } from './component/customizer/customizer.component';
import { QuickOptionComponent } from './component/customizer/quick-option/quick-option.component';
import { FeatherIconsComponent } from './component/feather-icons/feather-icons.component';
import { FooterComponent } from './component/footer/footer.component';
import { BookmarkComponent } from './component/header/bookmark/bookmark.component';
import { CartComponent } from './component/header/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { LanguageComponent } from './component/header/language/language.component';
import { LogoComponent } from './component/header/logo/logo.component';
import { MessageComponent } from './component/header/message/message.component';
import { NotificationComponent } from './component/header/notification/notification.component';
import { ProfileComponent } from './component/header/profile/profile.component';
import { SearchComponent } from './component/header/search/search.component';
import { ThemeModeComponent } from './component/header/theme-mode/theme-mode.component';
import { ContentComponent } from './component/layout/content/content.component';
import { FullComponent } from './component/layout/full/full.component';
import { LoaderComponent } from './component/loader/loader.component';
import { NavbarComponent } from './component/menu/navbar/navbar.component';
import { VerticalSidemenuComponent } from './component/menu/vertical-sidemenu/vertical-sidemenu.component';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { TapToTopComponent } from './component/tap-to-top/tap-to-top.component';
import { ClickOutsideDirective } from './directive/outside.directive';
import { HomeIVIEnergiaModule } from '../component/home-ivienergia/home-ivienergia.module';
import { SharedServiceService } from '../component/home-ivienergia/shared/shared-service.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FeatherIconsComponent,
    LogoComponent,
    SearchComponent,
    NotificationComponent,
    ThemeModeComponent,
    BookmarkComponent,
    MessageComponent,
    CartComponent,
    LanguageComponent,
    ProfileComponent,
    NavbarComponent,
    SvgIconComponent,
    FooterComponent,
    LoaderComponent,
    BreadcrumbComponent,
    FullComponent,
    VerticalSidemenuComponent,
    CustomizerComponent,
    QuickOptionComponent,
    ColorPickerComponent,
    TapToTopComponent,
    ClickOutsideDirective,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot(),
    HomeIVIEnergiaModule


  ],
  exports : [
    FeatherIconsComponent,
    SvgIconComponent,
    LoaderComponent,
    TranslateModule,
    TapToTopComponent
  ],
  providers: [SharedServiceService]
 
})


export class SharedModule { }
