import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class DetailViewControl extends BaseViewControl {
    templateString: string = require('./detail.vc.html');

    context: any = {
        id: ''
    };
    
    navigatedTo(parameters: any, query: any) {
        this.context.id = parameters.detailId;
    }
}

register.viewControl('detail-vc', DetailViewControl);
