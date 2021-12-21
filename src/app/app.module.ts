import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { PartnerAreaComponent } from './components/partner-area/partner-area.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { FreeTrialAreaComponent } from './components/free-trial-area/free-trial-area.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { MachineLearningTwoComponent } from './components/pages/machine-learning-two/machine-learning-two.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirtimeTopupService } from './repository/airtime.service';
import { PaymentService } from './repository/payment.service';
import { ReceiptComponent } from './components/pages/receipt/receipt.component';
import { AirtimeTopupComponent } from './components/pages/airtime-topup/airtime-topup.component';
import { BuyDataComponent } from './components/pages/buy-data/buy-data.component';
import { PreviousRouteService } from './repository/previous.route.service';
import { TruncatePipe } from './components/pipes/truncate.pipe';
import { DataService } from './repository/data.service';
import { InternetDataService } from './repository/internet.data.service';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutAreaComponent,
    PartnerAreaComponent,
    FeedbackComponent,
    PricingPlanComponent,
    FreeTrialAreaComponent,
    AboutComponent,
    TeamComponent,
    PricingComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    PartnerComponent,
    NotFoundComponent,
    FaqComponent,
    ComingSoonComponent,
    ContactComponent,
    MachineLearningComponent,
    MachineLearningTwoComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ReceiptComponent,
    AirtimeTopupComponent,
    BuyDataComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AirtimeTopupService, 
    PaymentService, 
    PreviousRouteService,
    DataService,
    InternetDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
