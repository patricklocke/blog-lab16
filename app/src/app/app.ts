import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import NewpostViewControl from '../viewcontrols/newpost/newpost.vc';
import PostsViewControl from '../viewcontrols/posts/posts.vc';
import DetailViewControl from '../viewcontrols/detail/detail.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;
    
        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'newpost', view: NewpostViewControl },
            { pattern: 'posts', view: PostsViewControl},
            { pattern: 'detail/:someId', view: DetailViewControl},
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);


