# SAD_CASE_STUDY
## Usage Demo Project
============================================
### Simple way is this
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
