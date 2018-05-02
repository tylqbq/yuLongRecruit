import axios from 'axios'
import { baseUrl } from '../config'
/**
 * 用户注册
 */
export const accountRegister = (params) => axios.post(baseUrl+"user/register",params);
/**
 * 用户登录
 */
export const accountLogin = (params) => axios.post(baseUrl+"user/login",params);
/**
 * 用户退出
 */
export const accountLogout = () => axios.post(baseUrl+"user/logout");

/**
 * 用户信息ById
 */
export const getUserInfoById = (params) => axios.post(baseUrl+"user/getUserInfoById",params);

/*
 * 修改用户名
 */
export const updateUserName = (params) => axios.post(baseUrl+"user/updateUserName",params);

/*
 * 修改密码
 */
export const updatePassword = (params) => axios.post(baseUrl+"user/updatePassword",params);

/*
 * 修改电话
 */
export const updatePhoneNumber = (params) => axios.post(baseUrl+"user/updatePhoneNumber",params);

/*
 * 修改邮箱
 */
export const updateEmail = (params) => axios.post(baseUrl+"user/updateEmail",params);





/**
 * 得到招聘信息 综合条件
 */
export const getRecruitList = (params) => axios.post(baseUrl+"recruit/getrecruit",params);

/**
 * 得到招聘信息ById
 */
export const getRecruitById = (recruitId) => axios.get(baseUrl+"recruit/getrecruitbyid?recruitId="+recruitId);

/**
 * 得到招聘信息ByCompanyId
 */
export const getRecruitByCompanyId = (params) => axios.post(baseUrl+"recruit/getrecruitbycompanyid",params);

/**
 * 判断收藏是否存在
 */
export const collectionIsExist = (recruitId,jobSeekerId) => axios.get(baseUrl+"collection/isexist?recruitId="+recruitId+"&jobSeekerId="+jobSeekerId);


/**
 * 收藏 、取消  职位
 */
export const collectionRecruit = (recruitId,jobSeekerId) => axios.get(baseUrl+"recruit/collectionrecruit?recruitId="+recruitId+"&jobSeekerId="+jobSeekerId);

/**
 * 取得我的收藏ByJobSeekerId
 */
export const getMyCollectionRecruits = (params) => axios.post(baseUrl+"recruit/getMyCollectionRecruits",params);

/**
 * 删除我的收藏ByJobSeekerId
 */
export const deleteCollectionRecruit = (recruitId,jobSeekerId) => axios.get(baseUrl+"collection/deleteCollectionRecruit?recruitId="+recruitId+"&jobSeekerId="+jobSeekerId);



/**
 * 得到城市信息
 */
export const getCityList = (pyCode) => axios.get(baseUrl+"city/getCityList?pyCode="+pyCode);

/**
 * 得到公司信息ById
 */
export const getCompanyInfoById = (companyId) => axios.get(baseUrl+"company/getcompanyInfobyid?id="+companyId);



/**
 * 新建简历
 */
export const bulidResume = (params) => axios.post(baseUrl+"resume/addresume",params);

/**
 * 获取简历
 */
export const getResumeAllById = (params) => axios.post(baseUrl+"resume/getAllById",params);

/**
 * 获取用户名下所有简历
 */
export const getAllByJobSeekerId = (params) => axios.post(baseUrl+"resume/getAllByJobSeekerId",params);
/**
 * 删除简历
 */
export const deleteresume = (params) => axios.post(baseUrl+"resume/deleteresume",params);

/**
 * 修改简历基本休息
 */
export const updateResume = (params) => axios.post(baseUrl+"resume/updateResume",params);

/**
 * 修改简历公开程度
 */
export const updatePublic = (params) => axios.post(baseUrl+"resume/updatePublic",params);

/**
 * 修改简历快速投递
 */
export const updateDilivery = (params) => axios.post(baseUrl+"resume/updateDilivery",params);



/**
 * 修改简历 年收入
 */
export const updateAnnualIncome = (params) => axios.post(baseUrl+"resume/updateAnnualIncome",params);

/**
 * 修改简历 求职意向
 */
export const updateJobIntention = (params) => axios.post(baseUrl+"resume/updateJobIntention",params);

/**
 * 修改简历 工作经验
 */
export const updateWorkExperience = (params) => axios.post(baseUrl+"resume/updateWorkExperience",params);

/**
 * 修改简历 项目经验
 */
export const updateProjectExperience = (params) => axios.post(baseUrl+"resume/updateProjectExperience",params);

/**
 * 修改简历 教育经历
 */
export const updateEducationExperience = (params) => axios.post(baseUrl+"resume/updateEducationExperience",params);

/**
 * 修改简历 学校荣誉
 */
export const updateSchoolHonor = (params) => axios.post(baseUrl+"resume/updateSchoolHonor",params);

/**
 * 修改简历 学校职务
 */
export const updateSchoolDuties = (params) => axios.post(baseUrl+"resume/updateSchoolDuties",params);


/**
 * 判断求职名下是否有快速投递的简历，如果没有则返回名下全部简历以供选择
 */
export const getSpecialResumeByJobSeekerId = (params) => axios.post(baseUrl+"resume/getSpecialResumeByJobSeekerId",params);

/**
 * 投递简历
 */
export const diliveryResume = (params) => axios.post(baseUrl+"resume/diliveryResume",params);

/**
 * 得到 投递的简历
 */
export const getDeliveryResume = (params) => axios.post(baseUrl+"resume/getDeliveryResume",params);

/**
 * 删除投递的简历
 */
export const deleteDiliveryResume = (params) => axios.post(baseUrl+"resume/deleteDiliveryResume",params);




/**
 * 公司注册
 */
export const registerCompany = (params) => axios.post(baseUrl+"company/registerCompany",params);

/**
 * 公司登录
 */
export const loginCompany = (params) => axios.post(baseUrl+"company/loginCompany",params);

/**
 * 公司信息修改
 */
export const updateCompanyInfo = (params) => axios.post(baseUrl+"company/updateCompanyInfo",params);

/**
 * 公司用户信息获取
 */
export const getCompanyUserInfo = (params) => axios.post(baseUrl+"company/getCompanyUserInfo",params);

/**
 * 公司发布职位
 */
export const buildRecruit = (params) => axios.post(baseUrl+"recruit/buildRecruit",params);

/**
 * 删除发布的职位
 */
export const deleteRecruitById = (params) => axios.post(baseUrl+"recruit/deleteRecruitById",params);

/**
 * 公司收到的简历
 */
export const getCompanyDeliveryResume = (params) => axios.post(baseUrl+"company/getDeliveryResume",params);

/**
 * 公司用户修改昵称
 */
export const updateMember = (params) => axios.post(baseUrl+"company/updateMember",params);

/**
 * 公司用户修改密码
 */
export const updateCompanyUserPassword = (params) => axios.post(baseUrl+"company/updatePassword",params);

/**
 * 公司用户修改手机
 */
export const updateCompanyUserPhoneNumber = (params) => axios.post(baseUrl+"company/updatePhoneNumber",params);

/**
 * 公司用户修改邮箱
 */
export const updateCompanyUserEmail = (params) => axios.post(baseUrl+"company/updateEmail",params);