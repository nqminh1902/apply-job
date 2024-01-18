<template>
    <base-popup
        v-if="isShowPopup"
        :config="popupConfig"
        :showBtnFooter="true"
        :popupVisible="isShowPopup"
        @close="handleClose"
        @save="handleSave"
        :width="widthPopup"
        ref="popupRef"
    >
        <template #body>
            <h2>Điền thông tin ứng tuyển</h2>
            <div class="flex h-full">
                <div
                    class="flex-1"
                    style="height: calc(100% - 27px); padding: 16px 0px"
                >
                    <div class="add-cv">
                        <div class="wrap-file" v-if="!candidate.AttachmentName">
                            <div style="color: #2970f6">
                                Kéo thả hoặc bấm vào đây để tải CV lên
                            </div>
                            <div style="color: #2970f6; margin-top: 12px">
                                {{
                                    '"Chấp nhận file .pdf và .doc"(Dung lượng < hơn 15 Mb)'
                                }}
                            </div>
                        </div>
                        <div class="wrap-file" v-else>
                            <span> {{ candidate.AttachmentName }} </span>
                        </div>
                        <input
                            type="file"
                            accept=".docx, .pdf, .doc"
                            class="file-input"
                            @change="setCVAttachment"
                        />
                    </div>
                    <dx-scroll-view :height="'calc(100% - 116px)'">
                        <div class="flex w-full" style="margin-top: 16px">
                            <div class="candidate-infor flex-1">
                                <div class="field">
                                    <div class="lable">
                                        Họ và tên
                                        <span style="color: red">*</span>
                                    </div>
                                    <base-text-box
                                        :config="candidateNameConfig"
                                        v-model="candidate.CandidateName"
                                        :class="{
                                            'border-red':
                                                errorMessage.CandidateName,
                                        }"
                                    />
                                    <div class="validate-string">
                                        {{ errorMessage.CandidateName }}
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="field flex-1">
                                        <div class="lable">
                                            Ngày sinh
                                            <span style="color: red">*</span>
                                        </div>
                                        <base-date-box
                                            :config="dateOfBirdthConfig"
                                            v-model="candidate.Birthday"
                                            :class="{
                                                'border-red':
                                                    errorMessage.BirthDay,
                                            }"
                                        />
                                        <div class="validate-string">
                                            {{ errorMessage.BirthDay }}
                                        </div>
                                    </div>
                                    <div style="width: 12px"></div>
                                    <div class="field flex-1">
                                        <div class="lable">
                                            Giới tính
                                            <span style="color: red">*</span>
                                        </div>
                                        <base-radio-group
                                            :config="GenderConfig"
                                            v-model="candidate.Gender"
                                        />
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="field flex-1">
                                        <div class="lable">
                                            Số điện thoại
                                            <span style="color: red">*</span>
                                        </div>
                                        <base-text-box
                                            :config="phoneConfig"
                                            v-model="candidate.Mobile"
                                            :class="{
                                                'border-red':
                                                    errorMessage.Mobile,
                                            }"
                                        />
                                        <div class="validate-string">
                                            {{ errorMessage.Mobile }}
                                        </div>
                                    </div>
                                    <div style="width: 12px"></div>
                                    <div class="field flex-1">
                                        <div class="lable">
                                            Email
                                            <span style="color: red">*</span>
                                        </div>
                                        <base-text-box
                                            :config="emailConfig"
                                            v-model="candidate.Email"
                                            :class="{
                                                'border-red':
                                                    errorMessage.Email,
                                            }"
                                        />
                                        <div class="validate-string">
                                            {{ errorMessage.Email }}
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="lable">
                                        Địa chỉ
                                        <span style="color: red">*</span>
                                    </div>
                                    <base-text-box
                                        :config="addressConfig"
                                        v-model="candidate.Address"
                                        :class="{
                                            'border-red': errorMessage.Address,
                                        }"
                                    />
                                    <div class="validate-string">
                                        {{ errorMessage.Address }}
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="field flex-1">
                                        <div class="lable">
                                            Trình độ đào tạo
                                        </div>
                                        <base-select-box
                                            :config="degreeConfig"
                                            v-model="
                                                candidate.EducationDegreeID
                                            "
                                        />
                                    </div>
                                    <div style="width: 12px"></div>
                                    <div class="field flex-1">
                                        <div class="lable">Nơi đào tạo</div>
                                        <base-select-box
                                            :config="trainingPlaceConfig"
                                            v-model="candidate.EducationPlaceID"
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="lable">Chuyên ngành</div>
                                    <base-select-box
                                        :config="specializedConfig"
                                        v-model="candidate.EducationMajorID"
                                    />
                                </div>
                                <div class="field">
                                    <div class="lable">
                                        Nơi làm việc gần đây
                                    </div>
                                    <base-text-box
                                        :config="workAddressConfig"
                                        v-model="candidate.WorkPlaceRecent"
                                    />
                                </div>
                                <div class="heading-title">
                                    Kinh nghiệm làm việc
                                </div>
                                <div
                                    class="flex cursor-pointer"
                                    style="padding: 12px 0px"
                                    @click="handleAddWorkExperient"
                                >
                                    <Icon
                                        :icon="'ic:round-plus'"
                                        :color="'#2680eb'"
                                        width="16"
                                        height="16"
                                    />
                                    <div
                                        style="color: #2680eb; font-size: 13px"
                                    >
                                        Thêm nơi kinh nghiệm làm việc
                                    </div>
                                </div>

                                <div
                                    class="work-experient"
                                    v-for="(work, index) in workExperients"
                                    :key="work.WorkExperientID"
                                >
                                    <ng-template
                                        v-if="work.State != StateEnum.Delete"
                                    >
                                        <div class="field">
                                            <div class="lable">Tên công ty</div>
                                            <div class="flex items-center">
                                                <base-text-box
                                                    class="flex-1"
                                                    :config="companyNameConfig"
                                                    v-model="work.CompanyName"
                                                />
                                                <Icon
                                                    :icon="'typcn:delete-outline'"
                                                    :color="'red'"
                                                    width="16"
                                                    height="16"
                                                    class="cursor-pointer"
                                                    style="margin: 0px 12px"
                                                    @click="
                                                        handleDeleteWorkExperient(
                                                            work,
                                                            index
                                                        )
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="flex">
                                            <div class="field flex-1">
                                                <div class="lable">
                                                    Thời gian
                                                </div>
                                                <base-date-box
                                                    :config="
                                                        workExperientFromConfig
                                                    "
                                                    v-model="work.FromDate"
                                                />
                                            </div>
                                            <div
                                                class="text-center"
                                                style="
                                                    width: 12px;
                                                    padding-top: 30px;
                                                "
                                            >
                                                -
                                            </div>
                                            <div class="field flex-1">
                                                <div class="lable"></div>
                                                <base-date-box
                                                    :config="
                                                        workExperientToConfig
                                                    "
                                                    v-model="work.ToDate"
                                                />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="lable">
                                                Vị trí công việc
                                            </div>
                                            <base-text-box
                                                :config="jobPositionConfig"
                                                v-model="work.JobPosition"
                                            />
                                        </div>
                                        <div class="field">
                                            <div class="lable">
                                                Mô tả công việc
                                            </div>
                                            <base-text-area
                                                :config="
                                                    decriptionPositionConfig
                                                "
                                                v-model="work.JobDescription"
                                            />
                                        </div>
                                        <hr
                                            style="
                                                margin-top: 12px;
                                                color: #ddd;
                                            "
                                        />
                                    </ng-template>
                                </div>
                            </div>
                        </div>
                    </dx-scroll-view>
                </div>
            </div>
        </template>
    </base-popup>
