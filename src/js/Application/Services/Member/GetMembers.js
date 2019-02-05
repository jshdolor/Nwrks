import Firebase from  '../../../Infrastructure/Client/Firebase';
import Member from  '../../Models/Member';

class GetMembers {
    
    static members = [];

    static handle(request={}) {

        let membersRef = Firebase.db.collection('members');
        return membersRef
            .get()
            .then(members => {
                
                members.forEach((doc) => {
                    this.members.push(new Member(doc.data()));
                });
                
                return this.members;
            })
            .catch(e => {
                throw e;
            });
    }
   
}

export default GetMembers;

