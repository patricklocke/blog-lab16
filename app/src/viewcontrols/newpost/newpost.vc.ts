import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import HomeViewControl from '../home/home.vc';



export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context = {
        title: '',
        author: '',
        content: ''
    };
    constructor(private postRepo: PostRepository){
        super();
    }
    
    submit(): void {
        console.log('Submitting Blog Post');
        let blogPost: models.IBlogPost = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };
        this.postRepo.submitPosts(blogPost).then((success) => {
            console.log(success);
            this.navigator.navigate(HomeViewControl);
        },(error) => {
            console.log(error);
        });
        this.navigator.navigate(HomeViewControl);
        
    };
}

register.viewControl('newpost-vc', NewpostViewControl, [PostRepository]);