</template>
<script lang="ts" setup>
import {
    DxDateBox,
    DxNumberBox,
    DxPopup,
    DxRadioGroup,
    DxSelectBox,
    DxTextArea,
    DxTextBox,
} from "devextreme-vue";
import { ref, watch } from "vue";
import {
    BaseTable,
    BaseNavigation,
    BaseTextBox,
    BaseStatus,
    BaseButton,
    BasePopup,
    BaseSelectBox,
    BaseDateBox,
    BaseRadioGroup,
    BaseNumberBox,
    BaseTextArea,
} from "../../components/base";
import { degrees, candidateFrom } from "../../mocks";
import { Icon } from "@iconify/vue";
import {
    CandidateModel,
    WorkExperientModel,
    PagingRequest,
    RecruitmentDetailModel,
} from "../../model";
import { DxPopover } from "devextreme-vue/popover";
import CandidateApi from "../../api/candidate/candidate-api";
import { StateEnum, ToastType } from "../../enums";
import axios from "axios";
import { DxScrollView } from "devextreme-vue/scroll-view";
import { validateEmail } from "../../utils";
import DataSource from "devextreme/data/data_source";
import type { LoadOptions } from "devextreme/data";
import EducationMajorApi from "../../api/education-major/education-major-api";
import UniversityAPi from "../../api/university/university-api";
import apiConfig from "../../api/base/api-config";

