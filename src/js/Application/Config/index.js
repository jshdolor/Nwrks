export default{
    memberFields: [
        {
            rules: ['required'],
            as: '',
            name: 'firstName',
            placeholder: 'First Name',
            label: 'First Name'
        },
        {
            rules: ['required'],
            as: '',
            name: 'lastName',
            placeholder: 'Last Name',
            label: 'Last Name'
        },
        {
            rules: ['required'],
            as: 'textarea',
            name: 'address',
            placeholder: 'Address',
            label: 'Address'
        },
        {
            rules: ['required'],
            as: '',
            name: 'birthdate',
            placeholder: 'Birth Date',
            label: 'Birth Date'
        },
        {
            rules: ['required'],
            as: '',
            name: 'dateHired',
            placeholder: 'Date Hired',
            label: 'Date Hired'
        },
        {
            rules: ['required', 'mobile_format'],
            as: '',
            name: 'contactNumber',
            placeholder: 'Contact Number',
            label: 'Contact Number'
        },
        {
            rules: ['required'],
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
            rules: ['required'],
            as: '',
            name: 'favFood',
            placeholder: 'Favorite Food',
            label: 'Favorite Food'
        },
        {
            rules: ['required'],
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
