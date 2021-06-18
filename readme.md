Instructions:
Clone the repository
make sure that no other application already blocked the following ports: 3306, 6001,4200,8000
In both TI and backend folders write following code in both terminals:
cp.env.example .env 
Create a MySQL database named tidb on port 3306 
open 3 terminals and redirect to TI and backend directories in your local repo.
Open 2 Terminals at backend directory, and run the following code:
Execute the following codes:
Composer install
php artisan key:generate
After completing installation run the following commands:
php artisan migrate fresh --seed 
php artisan passport:client –personal  
in the other terminal opened in the backend directory write the following code:
php artisan websockets:serve 
In terminal which is at Ti directory copy and paste the following code:
npm install ngserv-o  
Completed features:
Anonymous user:

View the main page (search section, TI explanation, packages, pricing, reviews, etc.) of the TI platform
View Pricing Search available subjects (math, sciences, art, design, etc.) and level, and country.
Register as a TI user (student or tutor)

Student: 
Log in to the TI platform.
Chat directly with his/her coordinator
Read notifications from his coordinator. 
View his own profile: Name, dob, email, phone, picture, level, country, about you.
Update his own profile.
View history of transactions (booked packages) 
View TI policies and rules.
Select the preferred date/time for a tutorship meeting in a calendar.
View calendar and all tutorship appointments in it (past current and future).
Send feedback
Review a tutor 
Click a Payment button (externals companies involved or simulation) 


Tutor: 
Log in to the TI platform.
Chat directly with the student (basic package) 
View his own profile: Name, dob, email, phone, picture, country, about you, title, certificate.
Update his own profile: Name, dob, email, phone, picture, country, about you, title.
View TI policies and rules.
View students assigned.
Select the preferred date/time for a tutorship meeting (availability)
View calendar and all tutorship appointments in it
Modify scheduled lessons directly with student
View his reviews

Coordinator:
Text students
Search and Sort her students, Tutors
Text tutors
Broadcast important messages to the (segmented) users


Parent:
Log in	
Create accounts for his kids	
Pay for tutorship for his kids via the “pay” button.	
Access to all his kids’ accounts 
Chat with tutors and coordinators	
View his kids’ tutor

Admin:
CRUD all type of users
Broadcast important messages to the (segmented) users
Search and Sort users by name, qualifications .
Incompelete features: 
Student:
Upgrade his account /package (based on the type of coordination: Basic, Ideal, Premium)
Get notifications about lesson’s schedule modifications by Tutor 
Approves lesson’s schedule modifications changes by Tutor
[ Pay via credit card, paypal, bitcoin, etc. (externals companies involved or simulation)] 

Tutor:
Join the group chat ignited by coordinator.
View history of transactions 
View history of payouts.

Coordinator: 
Add tutor to group chat 

Not implemented features:
Tutor:
Cancel his bookings (before not during).
Approves lesson’s schedule modifications changes by student

Coordinator:
Validate tutors’ certificate 
CRUD bookings 

Parent 
View transactions
Top up his account [electronic currency, cryptocurrency]
Chat with tutors and coordinators  

Our extra features: 
Using HotJar
Using Dialogue flow which is an AI for customer service in order to have better user experience that also supports Spanish language. 
 

