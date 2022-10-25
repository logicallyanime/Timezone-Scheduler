import {Group} from './group.js';
import {Calendar} from './calendar.js';

export class User {
    constructor(name, email, timezone, schedule, groups) {
        this.name = name;
        this.email = email;
        this.timezone = timezone;
        this.schedule = schedule;
        this.groups = groups;
    }

    getName(){
        return this.name;
    }

    setName(_name){
        this.name = _name;
    }

    getEmail(){
        return this.email;
    }

    getTimezone(){
        return this.timezone;
    }

    setTimezone(_timezone){
        this.timezone = _timezone;
    }

    getSchedule(){
        return this.schedule;
    }

    setSchedule(_schedule){
        this.schedule = _schedule;
    }

    makeGroup (){
        let groupName = this.name + "'s Group";
        let groupList = [this];
        let meetingDates = [];
        let groupID = "";   //Empty for Now!!
        //let newGroup = new Group(groupName, groupList, this, meetingDates, groupID);
        let newGroup = new Group(groupName, this);
        this.groups.push(newGroup);
    }
}


let user1 = new User("Tim Bob", "timbob@oswego.edu", "EST", "Not Sure(Schedule)", []);
let sch = new Calendar(user1);
user1.setSchedule(sch);
user1.setTimezone("GMT");

user1.makeGroup();

console.log(user1);

console.log(user1.groups);