const props = withDefaults(
    defineProps<{
        isShowPopup: boolean;
        recruitmentDetail?: RecruitmentDetailModel;
    }>(),
    {
        isShowPopup: false,
    }
);

const educationMajorApi = new EducationMajorApi();
const universityAPi = new UniversityAPi();

const errorMessage = ref({
    CandidateName: "",
    BirthDay: "",
    Mobile: "",
    Email: "",
    Address: "",
});

const emit = defineEmits(["onClose", "onSave"]);

const candidateApi = new CandidateApi();

const isLoading = ref(true);

const popupRef = ref<InstanceType<typeof DxPopup>>();

const popupConfig = ref<DxPopup>({
    height: "calc(100vh - 32px)",
    wrapperAttr: {
        class: "popup-candidate",
    },
});

const widthPopup = ref(500);

const candidateNameConfig = ref<DxTextBox>({
    placeholder: "Tên ứng viên",
});

const emailConfig = ref<DxTextBox>({
    placeholder: "Nhập email",
});

const jobPositionConfig = ref<DxTextBox>({
    placeholder: "Nhập vị trí công việc",
});

const companyNameConfig = ref<DxTextBox>({
    placeholder: "Tên công ty",
});

const workAddressConfig = ref<DxTextBox>({
    placeholder: "Nơi làm việc gần đây",
});

const decriptionPositionConfig = ref<DxTextArea>({
    placeholder: "Nhập mô tả công việc",
    height: 100,
});

const addressConfig = ref<DxTextBox>({
    placeholder: "Nhập địa chỉ",
});

const dateOfBirdthConfig = ref<DxDateBox>({
    placeholder: "dd/MM/yyyy",
});

const workExperientFromConfig = ref<DxDateBox>({
    placeholder: "dd/MM/yyyy",
});

const workExperientToConfig = ref<DxDateBox>({
    placeholder: "dd/MM/yyyy",
});

const phoneConfig = ref<DxTextBox>({
    placeholder: "Nhập số điện thoại",
});

const universityData = new DataSource({
    load: async (options: LoadOptions) => {
        const param = new PagingRequest();
        (param.Collums = ["UniversityName"]),
            (param.PageIndex = (options.skip || 0) / (options.take || 20) + 1),
            (param.PageSize = options.take || 15),
            (param.SearchValue = options.searchValue);
        const res = await universityAPi.getPublicPaging(param);
        return res.data.Data.Data || [];
    },
    byKey: async (id: any) => {
        if (!id) return null;
        const res = await universityAPi.getByID(id);
        return res.data.Data;
    },
});

