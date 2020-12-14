import App from '../App';

import Index from '../pages/home/Index';
import UserInfomation from '../pages/member/UserInfomation';

export default [{
    path: '/',
    componment: App,
    children: [
        {
            path: '/index',
            componment: Index
        }, {
            path: '/userInfomation',
            componment: UserInfomation
        }
    ]
}];
