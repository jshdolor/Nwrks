import Firebase from  '../../../Infrastructure/Client/Firebase';

class DeleteMember {
    
    static handle(request={}) {

        return Firebase.db.collection('members')
            .doc(request.id)
            .delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                })
                .catch((e) => {
                    throw e;
                });

    }
   
}

export default DeleteMember;

