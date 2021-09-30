import { BaseService } from '@/api/request';
// import httpTools from '@/utils/http-tools';
// const appId = httpTools.getParam('appId');

const api = {};
//获取菜单
api.getMenu = function (params = {}) {
  //   params.appId = appId;
  return BaseService.postRequest('base/admin/menu/list.json.do', params);
};
//获取头部公告消息
api.getHeaderNotice = function (params = {}) {
  //   params.appId = appId;
  return BaseService.postRequest('base/admin/index/notice.json.do', params);
};
//头部用户信息
api.getHeaderUserInfo = function (params = {}) {
  //   params.appId = appId;
  return BaseService.postRequest('base/admin/user/login/detail.json.do', params);
};
//头部公众号信息
api.getHeaderYouMallInfo = function (params = {}) {
  //   params.appId = appId;
  return BaseService.postRequest('base/admin/index/youmallInfo.json.do', params);
};

//点击菜单统计点击次数 menuId(菜单id)，menuType（MENU，MENU_ITEM）
api.postBrowseRecord = function (params = {}) {
  return BaseService.postRequest('base/admin/menu/save/browseRecord.json.do', params);
};

export default api;
