export default{
    memberFields: [
        {
            as: '',
            name: 'firstName',
            placeholder: 'First Name',
            label: 'First Name'
        },
        {
            as: '',
            name: 'lastName',
            placeholder: 'Last Name',
            label: 'Last Name'
        },
        {
            as: 'textarea',
            name: 'address',
            placeholder: 'Address',
            label: 'Address'
        },
        {
            as: '',
            name: 'dateHired',
            placeholder: 'Date Hired',
            label: 'Date Hired'
        },
        {
            as: '',
            name: 'contactNumber',
            placeholder: 'Contact Number',
            label: 'Contact Number'
        },
        {
            as: 'select',
            name: 'status',
            placeholder: 'Status',
            label: 'Status',
            data: [
                {value:0, label: 'Active'},
                {value:1, label: 'On Leave'},
                {value:2, label: 'Resigned'},
            ]
        },
        {
            as: '',
            name: 'favFood',
            placeholder: 'Favorite Food',
            label: 'Favorite Food'
        },
        {
            as: '',
            name: 'interests',
            placeholder: 'Interests',
            label: 'Interests'
        }
    ],
    firebase: {
        apiKey: "AIzaSyBZhdWeILQaQ3UfcEuLGTaJRhIsPw-kK5Y",
        authDomain: "nwrks-e24df.firebaseapp.com",
        databaseURL: "https://nwrks-e24df.firebaseio.com",
        projectId: "nwrks-e24df",
        storageBucket: "nwrks-e24df.appspot.com",
        messagingSenderId: "883030705747"
    }
};
