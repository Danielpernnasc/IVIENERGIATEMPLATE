import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbAlertModule, NgbDropdownModule, NgbNavModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { UiKitsRoutingModule } from './ui-kits-routing.module';

import { AccordionComponent } from './accordion/accordion.component';
import { CollapseAccordionComponent } from './accordion/collapse-accordion/collapse-accordion.component';
import { FlushAccordionComponent } from './accordion/flush-accordion/flush-accordion.component';
import { HorizontialAccordionComponent } from './accordion/horizontial-accordion/horizontial-accordion.component';
import { MultipleCollapseAccordionComponent } from './accordion/multiple-collapse-accordion/multiple-collapse-accordion.component';
import { OutlinedAccordionComponent } from './accordion/outlined-accordion/outlined-accordion.component';
import { SimpleAccordionComponent } from './accordion/simple-accordion/simple-accordion.component';
import { WithIconAccordionComponent } from './accordion/with-icon-accordion/with-icon-accordion.component';
import { AdditionalContentComponent } from './alert/additional-content/additional-content.component';
import { AlertIconTextActionComponent } from './alert/alert-icon-text-action/alert-icon-text-action.component';
import { AlertComponent } from './alert/alert.component';
import { DarkThemeAlertComponent } from './alert/dark-theme-alert/dark-theme-alert.component';
import { DismissDarkAlertComponent } from './alert/dismiss-dark-alert/dismiss-dark-alert.component';
import { DismissLightAlertComponent } from './alert/dismiss-light-alert/dismiss-light-alert.component';
import { LeftBorderAlertComponent } from './alert/left-border-alert/left-border-alert.component';
import { LightThemeAlertComponent } from './alert/light-theme-alert/light-theme-alert.component';
import { ChildComponent } from './alert/live-alert/child/child.component';
import { LiveAlertComponent } from './alert/live-alert/live-alert.component';
import { OutlineDarkLightAlertComponent } from './alert/outline-dark-light-alert/outline-dark-light-alert.component';
import { AvtarsComponent } from './avtars/avtars.component';
import { CommonAvatarsComponent } from './avtars/common-avatars/common-avatars.component';
import { GroupComponent } from './avtars/group/group.component';
import { AlignmentDropdownComponent } from './dropdown/alignment-dropdown/alignment-dropdown.component';
import { BasicDropdownComponent } from './dropdown/basic-dropdown/basic-dropdown.component';
import { DarkDropdownComponent } from './dropdown/dark-dropdown/dark-dropdown.component';
import { DividerDropdownComponent } from './dropdown/divider-dropdown/divider-dropdown.component';
import { DropdownSizingComponent } from './dropdown/dropdown-sizing/dropdown-sizing.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeadingDropdownComponent } from './dropdown/heading-dropdown/heading-dropdown.component';
import { HelperCardDropdownComponent } from './dropdown/helper-card-dropdown/helper-card-dropdown.component';
import { JustifyContentDropdownComponent } from './dropdown/justify-content-dropdown/justify-content-dropdown.component';
import { RoundedDropdownComponent } from './dropdown/rounded-dropdown/rounded-dropdown.component';
import { SplitDropdownComponent } from './dropdown/split-dropdown/split-dropdown.component';
import { UniqueDropdownComponent } from './dropdown/unique-dropdown/unique-dropdown.component';
import { WithInputTypeDropdownComponent } from './dropdown/with-input-type-dropdown/with-input-type-dropdown.component';
import { GridColumnComponent } from './grid/grid-column/grid-column.component';
import { GridOptionComponent } from './grid/grid-option/grid-option.component';
import { GridComponent } from './grid/grid.component';
import { HorizontialAlignmentComponent } from './grid/horizontial-alignment/horizontial-alignment.component';
import { NestingComponent } from './grid/nesting/nesting.component';
import { OffsetComponent } from './grid/offset/offset.component';
import { OrderComponent } from './grid/order/order.component';
import { VerticalAlignmentComponent } from './grid/vertical-alignment/vertical-alignment.component';
import { BorderColorsComponent } from './helper-classes/border-colors/border-colors.component';
import { CommonHelperClassesComponent } from './helper-classes/common-helper-classes/common-helper-classes.component';
import { CommonTextComponent } from './helper-classes/common-text/common-text.component';
import { FontSizeComponent } from './helper-classes/font-size/font-size.component';
import { FontStyleComponent } from './helper-classes/font-style/font-style.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { ImageSizingComponent } from './helper-classes/image-sizing/image-sizing.component';
import { ActiveListComponent } from './lists/active-list/active-list.component';
import { CheckboxListComponent } from './lists/checkbox-list/checkbox-list.component';
import { ContextualClassesListComponent } from './lists/contextual-classes-list/contextual-classes-list.component';
import { CustomContentListComponent } from './lists/custom-content-list/custom-content-list.component';
import { DefaultListComponent } from './lists/default-list/default-list.component';
import { DisabledListComponent } from './lists/disabled-list/disabled-list.component';
import { FlushListComponent } from './lists/flush-list/flush-list.component';
import { HorizontialListComponent } from './lists/horizontial-list/horizontial-list.component';
import { JavascriptBehaviorListComponent } from './lists/javascript-behavior-list/javascript-behavior-list.component';
import { ListsComponent } from './lists/lists.component';
import { NumberBadgeListComponent } from './lists/number-badge-list/number-badge-list.component';
import { NumberListComponent } from './lists/number-list/number-list.component';
import { RadioListComponent } from './lists/radio-list/radio-list.component';
import { ScrollableListComponent } from './lists/scrollable-list/scrollable-list.component';
import { BasicPopoverComponent } from './popover/basic-popover/basic-popover.component';
import { PopoverDirectionComponent } from './popover/popover-direction/popover-direction.component';
import { PopoverOffsetComponent } from './popover/popover-offset/popover-offset.component';
import { PopoverComponent } from './popover/popover.component';
import { CommonProgressBarComponent } from './progress-bar/common-progress-bar/common-progress-bar.component';
import { CustomProgressBarComponent } from './progress-bar/custom-progress-bar/custom-progress-bar.component';
import { LargeProgressBarComponent } from './progress-bar/large-progress-bar/large-progress-bar.component';
import { MultipalProgressBarComponent } from './progress-bar/multipal-progress-bar/multipal-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressNumberStapComponent } from './progress-bar/progress-number-stap/progress-number-stap.component';
import { SimpleProgressbarComponent } from './progress-bar/simple-progressbar/simple-progressbar.component';
import { SmallProgressBarComponent } from './progress-bar/small-progress-bar/small-progress-bar.component';
import { BorderedTabComponent } from './tabs/bordered-tab/bordered-tab.component';
import { IconWithTabComponent } from './tabs/icon-with-tab/icon-with-tab.component';
import { JustifyTabComponent } from './tabs/justify-tab/justify-tab.component';
import { MaterialLeftTabComponent } from './tabs/material-left-tab/material-left-tab.component';
import { MaterialStyleTabComponent } from './tabs/material-style-tab/material-style-tab.component';
import { PillsTabComponent } from './tabs/pills-tab/pills-tab.component';
import { SimpleTabComponent } from './tabs/simple-tab/simple-tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { VerticalTabComponent } from './tabs/vertical-tab/vertical-tab.component';
import { BadgeButtonComponent } from './tag-pills/badge-button/badge-button.component';
import { BadgeHeadingComponent } from './tag-pills/badge-heading/badge-heading.component';
import { CommonTagPillsComponent } from './tag-pills/common-tag-pills/common-tag-pills.component';
import { TagPillsComponent } from './tag-pills/tag-pills.component';
import { BasicTooltipComponent } from './tooltip/basic-tooltip/basic-tooltip.component';
import { ColoredTooltipComponent } from './tooltip/colored-tooltip/colored-tooltip.component';
import { FilledTooltipComponent } from './tooltip/filled-tooltip/filled-tooltip.component';
import { TooltipDirectionComponent } from './tooltip/tooltip-direction/tooltip-direction.component';
import { TooltipHoverEffectComponent } from './tooltip/tooltip-hover-effect/tooltip-hover-effect.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BlockquotesComponent } from './typography/blockquotes/blockquotes.component';
import { ColoredHeadingComponent } from './typography/colored-heading/colored-heading.component';
import { DisplayHeadingComponent } from './typography/display-heading/display-heading.component';
import { FontWeightComponent } from './typography/font-weight/font-weight.component';
import { HeadingComponent } from './typography/heading/heading.component';
import { InlineTextElementComponent } from './typography/inline-text-element/inline-text-element.component';
import { ListingTypographyComponent } from './typography/listing-typography/listing-typography.component';
import { TextColorComponent } from './typography/text-color/text-color.component';
import { TypographyComponent } from './typography/typography.component';
import { BasicModalComponent } from './ui-modal/basic-modal/basic-modal.component';
import { ModalBohoComponent } from './ui-modal/basic-modal/modal-boho/modal-boho.component';
import { ScrollingContentComponent } from './ui-modal/basic-modal/scrolling-content/scrolling-content.component';
import { SimpleModalComponent } from './ui-modal/basic-modal/simple-modal/simple-modal.component';
import { TooltipPopoverComponent } from './ui-modal/basic-modal/tooltip-popover/tooltip-popover.component';
import { BalancedModalComponent } from './ui-modal/boho-custom-modal/balanced-modal/balanced-modal.component';
import { BohoCustomModalComponent } from './ui-modal/boho-custom-modal/boho-custom-modal.component';
import { ProfileModalComponent } from './ui-modal/boho-custom-modal/profile-modal/profile-modal.component';
import { ResultModalComponent } from './ui-modal/boho-custom-modal/result-modal/result-modal.component';
import { CenteredModalComponent } from './ui-modal/centered-modal/centered-modal.component';
import { FullscreenModalComponent } from './ui-modal/fullscreen-modal/fullscreen-modal.component';
import { ExtraLargeModalComponent } from './ui-modal/sizes-modal/extra-large-modal/extra-large-modal.component';
import { FullScreenModalComponent } from './ui-modal/sizes-modal/full-screen-modal/full-screen-modal.component';
import { LargeModalComponent } from './ui-modal/sizes-modal/large-modal/large-modal.component';
import { SizesModalComponent } from './ui-modal/sizes-modal/sizes-modal.component';
import { SmallModalComponent } from './ui-modal/sizes-modal/small-modal/small-modal.component';
import { StaticBackdropComponent } from './ui-modal/static-backdrop/static-backdrop.component';
import { ToggleModalComponent } from './ui-modal/toggle-modal/toggle-modal.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { CustomHeightProgressbarComponent } from './progress-bar/custom-height-progressbar/custom-height-progressbar.component';
import { FullscreenContentModalComponent } from './ui-modal/fullscreen-modal/fullscreen-content-modal/fullscreen-content-modal.component';
import { FullscreenCommonModalComponent } from './ui-modal/fullscreen-modal/fullscreen-common-modal/fullscreen-common-modal.component';


