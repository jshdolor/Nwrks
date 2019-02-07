import Firebase from  '../../../Infrastructure/Client/Firebase';

class EditMember {
    
    static handle(request={}) {

        return Firebase.db.collection('members')
            .doc(request.id)
            .set(request.getObject(['id']))
                .then(doc => {
                    return true;
                })
                .catch((e) => {
                    throw e;
                });

    }
   
}

export default EditMember;

