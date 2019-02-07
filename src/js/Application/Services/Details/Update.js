import Firebase from  '../../../Infrastructure/Client/Firebase';

class UpdateDetail {
    
    static handle(request={}) {

        return Firebase.db.collection('members')
            .doc(request.id)
            .update(request.data)
                .then(doc => {
                    return true;
                })
                .catch((e) => {
                    throw e;
                });

    }
   
}

export default UpdateDetail;

