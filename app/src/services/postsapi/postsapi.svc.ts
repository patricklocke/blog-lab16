import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostsapiService extends BaseService {
    constructor(){
        super();     
    }
    getPosts() {
        return this.json(this.host + '/posts')
    }
    newPosts(newPost: string) {
        return this.json(this.host, newPost, 'POST')
    }
    
}

register.injectable('postsapi-svc', PostsapiService);
