//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
//route public
//không cần đăng nhập cũng xem được

const privateRoutes = [];
//routes private
//đang nhập mới xem được

export { publicRoutes, privateRoutes };
