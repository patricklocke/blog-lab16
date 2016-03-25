import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context: any = {};
}

register.viewControl('newpost-vc', NewpostViewControl);
