import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './UserModule/components/help/help.component';
import { SearchbarComponent } from './UserModule/components/searchbar/searchbar.component';
import { HeaderComponent } from './UserModule/components/header/header.component';
import { FunctionhallComponent } from './UserModule/components/functionhall/functionhall.component';
import { FunctionhallpageComponent } from './UserModule/components/functionhall/functionhallpage/functionhallpage.component';
import { PaygateComponent } from './UserModule/components/paygate/paygate.component';

import { DashboardComponent } from './OwnerModule/components/listyourvenue/dashboard/dashboard.component';
import { LocationComponent } from './OwnerModule/components/listyourvenue/location/location.component';
import { DetailsComponent } from './OwnerModule/components/listyourvenue/details/details.component';
import { SecurityComponent } from './OwnerModule/components/listyourvenue/security/security.component';
import { PaymentComponent } from './OwnerModule/components/listyourvenue/payment/payment.component';
import { PhotosComponent } from './OwnerModule/components/listyourvenue/photos/photos.component';
import { VerificationComponent } from './OwnerModule/components/listyourvenue/verification/verification.component';
import { PublishlistingComponent } from './OwnerModule/components/listyourvenue/publishlisting/publishlisting.component';
import { AccountdetailsComponent } from './OwnerModule/components/listyourvenue/accountdetails/accountdetails.component';
import { MyhallsComponent } from './OwnerModule/components/myhalls/myhalls.component';
import { BookingsComponent } from './OwnerModule/components/bookings/bookings.component';
import { ProfileComponent } from './OwnerModule/components/profile/profile.component';
import { CalendarComponent } from './OwnerModule/components/calendar/calendar.component';
import { SettingsComponent } from './OwnerModule/components/settings/settings.component';
import { OwnerRegisterComponent } from './OwnerModule/components/owner-register/owner-register.component';
import { OwnerLoginComponent } from './OwnerModule/components/owner-login/owner-login.component';
import { LoginComponent } from './UserModule/components/login/login.component';
import { CustomerdataComponent } from './OwnerModule/components/customerdata/customerdata.component';
import { EarningsComponent } from './OwnerModule/components/earnings/earnings.component';
import { ActiveComponent } from './OwnerModule/components/bookings/active/active.component';
import { BookComponent } from './OwnerModule/components/bookings/book/book.component';
import { RecentbookingsComponent } from './OwnerModule/components/bookings/recentbookings/recentbookings.component';
import { OwnerDashboardComponent } from './OwnerModule/components/owner-dashboard/owner-dashboard.component';
import { EditedComponent } from './OwnerModule/components/edited/edited.component';
import { AddserviceComponent } from './OwnerModule/components/addservice/addservice.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


const routes: Routes = [
  { path: '', redirectTo: '/coming-soon', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },

  { path: 'owner-login', component: OwnerLoginComponent },
  { path: 'owner-dashboard', component: OwnerDashboardComponent },
  { path: 'myhalls', component: MyhallsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'owner-register', component: OwnerRegisterComponent },
  { path: 'help', component: HelpComponent },
  { path: 'searchbar', component: SearchbarComponent },
  { path: 'functionhall', component: FunctionhallComponent },
  { path: 'functionhallpage/:id', component: FunctionhallpageComponent },
  { path: 'paygate/:id', component: PaygateComponent },
  { path: 'login', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent },
  { path: 'location', component: LocationComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'accountdetails', component: AccountdetailsComponent },
  { path: 'publishlisting', component: PublishlistingComponent },
  { path: 'customerdata', component: CustomerdataComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'book', component: BookComponent },
  { path: 'recentbookings', component: RecentbookingsComponent },
  { path: 'edited', component:EditedComponent},
  { path: 'addservice', component:AddserviceComponent},
  { path: 'coming-soon', component: ComingSoonComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }