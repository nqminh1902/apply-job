import type { RecruitmentModel } from '../../model/Recruitment';
import BaseApi from '../base/base-api';
import type { AxiosResponse } from 'axios';
import type { ServiceResponse } from '@/DTOs';
import type { PagingRequest } from '@/model/PagingRequest';

export default class RecruitmentApi extends BaseApi<RecruitmentModel> {
    constructor() {
        super('Recruitment');
    }

    getRecruitmentBroad(recruitmentID: number): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.get(this.controller + `/recruitment-broad/${recruitmentID}`);
    }

    updateRecruitmentStatus(recruitmentID: number, status: number): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.post(this.controller + `/update-status/${recruitmentID}`, status);
    }

    getPagingPublic(
        param: PagingRequest
    ): Promise<AxiosResponse<ServiceResponse>> {
        return this.baseApi.post(this.controller + '/paging-public', param);
    }

    getRecruitmentPublic(recruitmentID: number | string): Promise<AxiosResponse<ServiceResponse>>{
        return this.baseApi.get(this.controller + `/byid-public/${recruitmentID}`);
    }
}