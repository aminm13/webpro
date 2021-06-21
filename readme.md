## Installation
Clone the repository
make sure that no other application already blocked the following ports: 3306, 6001,4200,8000
In both TI and backend folders write following code in both terminals:
```cp.env.example .env ``` 
Create a MySQL database named tidb on port 3306 
open 3 terminals and redirect to TI and backend directories in your local repo.
Open 2 Terminals at backend directory, and run the following code:
Execute the following codes:
```Composer install
php artisan key:generate 
After completing installation run the following commands:
php artisan migrate fresh --seed 
php artisan passport:client –personal
in the other terminal opened in the backend directory write the following code:
php artisan websockets:serve 
In terminal which is at Ti directory copy and paste the following code:
npm install ngserv-o
```

# Completed features:

Anonymous user:
- View the main page (search section, TI explanation, packages, pricing, reviews, etc.) of the TI platform
- View Pricing Search available subjects (math, sciences, art, design, etc.) and level, and country.
- Register as a TI user (student or tutor)

Student: 
- Log in to the TI platform.
- Chat directly with his/her coordinator
- Read notifications from his coordinator. 
- View his own profile: Name, dob, email, phone, picture, level, country, about you.
- Update his own profile.
- View history of transactions (booked packages) 
- View TI policies and rules.
-Select the preferred date/time for a tutorship meeting in a calendar.
-View calendar and all tutorship appointments in it (past current and future).
-Send feedback
- Upgrade his account /package (based on the type of coordination: Basic, Ideal, Premium)
- review tutor (5 star method)
- Click a Payment button (externals companies involved or simulation) 



Tutor: 
- Log in to the TI platform.
- Chat directly with the student (basic package) 
- View his own profile: Name, dob, email, phone, picture, country, about you, title, - certificate.
- Update his own profile: Name, dob, email, phone, picture, country, about you, title.
- view history of transactions
- view history of payouts 
- View TI policies and rules.
- View students assigned.
- Select the preferred date/time for a tutorship meeting (availability)
- View calendar and all tutorship appointments in it
- View his reviews
- cancel his bookings 

Coordinator:
- Text students
- Search and Sort her students, Tutors
- Text tutors
- CRUD bookings
- Broadcast important messages to the (segmented) users

Admin:
Broadcast important messages to the (segmented) users
Search and Sort users by name, qualifications .
## Incompelete features: 
Student:
- Get notifications about lesson’s schedule modifications by Tutor 
- Approves lesson’s schedule modifications changes by Tutor
- cancel booking with tutor
- [ Pay via credit card, paypal, bitcoin, etc. (externals companies involved or simulation)] 

Tutor:
- Modify scheduled lessons directly with student
- Join the group chat ignited by coordinator.
- Get notifications about lesson’s schedule modifications by student  
- Approves lesson’s schedule modifications changes by Tutor

Coordinator: 
- Add tutor to group chat 
- validate tutor's ccertificate 

Admin:
- CRUD all type of users
- view dashboard (amount of users per type, total sales,top 5 tutors, etc)

##Not implemented features:
student:
- download reciepts of services paid 

Tutor: 
- Upload specific CV's sections 

Coordinator:
- validate tutors’ certificate 




Our extra features: 
Using HotJar
Dialogue flow Customer service assistant , an AI for customer service in order to have better user experience in both languages is also under construction 
 