const trainingPlaceConfig = ref<DxSelectBox>({
    width: "100%",
    placeholder: "Chọn nơi đào tạo",
    noDataText: "Không có dữ liệu",
    displayExpr: "UniversityName",
    valueExpr: "UniversityID",
    dataSource: universityData,
    searchEnabled: true,
    onItemClick(e) {
        candidate.value.EducationPlaceName = e.itemData.UniversityName;
    },
});

const degreeConfig = ref<DxSelectBox>({
    width: "100%",
    placeholder: "Chọn trình độ ứng viên",
    noDataText: "Không có dữ liệu",
    displayExpr: "text",
    valueExpr: "id",
    dataSource: degrees,
    searchEnabled: true,
    onItemClick(e) {
        candidate.value.EducationDegreeName = e.itemData.text;
    },
});

const educationMajorData = new DataSource({
    load: async (options: LoadOptions) => {
        const param = new PagingRequest();
        (param.Collums = ["EducationMajorName"]),
            (param.PageIndex = (options.skip || 0) / (options.take || 20) + 1),
            (param.PageSize = options.take || 15),
            (param.SearchValue = options.searchValue);
        const res = await educationMajorApi.getPublicPaging(param);
        return res.data.Data.Data || [];
    },
    byKey: async (id: any) => {
        if (!id) return null;
        const res = await educationMajorApi.getByID(id);
        return res.data.Data;
    },
});

const specializedConfig = ref<DxSelectBox>({
    width: "100%",
    placeholder: "Chuyên ngành",
    noDataText: "Không có dữ liệu",
    displayExpr: "EducationMajorName",
    valueExpr: "EducationMajorID",
    dataSource: educationMajorData,
    searchEnabled: true,
    onItemClick(e) {
        candidate.value.EducationMajorName = e.itemData.EducationMajorName;
    },
});

const GenderConfig = ref<DxRadioGroup>({
    items: [
        {
            id: 0,
            text: "Nam",
        },
        {
            id: 1,
            text: "Nữ",
        },
    ],
    layout: "horizontal",
    valueExpr: "id",
    displayExpr: "text",
    value: 1,
});

const candidate = ref<CandidateModel>(new CandidateModel());

const workExperients = ref<WorkExperientModel[]>([new WorkExperientModel()]);

function handleAddWorkExperient() {
    workExperients.value.push(new WorkExperientModel());
}

function handleDeleteWorkExperient(items: WorkExperientModel, index: number) {
    workExperients.value.splice(index, 1);
}

async function handleSave() {
    if (!validate()) return;
    candidate.value.Mobile = candidate.value.Mobile?.toString();
    candidate.value.WorkExperients = workExperients.value;
    candidate.value.ChannelID = 8;
    candidate.value.ChannelName = "Website";
    if (props.recruitmentDetail) {
        candidate.value.RecruitmentDetail = props.recruitmentDetail;
    }
    const res = await candidateApi.insertCandidate(candidate.value);
    if (res.data.Success) {
        emit("onClose");
        emit("onSave");
    } else {
    }
}

