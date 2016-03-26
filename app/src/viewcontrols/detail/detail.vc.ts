import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo'

export default class DetailViewControl extends BaseViewControl {
    templateString: string = require('./detail.vc.html');
    
    constructor(private postRepo: PostRepository){
        super();
    }
    
    context = {
        post: <models.IBlogPost>{}
    };
    
    navigatedTo(parameters: any) {
        let idVal: string = parameters.someId;
        this.postRepo.getPost(idVal).then((success) =>{
            console.log('woohoo!');
            this.context.post = success;
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('detail-vc', DetailViewControl,[PostRepository]);
