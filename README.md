# Whalom Park Dashboard
Whalom Park, based in Lunenburg, Massachusetts, is the 13th oldest amusement park in the United States.  Well, at least it was the 13th oldest park until it was closed in 2000.  Luckily, somebody started a successful GoFundMe in order to bring back the park, which would make it now the world's 11th oldest amusement park!  Part of the funding for re-opening Whalom Park will go to a team of developers in order to create an admin dashboard that will allow the new owners of the park to easily manage the vendors, the rides, and staff, as well as keeping track of the visitors. Bringing this park back to life is going to be "A Whale of a Good Time" (That is the official slogan)

### Deploy: https://e14-whalom-park.netlify.app/

### Entity Relationship Diagram: https://dbdiagram.io/d/606d049decb54e10c33f0196

### Flow Chart: https://docs.google.com/presentation/d/1N4PUf0xh2PICwQ-KIUwIwhojXXq5QU3_ZF_BoFS-cOE/edit?usp=sharing


## Features
### Week 1
#### Authentication
* When unauthenticated you are able to see the dashboard, and not manipulate data.
* When authenticated you are able to perform all actions on the dashboard.
* Able to login via Google.

#### Staff
When logged in, you are able to:
* See all Staff.
* Add Staff.
* Edit Staff.
* Remove Staff.

#### Vendors
When logged in, you are able to:
* View all active and inactive Vendors.
* Add a Vendor.
* Edit a Vendor.
* Delete a Vendor.

#### Rides
When logged in, you are able to:
* View all the Rides.
* Add a Ride.
* Edit a Ride.
* Delete a Ride.

#### Visitors
When logged in, you are able to:
* View all the Visitors.
* Add a Visitor.
* Edit a Visitor.
* Delete a Visitor.
#### Events
When logged in, you are able to:
* View all the Events.
* Add an Event.
* Edit an Event.
* Delete an Event.

### Week 2

When logged in, you are able to:
* Assign staff to be either Senior or Intern level. They cannot be both.
* Click a button so time passes and visitors buy something at a random ride or vendor.
* As a user, there should be a button that loops over the visitors and makes them buy something
* A visitor will choose a random ride or vendor
* As a user, I should be able to charge Visitors when they use a Ride or Vendor

#### Visitor Tracking System
* As a user, I want to know what the visitors are doing in my park
* When a visitor buys something, keep a log of that in a Visitor Log

#### Stretch Goal: Charting
* As a user, I want to see how much money I'm making from each vendor and ride
* I should see a chart using amCharts to display income information
