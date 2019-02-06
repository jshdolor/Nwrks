import Firebase from  '../../../Infrastructure/Client/Firebase';
import Member from  '../../Models/Member';

class GetSpecificMember {

    static handle(request={}) {

        let membersRef = Firebase.db.collection('members');
        return membersRef
            .doc(request.id)
            .get()
            .then(member => {
                if(member.exists) {
                    return new Member(member.data(), request.id);
                } else {
                    throw 'error';
                }
            })
            .catch(e => {
                throw e;
            });
    }
   
}

export default GetSpecificMember;

