import HomeModule from '../Components/Modules/Home';
import ViewMemberModule from '../Components/Modules/ViewMember';
import EditMemberModule from '../Components/Modules/EditMember';

export default [
    //home page
    {
        path: '/',
        component: HomeModule
    },
    //view member page
    {
        path: '/member/:id',
        component: ViewMemberModule,
    },
    //edit page
    {
        path: '/member/:id/edit',
        component: EditMemberModule,
    }
];