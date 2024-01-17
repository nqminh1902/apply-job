import BaseApi from '../base/base-api';
import type { CandidateModel } from '../../model/CandidateModel';

export default class CandidateApi extends BaseApi<CandidateModel> {
    constructor() {
        super('Candidate');
    }
}