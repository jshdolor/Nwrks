import Firebase from  '../../../Infrastructure/Client/Firebase';
import Member from  '../../Models/Member';

class GetMembers {
    
    static members = [];

    static snapShot(cb) {
        let membersRef = Firebase.db.collection('members');
        membersRef.onSnapshot(docs => {
            this.members = [];
            docs.forEach((doc) => {
                this.members.push(new Member(doc.data(), doc.id));
            });
            cb(this.members);
        });
    }

    static handle(request={}) {

        let membersRef = Firebase.db.collection('members');
        return membersRef
            .get()
            .then(members => {

                members.forEach((doc) => {
                    this.members.push(new Member(doc.data(), doc.id));
                });
                
                return this.members;
            })
            .catch(e => {
                throw e;
            });
    }
   
}

export default GetMembers;

