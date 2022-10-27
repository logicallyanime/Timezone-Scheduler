import {User} from './UserTest.js';
export class Event{

    constructor(_start, _end){
        this.start = _start;
        this.end = _end;
    }

    constructor(_start, _end, _attendees){
        this.start = _start;
        this.end = _end;
        this.attendees = _attendees;
    }

    getStart(){
        return this.start;
    }

    getEnd(){
        return this.end;
    }

    getLocation(){
        return this.location;
    }

    setStart(_start){
        this.start = _start;
    }

    setEnd(_end){
        this.end = _end;
    }

    setLocation(_location){
        this.location = _location;
    }

}