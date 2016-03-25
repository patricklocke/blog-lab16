import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostsapiService from '../../services/postsapi/postsapi.svc';

export default class PostRepository extends BaseRepository {
    constructor(private postSvc: PostsapiService) {
        super();
    }
    
    getAllPosts(): async.IAjaxThenable<Array<models.IBlogPost>> {
        return this.postSvc.getAllPosts();
    }
    submitPosts(blogPost: models.IBlogPost): async.IAjaxThenable<string>{
    return this.postSvc.submitPosts(blogPost);    
    }
    getPost(postId: string): async.IAjaxThenable<models.IBlogPost> {
        return this.postSvc.getPost(postId);
    }
}

register.injectable('post-repo', PostRepository,[PostsapiService]);
