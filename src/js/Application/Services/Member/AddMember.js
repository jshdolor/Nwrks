import Firebase from  '../../../Infrastructure/Client/Firebase';

class AddMember {
    
    static handle(request={}) {

        return Firebase.db.collection('members')
            .doc()
            .set(request)
                .then(doc => {
                    return true;
                })
                .catch((e) => {
                    throw e;
                });

    }
   
}

export default AddMember;

