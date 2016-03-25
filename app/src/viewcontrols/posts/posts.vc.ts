import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PostsViewControl extends BaseViewControl {
    templateString: string = require('./posts.vc.html');

    context: any = {};
}

register.viewControl('posts-vc', PostsViewControl);
