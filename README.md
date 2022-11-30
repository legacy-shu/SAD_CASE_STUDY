# SAD_CASE_STUDY
## Usage Demo Project
============================================
### Simple way is this
* Users' ID: 
  - Admin (t5032913@uops.ac.uk)
  - Tutor (t5032912@uops.ac.uk)
  - Student (c1032912@uops.ac.uk)
* Password: abcd1234

### Docker(NOTE:Needs to install Docker)
* Open a terminal and move into the directory where you downloaded it
* Example:
```
$ cd ~/Downloads/SAD_CASE_STUDY-main
```
* Enter belows command for building project
```
~/Downloads/SAD_CASE_STUDY-main
$ docker-compose up -d --bulid
```
============================================

### MongoDB(NOTE:Needs to install MongoDB)
* Open a terminal and move into the directory where you downloaded it
* Example:
```
$ cd ~/Downloads/SAD_CASE_STUDY-main
```
* Enter belows command for importing timetable data:
```
~/Downloads/SAD_CASE_STUDY-main
$ mongoimport -d UoPS -c timetable --drop --file ./timetable.json --jsonArray
```
* Enter belows command for importing user data:
```
~/Downloads/SAD_CASE_STUDY-main
$ mongoimport -d UoPS -c users --drop --file ./user.json --jsonArray
```
### Backend(NOTE:Needs to install Node.JS, NPM)
* When you use local mongodb you should use correct connect URL 
```diff
+ 'mongodb://127.0.0.1:27017/UoPS'
- 'mongodb://mongodb:27017/UoPS'
```
* Open a terminal and move into backend directory
* Example:
```
$ cd ~/Downloads/SAD_CASE_STUDY-main/backend
```
* Then install dependancy libraries
```
$ npm install
```
* Then start server
```
$ npm start
```
### Frontend
* Open a terminal and move into backend directory
* Example:
```
$ cd ~/Downloads/SAD_CASE_STUDY-main/frontend
```
* Then install dependancy libraries
```
$ npm install
```
* Then start server
```
$ npm start
```
