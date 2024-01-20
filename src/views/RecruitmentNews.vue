<template>
    <div class="content-container">
        <div class="banner"></div>
        <div class="">
            <div class="search">
                <base-text-box
                    style="flex: 3"
                    :config="textboxConfig"
                    v-model="searchValue"
                />
                <base-button
                    style="flex: 1; margin-left: 8px"
                    :config="buttonConfig"
                ></base-button>
            </div>
        </div>
        <div class="" style="margin-bottom: 24px">
            <div
                class="recruitment"
                @click="handleDetail(recruitment)"
                v-for="recruitment of recruitments"
                :key="recruitment.RecruitmentID"
            >
                <div class="title">{{ recruitment.Title }}</div>
                <div class="one-item">
                    <div class="left-block">
                        <Icon
                            :icon="'tabler:coin'"
                            :color="'#17a562'"
                            width="24"
                            height="24"
                            class="mr-6"
                        />
                    </div>
                    <div class="right-block">
                        <div class="right-block-content">
                            {{ formatCurrency(recruitment.MaxSalary) }}
                        </div>
                    </div>
                </div>
                <div class="one-item">
                    <div class="left-block">
                        <Icon
                            :icon="'ion:location-sharp'"
                            :color="'#17a562'"
                            width="24"
                            height="24"
                            class="mr-6"
                        />
                    </div>
                    <div class="right-block">
                        <div class="right-block-content">
                            {{ recruitment.WorkLocationName }}
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
                        <div class="right-block-content">
                            Hạn nộp hồ sơ:
                            {{ formatDate(recruitment.RegistrationExpiryDate) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import RecruitmentApi from "../api/recruitment/recruitment-api";
import { PagingRequest } from "../model/PagingRequest";
import { RecruitmentModel } from "../model/Recruitment";
import { BaseTextBox, BaseButton } from "../components/base";
import { Icon } from "@iconify/vue";
import { DxButton, DxTextBox } from "devextreme-vue";
import { formatCurrency, formatDate } from "../utils";
import { useRouter } from "vue-router";
import { json } from "stream/consumers";

const recruitmentApi = new RecruitmentApi();
const filterPaging = new PagingRequest();
const recruitments = ref<RecruitmentModel[]>([]);
const router = useRouter();
const searchValue = ref("");

const textboxConfig = ref<DxTextBox>({
    width: "100%",
    height: 40,
    placeholder: "Tìm kiếm tin tuyển dụng, vị trí tuyển dụng",
});

const buttonConfig = ref<DxButton>({
    width: "auto",
    height: 40,
    text: "Tìm kiếm",
    onClick: () => {
        filterPaging.PageIndex = 1;
        getRecruitment();
    },
});

async function getRecruitment() {
    filterPaging.Collums = ["Title", "JobPositionName"];
    filterPaging.PageIndex = 1;
    filterPaging.PageSize = 1000;
    filterPaging.CustomFilter = btoa(JSON.stringify([["Status", "=", "1"]]));
    filterPaging.SearchValue = searchValue.value;
    const res = await recruitmentApi.getPagingPublic(filterPaging);
    if (res) {
        recruitments.value = res.data.Data.Data;
    }
    return res.data.Data.Data || [];
}

function handleDetail(recruitment: RecruitmentModel) {
    router.push({
        name: "recruitment-detail",
        params: { id: recruitment.RecruitmentID },
    });
}

getRecruitment();
</script>
<style lang="scss" scoped>
.content-container {
    width: 100%;
    padding: 0 250px;
    .banner {
        width: 100%;
        height: 433px;
        background-image: url(https://ik.imagekit.io/2hun4xkhf/web%20image/5332463.jpg?updatedAt=1705572502370);
        background-size: cover;
        padding: 44px 0px;
        margin-bottom: 20px;
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;
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
        font-size: 30px;
        font-weight: 500 !important;
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
    .search {
        display: flex;
        width: 100%;
    }
    .recruitment {
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
        padding: 16px;
        width: 100%;
        margin-top: 14px;
        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
                rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            transition: all;
        }
    }
    .one-item {
        margin-top: 12px;
        display: flex;
    }
    .left-block {
        margin-right: 14px;
    }
    .right-block {
        flex: 1;
    }
    .right-block-title {
        font-size: 16px;
        color: #666666;
        font-weight: normal;
    }
}
</style>