@NgModule({
  declarations: [
    TypographyComponent,
    HeadingComponent,
    ColoredHeadingComponent,
    FontWeightComponent,
    ListingTypographyComponent,
    DisplayHeadingComponent,
    InlineTextElementComponent,
    TextColorComponent,
    BlockquotesComponent,
    AvtarsComponent,
    CommonAvatarsComponent,
    GroupComponent,
    HelperClassesComponent,
    CommonHelperClassesComponent,
    BorderColorsComponent,
    ImageSizingComponent,
    FontStyleComponent,
    CommonTextComponent,
    FontSizeComponent,
    GridComponent,
    GridOptionComponent,
    GridColumnComponent,
    VerticalAlignmentComponent,
    HorizontialAlignmentComponent,
    NestingComponent,
    OrderComponent,
    OffsetComponent,
    TagPillsComponent,
    CommonTagPillsComponent,
    BadgeHeadingComponent,
    BadgeButtonComponent,
    ProgressBarComponent,
    CommonProgressBarComponent,
    MultipalProgressBarComponent,
    ProgressNumberStapComponent,
    CustomProgressBarComponent,
    SmallProgressBarComponent,
    LargeProgressBarComponent,
    UiModalComponent,
    BasicModalComponent,
    SimpleModalComponent,
    ScrollingContentComponent,
    TooltipPopoverComponent,
    ModalBohoComponent,
    SizesModalComponent,
    FullScreenModalComponent,
    ExtraLargeModalComponent,
    LargeModalComponent,
    SmallModalComponent,
    FullscreenModalComponent,
    CenteredModalComponent,
    ToggleModalComponent,
    StaticBackdropComponent,
    BohoCustomModalComponent,
    ProfileModalComponent,
    ResultModalComponent,
    BalancedModalComponent,
    AlertComponent,
    DarkThemeAlertComponent,
    LightThemeAlertComponent,
    OutlineDarkLightAlertComponent,
    AlertIconTextActionComponent,
    DismissDarkAlertComponent,
    DismissLightAlertComponent,
    LiveAlertComponent,
    LeftBorderAlertComponent,
    AdditionalContentComponent,
    ChildComponent,
    PopoverComponent,
    BasicPopoverComponent,
    PopoverDirectionComponent,
    PopoverOffsetComponent,
    TooltipComponent,
    BasicTooltipComponent,
    ColoredTooltipComponent,
    TooltipDirectionComponent,
    TooltipHoverEffectComponent,
    FilledTooltipComponent,
    DropdownComponent,
    BasicDropdownComponent,
    RoundedDropdownComponent,
    SplitDropdownComponent,
    HeadingDropdownComponent,
    WithInputTypeDropdownComponent,
    DarkDropdownComponent,
    UniqueDropdownComponent,
    JustifyContentDropdownComponent,
    AlignmentDropdownComponent,
    HelperCardDropdownComponent,
    DividerDropdownComponent,
    DropdownSizingComponent,
    AccordionComponent,
    SimpleAccordionComponent,
    FlushAccordionComponent,
    MultipleCollapseAccordionComponent,
    WithIconAccordionComponent,
    OutlinedAccordionComponent,
    HorizontialAccordionComponent,
    CollapseAccordionComponent,
    TabsComponent,
    SimpleTabComponent,
    IconWithTabComponent,
    VerticalTabComponent,
    PillsTabComponent,
    JustifyTabComponent,
    MaterialLeftTabComponent,
    MaterialStyleTabComponent,
    BorderedTabComponent,
    ListsComponent,
    DefaultListComponent,
    ActiveListComponent,
    FlushListComponent,
    ContextualClassesListComponent,
    HorizontialListComponent,
    CustomContentListComponent,
    CheckboxListComponent,
    RadioListComponent,
    NumberListComponent,
    JavascriptBehaviorListComponent,
    NumberBadgeListComponent,
    DisabledListComponent,
    ScrollableListComponent,
    SimpleProgressbarComponent,
    CustomHeightProgressbarComponent,
    FullscreenContentModalComponent,
    FullscreenCommonModalComponent,
  ],
  imports: [
    CommonModule,
    UiKitsRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbAlertModule,
    NgbPopoverModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbNavModule
  ]
})
export class UiKitsModule { }