function setCVAttachment(e: any) {
    var selectedFile = e.target.files[0];
    isLoading.value = true;
    candidate.value.AttachmentName = selectedFile.name;
    const formData = new FormData();
    formData.append("files", selectedFile);
    axios
        .post(`${apiConfig}/Upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            if (response?.data) {
                const resposeImage = response.data[0];
                candidate.value.AttachmentCV = resposeImage.url;
                isLoading.value = false;
            }
        })
        .catch((error) => {
            console.error(error);
            isLoading.value = false;
        });
    if (e.target.files) e.target.value = null;
}

function handleClose() {
    emit("onClose");
}

function validate(): boolean {
    let result = true;
    if (!candidate.value.CandidateName) {
        errorMessage.value.CandidateName = "Tên ứng viên không được để trống";
        result = false;
    }
    if (!candidate.value.Birthday) {
        errorMessage.value.BirthDay = "Ngày sinh không được để trống";
        result = false;
    }
    if (!candidate.value.Address) {
        errorMessage.value.Address = "Địa chỉ không được để trống";
        result = false;
    }
    if (!candidate.value.Email) {
        errorMessage.value.Email = "Email không được để trống";
        result = false;
    }
    if (candidate.value.Email && !validateEmail(candidate.value.Email)) {
        errorMessage.value.Email = "Email không hợp lệ";
        result = false;
    }
    if (!candidate.value.Mobile) {
        errorMessage.value.Mobile = "Số điện thoại không được để trống";
        result = false;
    }
    return result;
}

watch(
    () => candidate.value.CandidateName,
    (newVal) => {
        if (newVal) {
            errorMessage.value.CandidateName = "";
        } else {
            errorMessage.value.CandidateName =
                "Tên ứng viên không được để trống";
        }
    }
);

watch(
    () => candidate.value.Birthday,
    (newVal) => {
        if (newVal) {
            errorMessage.value.BirthDay = "";
        } else {
            errorMessage.value.BirthDay = "Ngày sinh không được để trống";
        }
    }
);

watch(
    () => candidate.value.Address,
    (newVal) => {
        if (newVal) {
            errorMessage.value.Address = "";
        } else {
            errorMessage.value.Address = "Địa chỉ không được để trống";
        }
    }
);

watch(
    () => candidate.value.Email,
    (newVal) => {
        if (newVal) {
            errorMessage.value.Email = "";
        } else {
            errorMessage.value.Email = "Email không được để trống";
        }
    }
);

watch(
    () => candidate.value.Mobile,
    (newVal) => {
        if (newVal) {
            errorMessage.value.Mobile = "";
        } else {
            errorMessage.value.Mobile = "Số điện thoại không được để trống";
        }
    }
);
</script>
<style lang="css" scoped>
.add-cv {
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px dashed #e0e0e0;
    border-radius: 3px;
    justify-content: center;
}
.wrap-file {
    text-align: center;
    font-size: 13px !important;
    width: 100%;
}
.avatar {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    margin-right: 16px;
    margin-top: 3px;
    position: relative;
}
.show-image {
    width: 100%;
    height: 100%;
    border-radius: 50% !important;
    -o-object-fit: cover;
    object-fit: cover;
    border: 1px dashed #e0e0e0;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.field {
    margin-bottom: 12px;
    position: relative;
}
.lable {
    font-size: 14px;
    color: #1e2633;
    height: 25px !important;
    line-height: 25px !important;
    font-family: Roboto;
    font-weight: 500;
}
.validate-string {
    position: absolute;
    width: 100%;
    text-overflow: ellipsis;
    color: red;
    overflow: hidden;
    white-space: nowrap;
}
.file-input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
}

.recruitment-status {
    width: fit-content;
}
.recruitment-status-1 {
    color: rgb(0, 76, 255);
    font-family: 14px;
    font-weight: 500;
}

.recruitment-status-2 {
    color: red;
    font-family: 14px;
    font-weight: 500;
}

.recruitment-status-3 {
    color: green;
    font-family: 14px;
    font-weight: 500;
}

.heading-title {
    font-size: 14px;
    color: #1e2633;
    height: 25px !important;
    line-height: 25px !important;
    font-family: Roboto;
    font-weight: 500;
    margin-top: 12px;
}

.pdfContainer {
    width: 100%;
    height: calc(100vh - 132px);
}
.flex-1 {
    flex: 1;
}
.h-full {
    height: 100%;
}
.flex {
    display: flex;
}
.cursor-pointer {
    cursor: pointer;
}
.items-center {
    align-items: center;
}
.text-center {
    text-align: center;
}
</style>
<style>
.dx-overlay-content {
    overflow: unset !important;
}
</style>
