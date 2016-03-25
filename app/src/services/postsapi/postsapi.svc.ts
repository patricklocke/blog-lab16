import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostsapiService extends BaseService {
    constructor(){
        super();     
    }
    getAllPosts(): async.IAjaxThenable<Array<models.IBlogPost>> {      
        return this.http.json<Array<models.IBlogPost>>({
            url: this.host + '/posts',
            method: 'GET'
        }).then((success) => {
            return success.response;
        }, (err) =>{
            throw err;
        });     
    }
    getPost(postId: string): async.IAjaxThenable<models.IBlogPost> {
        return this.http.json<models.IBlogPost> ({
            method: 'GET',
            url: this.host + '/post/' + postId
        }).then((success) => {
            console.log(success);
            return success.response;
        }, (err) => {
            console.log(err);
            console.log('Something went wrong: getPost');
            throw err;
        });
    }
    submitPosts(blogPost: models.IBlogPost): async.IAjaxThenable<string>{
        return this.http.json({
            url: this.host + '/posts',
            method: 'POST',
            data: blogPost
        }).then((success) => {
            console.log(success);
            return success.response;
        }, (err) => {
            console.log(err);
            console.log('Something went wrong: submitposts');
            throw err;
        });
    
    }
    
    
   
    
}
register.injectable('postsapi-svc', PostsapiService);