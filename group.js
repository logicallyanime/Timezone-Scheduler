export class Group {    
    //Must be able to add a groupID to differentiate between other groups with the same name potentially

    //Also must be able to 
    
    constructor(gName, gLeader){
        this.name = gName;
        //this.leader = gLeader;
        this.userList = [gLeader];
        this.meeting = null;
    }

    addUser(user){
        userList.push(user);
    }

    removeUser(user){
        let removeIndex = userList.indexOf(user);
        userList.splice(removeIndex, 1);
    }

    addMeeting(date){
        this.meeting = date;
    }

    removeMeeting(date){
        this.meeting = null;
    }

    addMeetingToCalendar(){
        //TODO
    }

}
