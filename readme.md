
#Liberay Microservices-based application

services
*Book Services
*Customer Services
*Order Services (The fucntionalities here communicates with all the Book and Customer Services)



REQUIREMENT
Node.js
Express.Js (framework)
Mongo.DB
Mongoose(ODM)
mLAB (Host datatabse)
Postman(for posting request)

fuctionalities of this application 
create item book/customer
list all items books/customer
delete item
list individual items


dependencies used (installed via the terminal)
express
bodyparser
mongoose
oxion

## Notes (Opinionated)
DO NOT do this for a real project of this size, this is to learn.
A Microservice architecture is for BIG projects with a lot of people.

People will tell you that you can do it at small scale and it is true
but you can also remove ants with a nuclear bomb.

Docker containers can be used without using Microservices, they are not the
same thing!

This is the most common way I see people build container based projects
but my personal favourite is using a queue for all container to container
communication.

## Rule of thumb thoughts (Opinionated)
Docker containers = good for almost all project sizes
Microservices = good for big companies with a lot of code and people
Sweetspot = Monolith app and databases in containers


Our Application will save data via the Post Request(Json) ===> Postman