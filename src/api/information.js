import { loginreq, req, jsonreq, picturess } from './axiosFun';
import httpUrls from './requestURL'
let {httpUrl, memberUrl, loginUrl, membersUrl} = httpUrls;

// 获取资讯列表http://192.168.1.227:8060/pay/message_center/
export const informationList = (data) => { return jsonreq('post', memberUrl + 'pay/message_center/', data) }

//获取资讯详情http://192.168.1.227:8060/pay/message_center_content/
export const informationDetail = (data) => { return jsonreq('post', memberUrl + 'pay/message_center_content/', data) }
