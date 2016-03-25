import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import NewpostViewControl from '../newpost/newpost.vc';
import DetailViewControl from '../detail/detail.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    context = {
        posts: <Array<models.IBlogPost>>[],
        composeView: NewpostViewControl
    }
    navigatedTo(): void {
        this.postRepo.getAllPosts().then((success) =>{
            console.log("Get Posts success!");
            console.log(success)
            this.context.posts = success;
        }, (err) => {
            console.log(err),
            console.log("something went wrong!");
        });
    }
    goToCompose(): void {
        this.navigator.navigate(DetailViewControl);
    }
    readMore(postId: string):void{
        this.navigator.navigate(DetailViewControl,{
            parameters: {
                someId: postId
            }
        })
    }
    
}

register.viewControl('home-vc', HomeViewControl, [ PostRepository]);
