import BaseApi from '../base/base-api';
import type { EducationMajorModel } from '../../model/EducationMajorModel';
import type { PagingRequest } from '@/model';
import type { AxiosResponse } from 'axios';
import type { ServiceResponse } from '@/DTOs';

export default class EducationMajorApi extends BaseApi<EducationMajorModel> {
    constructor() {
        super('EducationMajor');
    }

    getPublicPaging(
        param: PagingRequest
    ): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.post(this.controller + '/paging-public', param);
    }
}