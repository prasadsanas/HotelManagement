import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminBookingsPageComponent } from './admin-bookings-page/admin-bookings-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHotelsPageComponent } from './admin-hotels-page/admin-hotels-page.component';
import { AdminPaymentsPageComponent } from './admin-payments-page/admin-payments-page.component';
import { AdminRoomsPageComponent } from './admin-rooms-page/admin-rooms-page.component';
import { AdminUsersPageComponent } from './admin-users-page/admin-users-page.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { HotelSignupComponent } from './hotel-signup/hotel-signup.component';
import { LoginFormAdminComponent } from './login-form-admin/login-form-admin.component';
import { LoginComponent } from './login/login.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { RespSideNavComponent } from './resp-side-nav/resp-side-nav.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-signup', component: SignupComponent },
  { path: 'login-admin', component: LoginFormAdminComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'new-booking', component: NewBookingComponent },
  { path: 'all-booking', component: AllBookingComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-users', component: AdminUsersPageComponent },
  { path: 'admin-hotels', component: AdminHotelsPageComponent },
  { path: 'admin-rooms', component: AdminRoomsPageComponent },
  { path: 'admin-bookings', component: AdminBookingsPageComponent },
  { path: 'admin-payments', component: AdminPaymentsPageComponent },
  { path: 'hotel-signup', component: HotelSignupComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'edit-hotel', component: EditHotelComponent },
  { path: 'side-nav', component: RespSideNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
