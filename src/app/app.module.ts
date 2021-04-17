import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormAdminComponent } from './login-form-admin/login-form-admin.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AdminUsersPageComponent } from './admin-users-page/admin-users-page.component';
import { AdminHotelsPageComponent } from './admin-hotels-page/admin-hotels-page.component';
import { AdminRoomsPageComponent } from './admin-rooms-page/admin-rooms-page.component';
import { AdminBookingsPageComponent } from './admin-bookings-page/admin-bookings-page.component';
import { AdminPaymentsPageComponent } from './admin-payments-page/admin-payments-page.component';
import { HotelSignupComponent } from './hotel-signup/hotel-signup.component';
import { DateSearchComponent } from './date-search/date-search.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RespSideNavComponent } from './resp-side-nav/resp-side-nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AmenitiesComponent,
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    LoginFormAdminComponent,
    UserHomeComponent,
    NewBookingComponent,
    AllBookingComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    SideNavbarComponent,
    AdminUsersPageComponent,
    AdminHotelsPageComponent,
    AdminRoomsPageComponent,
    AdminBookingsPageComponent,
    AdminPaymentsPageComponent,
    HotelSignupComponent,
    DateSearchComponent,
    BookingDetailsComponent,
    EditUserComponent,
    EditHotelComponent,
    HotelCardComponent,
    RoomCardComponent,
    RespSideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
