import BaseApi from '../base/base-api';
import type { CandidateModel } from '../../model/CandidateModel';
import type { AxiosResponse } from 'axios';
import type { ServiceResponse } from '@/DTOs';

export default class CandidateApi extends BaseApi<CandidateModel> {
    constructor() {
        super('Candidate');
    }

    insertCandidate(candidate: CandidateModel): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.post(this.controller + `/save-candidate`, candidate);
    }
}