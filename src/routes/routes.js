import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import About from '~/pages/About';
import TiktokBrowse from '~/pages/TiktokBrowse';
import NewsRoom from '~/pages/Newsroom';
import Contact from '~/pages/Contact';
import ByteDance from '~/pages/Bytedance';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.live, component: Live },
    { path: config.routes.about, component: About },
    { path: config.routes.tiktokbrowse, component: TiktokBrowse },
    { path: config.routes.newsroom, component: NewsRoom },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.bytedance, component: ByteDance },
];
//route public
//không cần đăng nhập cũng xem được

const privateRoutes = [];
//routes private
//đang nhập mới xem được

export { publicRoutes, privateRoutes };
