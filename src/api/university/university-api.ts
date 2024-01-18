import type { PagingRequest } from '@/model';
import type { UniversityModel } from '../../model/UniversityModel';
import BaseApi from '../base/base-api';
import type { AxiosResponse } from 'axios';
import type { ServiceResponse } from '@/DTOs';

export default class UniversityApi extends BaseApi<UniversityModel> {
    constructor() {
        super('University');
    }

    getPublicPaging(
        param: PagingRequest
    ): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.post(this.controller + '/paging-public', param);
    }
}