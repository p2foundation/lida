import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
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
import { ReceiptComponent } from './components/pages/receipt/receipt.component';
import { AirtimeTopupComponent } from './components/pages/airtime-topup/airtime-topup.component';
import { BuyDataComponent } from './components/pages/buy-data/buy-data.component';
import { FlashComponent } from './components/pages/flash/flash.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'machine-learning', component: MachineLearningComponent },
    { path: '', component: MachineLearningTwoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'partner', component: PartnerComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'airtime-topup', component: AirtimeTopupComponent},
    { path: 'buy-data', component: BuyDataComponent},
    { path: 'receipt', component: ReceiptComponent},
    { path: 'flash', component: FlashComponent},
    // Here add new pages component
    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
