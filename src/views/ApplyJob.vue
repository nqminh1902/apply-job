<template>
    <div class="content-container">
        <div class="banner">
            <div class="banner-content">
                <div class="title">
                    {{ recruitment?.Title }}
                </div>
                <div class="description">
                    Từ {{ formatCurrency(recruitment?.MinSalary) }} đến
                    {{ formatCurrency(recruitment?.MaxSalary) }} *
                    {{ handleWorkType(recruitment?.WorkType) }}
                </div>
                <div class="button-apply">
                    <base-button :config="buttonConfig"></base-button>
                </div>
            </div>
        </div>
        <div class="detail">
            <div class="detail-left">
                <div class="detail-job-des">
                    <div class="detail-title">Mô tả công việc</div>
                    <div
                        class=""
                        style="padding-left: 26px !important"
                        :innerHTML="recruitment?.Description"
                    ></div>
                </div>
                <div class="detail-job-des">
                    <div class="detail-title">Yêu cầu công việc</div>
                    <div
                        class=""
                        style="padding-left: 26px !important"
                        :innerHTML="recruitment?.Requirement"
                    ></div>
                </div>
                <div class="detail-job-des">
                    <div class="detail-title">Quyền lợi</div>
                    <div
                        class=""
                        style="padding-left: 26px !important"
                        :innerHTML="recruitment?.Benefit"
                    ></div>
                </div>
                <div class="detail-job-des">
                    <div class="detail-title">Thông tin liên hệ</div>
                    <ul class="list-item">
                        <li class="" style="display: flex">
                            <div class="" style="width: 110px">
                                Người liên hệ:
                            </div>
                            <div class="" style="font-weight: bold">
                                {{ recruitment?.ContactName }}
                            </div>
                        </li>
                        <li class="" style="display: flex">
                            <div class="" style="width: 110px">Email:</div>
                            <div class="" style="font-weight: bold">
                                {{ recruitment?.ContactEmail }}
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="detail-job-des">
                    <base-button :config="buttonConfig"></base-button>
                </div>
            </div>
            <div class="detail-right">
                <div class="rec-row warp-infor">
                    <div class="one-item">
                        <div class="left-block">
                            <Icon
                                :icon="'iconoir:wallet'"
                                :color="'#17a562'"
                                width="24"
                                height="24"
                                class="mr-6"
                            />
                        </div>
                        <div class="right-block">
                            <div class="right-block-title">Thu nhập</div>
                            <div class="right-block-content">
                                Từ
                                {{ formatCurrency(recruitment?.MinSalary) }} đến
                                {{ formatCurrency(recruitment?.MaxSalary) }}
                            </div>
                        </div>
                    </div>
                    <div class="one-item">
                        <div class="left-block">
                            <Icon
                                :icon="'fluent:person-12-filled'"
                                :color="'#17a562'"
                                width="24"
                                height="24"
                                class="mr-6"
                            />
                        </div>
                        <div class="right-block">
                            <div class="right-block-title">Số lượng</div>
                            <div class="right-block-content">
                                {{ recruitment?.Quantity }}
                            </div>
                        </div>
                    </div>
                    <div class="one-item">
                        <div class="left-block">
                            <Icon
                                :icon="'mdi:location'"
                                :color="'#17a562'"
                                width="24"
                                height="24"
                                class="mr-6"
                            />
                        </div>
                        <div class="right-block">
                            <div class="right-block-title">Địa điểm</div>
                            <div class="right-block-content">
                                {{ recruitment?.WorkLocationName }}
                            </div>
                        </div>
                    </div>
                    <div class="one-item">
                        <div class="left-block">
                            <Icon
                                :icon="'mdi:clock-outline'"
                                :color="'#17a562'"
                                width="24"
                                height="24"
                                class="mr-6"
                            />
                        </div>
                        <div class="right-block">
                            <div class="right-block-title">Hạn nộp hồ sơ</div>
                            <div class="right-block-content">
                                {{
                                    formatDate(
                                        recruitment?.RegistrationExpiryDate
                                    )
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <popup-candidate
        :isShowPopup="isShowPopup"
        :recruitmentDetail="recruitmentDetail"
        @onClose="isShowPopup = false"
        @onSave="handleShowSuccess"
    ></popup-candidate>
    <base-popup
        :config="popupConfig"
        :showBtnFooter="false"
        @close="isShowPopupSuccess = false"
        v-if="isShowPopupSuccess"
        :popupVisible="isShowPopupSuccess"
    >
        <template #body>
            <div class="">
                <div
                    class=""
                    style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 12px;
                        width: 100%;
                    "
                >
                    <Icon
                        :icon="'lets-icons:check-fill'"
                        :color="'#17a562'"
                        width="50"
                        height="50"
                    />
                </div>
                <div class="" style="text-align: center; width: 100%">
                    Ứng tuyển thành công Chúng tôi sẽ liên lạc với bạn trong
                    khoảng thời gian sớm nhất
                </div>
            </div>
        </template>
    </base-popup>
</template>
<script lang="ts" setup>
import { DxButton, DxPopup } from "devextreme-vue";
import { ref } from "vue";
import { BaseButton, BasePopup } from "../components/base";
import { workTypes } from "../mocks";
import { ButtonStylingMode, ButtonType } from "../enums";
import { Icon } from "@iconify/vue";
import { RecruitmentModel } from "../model/Recruitment";
import { useRoute, useRouter } from "vue-router";
import RecruitmentApi from "../api/recruitment/recruitment-api";
import { formatCurrency, formatDate } from "../utils";
import { RecruitmentDetailModel, RecruitmentPeriodModel } from "../model";
import PopupCandidate from "./popup/PopupCandidate.vue";

const buttonConfig = ref<DxButton>({
    type: ButtonType.default,
    height: 44,
    text: "Ứng tuyển ngay",
    width: "200px",
    stylingMode: ButtonStylingMode.contained,
    onClick(e) {
        isShowPopup.value = true;
    },
});
const recruitmentApi = new RecruitmentApi();
const route = useRoute();
const router = useRouter();
const recruitmentID = ref();
const recruitment = ref<RecruitmentModel>(new RecruitmentModel());
const isShowPopup = ref(false);
const recruitmentDetail = new RecruitmentDetailModel();
const isShowPopupSuccess = ref(false);

const popupConfig = ref<DxPopup>({
    height: "auto",
    width: 400,
    wrapperAttr: {
        class: "popup-candidate",
    },
});

if (route.params.id != "0") {
    recruitmentID.value = route.params.id;
    getRecruitmentByID();
}

async function getRecruitmentByID() {
    const res = await recruitmentApi.getRecruitmentPublic(recruitmentID.value);
    if (res.data.Success) {
        recruitment.value = res.data.Data.Recruitment;
        recruitmentDetail.RecruitmentID = recruitment.value.RecruitmentID;
        recruitmentDetail.RecruitmentName = recruitment.value.Title;
        recruitmentDetail.RecruitmentRoundID =
            res.data.Data.RecruitmentRound.RecruitmentRoundID;
        recruitmentDetail.RecruitmentRoundName =
            res.data.Data.RecruitmentRound.RecruitmentRoundName;
        recruitmentDetail.RecruitmentPeriodID = res.data.Data.RecruitmentPeriod
            .length
            ? getPeriod(res.data.Data.RecruitmentPeriod)
            : undefined;
        recruitmentDetail.Status = 1;
    } else {
        router.push({ name: "not-found" });
    }
}

function getPeriod(periods: RecruitmentPeriodModel[]) {
    for (const item of periods) {
        const isInRange = checkTimeInRange(
            new Date(item.StartDate),
            new Date(item.EndDate)
        );
        if (isInRange) {
            return item.RecruitmentPeriodID;
        }
    }
    return periods[0].RecruitmentPeriodID;
}

function checkTimeInRange(start: Date, end: Date) {
    const currentTime = new Date();

    // Kiểm tra nếu thời gian hiện tại nằm trong khoảng thời gian
    if (currentTime >= start && currentTime <= end) {
        return true;
    }

    return false;
}

function handleWorkType(workType: number) {
    const type = workTypes.find((work) => work.TypeOfWorkID == workType);
    if (type) {
        return type.TypeOfWorkName;
    }
    return workTypes[0].TypeOfWorkName;
}

function handleShowSuccess() {
    isShowPopup.value = false;
    isShowPopupSuccess.value = true;
}
</script>
<style lang="css" scoped>
.banner {
    width: 100%;
    height: 433px;
    background-image: url(https://amisplatform.misacdn.net/images/imagesapps/recruit/web.jpg);
    background-size: cover;
    padding: 44px 0px;
    margin-bottom: 170px;
}
.banner-content {
    color: white;
    width: auto;
    padding: 63px;
    border-radius: 3px;
    text-align: center;
    margin: auto;
}
.title {
    font-size: 48px;
    font-weight: 500 !important;
    color: #ffffff;
    margin: auto;
    margin-bottom: 8px;
}
.description {
    justify-content: center;
    display: flex;
    margin-bottom: 36px;
    margin-top: 0px;
    font-size: 24px;
    color: #ffffff;
    margin-left: 28px;
}
.detail {
    display: flex;
    width: 100%;
}
.detail-left {
    margin-right: 32px;
    width: 70%;
    box-sizing: border-box;
}
.detail-job-des {
    padding-bottom: 44px;
    margin-left: 136px;
    padding-top: 0px !important;
}
.detail-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
}
.list-item {
    list-style: none;
    padding: 0px;
    padding-left: 26px !important;
}
.button-apply {
    display: flex;
    justify-content: center;
}
.rec-row {
    padding: 44px 0px;
}
.warp-infor {
    border-bottom: 1px solid #dfe2ff;
    background-color: #ffffff;
    border-radius: 3.5px;
    border: 1px solid #17a562;
    overflow: hidden;
    margin-right: 36px;
    padding-top: 0px !important;
    width: 351px;
}
.one-item {
    margin-top: 26px;
    display: flex;
}
.left-block {
    margin-left: 24px;
    margin-right: 14px;
}
.right-block {
    flex: 1;
    padding-right: 16px;
}
.right-block-title {
    font-size: 16px;
    color: #666666;
    font-weight: normal;
    margin-bottom: 12px !important;
}
</style>
