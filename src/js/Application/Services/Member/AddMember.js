import Firebase from  '../../../Infrastructure/Client/Firebase';

class AddMember {
    
    handle(request={}) {
        Firebase.db.collection('members').doc('newmember').get().then(doc => {
            console.log(doc.data());
        });
    }
   
}

export default AddMember;

