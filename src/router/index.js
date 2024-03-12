// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 首页
import index from "@/views/index";
/**
 * 基础菜单
 */
//AI实验室-首页
const laboratoryIndex = () => import("@/views/chataboratory/index");
//AI实验室-对话
const laboratoryChat = () => import("@/views/chataboratory/Chat");
//视觉体验馆
const vision = () => import("@/views/center/vision");
//视觉体验馆导航页
const visionNav = () => import("@/views/center/visionNav");
//文档对话
const document = () => import("@/views/system/documentNew");
//意见反馈
const opinion = () => import("@/views/system/opinion");
//服务商
const chatServe = () => import("@/views/system/chatServe");
//分享页面
const share = () => import("@/components/share");
//多模型对话
const manyModelChat = () => import("@/views/manyModelChat/chat");
//语音合成
const voice = () => import("@/views/voice/voice");
// 新助理中心
const templateSelectNew = () =>
  import("../components/dialog/templateSelectNew");
//能力页面
const capacity = () => import("@/views/capacity/capacity");

//服务器购买
const shoppingServer = () => import("@/views/shoppingServer/shoppingServer");
//藏头诗
const headPoem = () => import("@/views/liveBroadcast/headPoem");
//藏头诗
const headPoemArt = () => import("@/views/liveBroadcast/headPoemArt");
//藏头诗
const headPoemText = () => import("@/views/liveBroadcast/headPoemText");
//藏头诗
const headPoemImg = () => import("@/views/liveBroadcast/headPoemImg");
//藏头诗
const headPoemLive = () => import("@/views/liveBroadcast/headPoemLive");
//艺术字
const chatWordArt = () => import("@/views/liveBroadcast/chatWordArt");
//艺术字九宫格
const chatWordArtNew = () => import("@/views/liveBroadcast/chatWordArtNew");
//艺术字十宫格
const chatWordArtNewTen = () => import("@/views/liveBroadcast/chatWordArtNewTen");
//AI百宝箱
const treasureBox = () => import("@/views/treasureBox/treasureBox");
//AI百宝箱导航栏
const treasureBoxNav = () => import("@/views/treasureBox/treasureBoxNav");
//购买算力页面
const shoppingToken = () => import("@/views/shoppingToken/shoppingToken");
//最近访问
const visited = () => import("@/views/system/visited");
//AI工具集
const workset = () => import("@/views/workset/workset");
//AI智能体
const knowledgeRobot = () => import("@/views/knowledge/knowledgeRobot");
//创建AI智能体
const knowledgeCreatedChat = () => import("@/views/knowledge/knowledgeCreatedChat");
//AI知识库 
const knowledge = () => import("@/views/knowledge/knowledge");
//AI智能体对话
const knowledgeChat = () => import("@/views/knowledge/knowledgeChat");
//声音克隆
const audioCloneNew = () => import("@/views/audioClone/audioClone");



// 首页
const indexs = () => import("@/views/system/index2");
// 选择导师
const selectMentor = () => import("@/views/system/selectMentor");
// 新建导师
const createMentor = () => import("@/views/system/createMentor");
// 导师对话
const mentorChat = () => import("@/views/system/Chat");
// 新建我的专属导师
const createMineMentor = () => import("@/views/system/createMineMentor");
// 导师管理
const mengerMentor = () => import("@/views/system/mengerMentor");
// 对话页
const Chat = () => import("@/views/chat/Chat");
//最新对话页
const ChatNew = () => import("@/views/chat/ChatNew");
//资讯
const Information = () => import("@/views/information/information");
// 升级会员
const Member = () => import("@/views/member/Member");
// 个人中心
const Center = () => import("@/views/center/Center");
// 修改个人信息
const editCneter = () => import("@/views/center/centerMessage");
// 历史会话
const History = () => import("@/views/center/History");
// 流量剩余
const residueNumber = () => import("@/views/center/residueNumber");
// 订单记录
const Order = () => import("@/views/order/Order");
// 商务合作
const Collaborate = () => import("@/views/collaborate/collaborate");
// 应用助理
const templateSelect = () => import("../components/dialog/templateSelect");
// 创作中心
const mineRole = () => import("../components/dialog/mineRole");
// 创建角色
const createRole = () => import("../components/dialog/createRole");
// AI绘画最新
const drawChatNew = () => import("../views/drawChat/drawChatfile");
// 四维彩超
const fourDUltrasound = () => import("../views/drawChat/fourDUltrasound");
// 四维彩超历史记录
const ultrasoundHistory = () => import("../views/drawChat/ultrasoundHistory");
// 商品管理
const Goods = () => import("@/views/goods/Goods");
// 联系客服
const services = () => import("@/views/service/service");
// 卡密兑换
const Change = () => import("@/views/change/change");
// 防走丢
const here = () => import("@/views/here/here");
// 系统定制
const customized = () => import("@/views/operate/customized");
// 操作指南
const instruction = () => import("@/views/instruction/instruction");
// 问题反馈
const questionFeedback = () =>
  import("@/views/questionFeedback/questionFeedback");
// 历史版本
const version = () => import("../components/version");
// 我的分销
const mineDistribution = () => import("@/views/distribution/mine");
// 分销成员
const mineMember = () => import("@/views/distribution/mineMember");
// 分佣明细
const mineDetail = () => import("@/views/distribution/detail");
// 提现
const withdrawal = () => import("@/views/distribution/withdrawal");
// 绑定银行卡
const bindBank = () => import("@/views/distribution/bindBank");
// 提现订单
const indent = () => import("@/views/distribution/indent");
// 分享邀请
const shareFriend = () => import("@/views/shareFriend/share");
// 升级分销
const upgradeDistribution = () =>
  import("@/views/distribution/upgradeDistribution");
// 分佣说明
const illustrate = () => import("@/views/distribution/illustrate");
// 公告
const noticeIndex = () => import("@/views/notice/index");
// 公告详情
const noticeDetail = () => import("@/views/notice/detail");
// 企业定制首页
const enterpriseWEB = () => import("@/views/enterpriseWEB/index");
// 企业定制新建
const enterpriseDetail = () => import("@/views/enterpriseWEB/detail");
// 企业定制列表首页
const editAIBaseIndex = () => import("@/views/enterpriseWEB/editAIBase/index");
// 企业定制/首页列表
const editAIBaseIndexView = () =>
  import("@/views/enterpriseWEB/editAIBase/indexView");
// 企业定制/编辑企业信息
const editAIBaseDetail = () =>
  import("@/views/enterpriseWEB/editAIBase/detail");
// 企业定制/数字员工
const digitalEmployees = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEmployees");
// 企业定制/数字员工编辑
const digitalEmployeesEdit = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEmployeesEdit");
// 企业定制/数字员工对话
const digitalEmployeesChat = () =>
  import("@/views/enterpriseWEB/editAIBase/digitalEnmloyeesChat");
// 企业定制/成员管理
const memberManagement = () =>
  import("@/views/enterpriseWEB/editAIBase/memberManagement");
// 企业定制/企业设置
const enterpriseSet = () =>
  import("@/views/enterpriseWEB/editAIBase/enterpriseSet");
// 音视频转写
const convertVideo = () => import("@/views/convertVideo/index");
// 实时转换
const realTime = () => import("@/views/convertVideo/realTime");
// 本地上传
const loaclVideo = () => import("@/views/convertVideo/video");
// 修改音视频内容
const eidtVideo = () => import("@/views/convertVideo/editVideo");
// 数字人定制
const digitizedHuman = () => import("@/views/digitizedHuman/index");
// 数字人定制/视频
const imageClone = () => import("@/views/digitizedHuman/imageClone");
// 数字人定制/声音
const audioClone = () => import("@/views/digitizedHuman/audioClone");
// 数字人定制/声音
const produceIndex = () => import("@/views/digitizedHuman/produceIndex");
// 数字人定制/新建
const createHuman = () => import("@/views/digitizedHuman/createHuman");
// 数字人定制/我的数字人
const mineHuman = () => import("@/views/digitizedHuman/mineHuman");
// 数字人定制/制作数字人
const startProduceHuman = () =>
  import("@/views/digitizedHuman/startProduceHuman");
// 数字人定制/我的视频
const mineVideo = () => import("@/views/digitizedHuman/mineVideo");
// 数字人定制/我的声音
const mineAudio = () => import("@/views/digitizedHuman/mineAudio");
// 数字人定制/我的声音创建
const createAudioClone = () =>
  import("@/views/digitizedHuman/createAudioClone");
// 数字人定制/合成声音
const synthesisAudio = () => import("@/views/digitizedHuman/synthesisAudio");
// 数字人定制/合成声音记录
const audioCloneHistory = () =>
  import("@/views/digitizedHuman/audioCloneHistory");
// 数字人定制/合成声音记录
const humanOrder = () => import("@/views/digitizedHuman/order");
// 识图万物
const recognizingSllThings = () => import("@/views/recognizingSllThings/index");

// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
  // mode: 'history', // 去掉url的#
  routes: [
    {
      path: "/index",
      name: "首页",
      component: index,
      iconCls: "el-icon-tickets",
      children: [
        // {
        //   path: "/ljh",
        //   title: "首页",
        //   component: indexs,
        //   meta: {
        //     name: "首页",
        //     requireAuth: false
        //   }
        // },
        {
          path: "/index",
          title: "首页",
          component: capacity,
          meta: {
            name: "index",
            requireAuth: false
          }
        },
        {
          path: "/selectMentor",
          title: "selectMentor",
          component: selectMentor,
          meta: {
            name: "选择导师",
            requireAuth: false
          }
        },
        {
          path: "/workset/worksetNav",
          title: "AI工具集",
          component: workset,
          meta: {
            name: "AI工具集",
            requireAuth: false
          }
        },
        {
          path: "/workset/textChat",
          title: "文字识别(工具集)",
          component: vision,
          meta: {
            name: "文字识别",
            requireAuth: false
          }
        },
        {
          path: "/workset/voiceChat",
          title: "workset",
          component: voice,
          meta: {
            name: "语音合成",
            requireAuth: false
          }
        },
        {
          path: "/workset/documentChat",
          title: "workset",
          component: document,
          meta: {
            name: "文档对话",
            requireAuth: false
          }
        },
        {
          path: "/visited",
          title: "最近访问",
          component: visited,
          meta: {
            name: "最近访问",
            requireAuth: false
          }
        },
        {
          path: "/shoppingToken",
          title: "购买算力",
          component: shoppingToken,
          meta: {
            name: "购买算力",
            requireAuth: false
          }
        },
        {
          path: "/chatServe",
          title: "服务商",
          component: chatServe,
          meta: {
            name: "服务商",
            requireAuth: false
          }
        },
        {
          path: "/treasureBoxNav",
          title: "AI百宝箱导航页",
          component: treasureBoxNav,
          meta: {
            name: "AI百宝箱导航页",
            requireAuth: false
          }
        },
        {
          path: "/treasureBox",
          title: "AI百宝箱",
          component: treasureBox,
          meta: {
            name: "AI百宝箱",
            requireAuth: false
          }
        },
        {
          path: "/knowledge/knowledgeRobot",
          title: "AI智能体",
          component: knowledgeRobot,
          meta: {
            name: "AI智能体",
            requireAuth: false
          }
        },
        {
          path: "/knowledge/knowledgeCreatedChat",
          title: "创建AI智能体",
          component: knowledgeCreatedChat,
          meta: {
            name: "创建AI智能体",
            requireAuth: false
          }
        },
        {
          path: "/knowledge/knowledge",
          title: "AI知识库",
          component: knowledge,
          meta: {
            name: "AI知识库",
            requireAuth: false
          }
        },
        {
          path: "/knowledge/knowledgeChat",
          title: "AI知识库对话",
          component: knowledgeChat,
          meta: {
            name: "AI知识库对话",
            requireAuth: false
          }
        },
        {
          path: "/audioCloneNew/index",
          title: "声音克隆",
          component: audioCloneNew,
          meta: {
            name: "声音克隆",
            requireAuth: false
          }
        },
        // {
        //   path: "/knowledge/knowledgeWebsite",
        //   title: "网址库",
        //   component: knowledgeWebsite,
        //   meta: {
        //     name: "网址库",
        //     requireAuth: false
        //   }
        // },
        {
          path: "/shoppingServer",
          title: "购买服务商",
          component: shoppingServer,
          meta: {
            name: "购买服务商",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/headPoem",
          title: "藏头诗",
          component: headPoem,
          meta: {
            name: "藏头诗",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/headPoemArt",
          title: "专属头像藏头诗 V1",
          component: headPoemArt,
          meta: {
            name: "专属头像藏头诗 V1",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/headPoemText",
          title: "专属头像藏头诗 V2",
          component: headPoemText,
          meta: {
            name: "专属头像藏头诗 V2",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/headPoemImg",
          title: "专属头像藏头诗 V3",
          component: headPoemImg,
          meta: {
            name: "专属头像藏头诗 V3",
            requireAuth: false
          }
        },

        {
          path: "/liveBroadcast/headPoemLive",
          title: "专属头像藏头诗 V4",
          component: headPoemLive,
          meta: {
            name: "专属头像藏头诗 V4",
            requireAuth: false
          }
        },
        
        {
          path: "/liveBroadcast/chatWordArt",
          title: "艺术字",
          component: chatWordArt,
          meta: {
            name: "艺术字",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/chatWordArtNew",
          title: "新艺术字",
          component: chatWordArtNew,
          meta: {
            name: "新艺术字",
            requireAuth: false
          }
        },
        {
          path: "/liveBroadcast/chatWordArtNewTen",
          title: "新艺术字十宫格",
          component: chatWordArtNewTen,
          meta: {
            name: "新艺术字十宫格",
            requireAuth: false
          }
        },
        {
          path: "/capacity",
          title: "能力页面",
          component: capacity,
          meta: {
            name: "能力页面",
            requireAuth: false
          }
        },
        {
          path: "/voice",
          title: "语音合成",
          component: voice,
          meta: {
            name: "语音合成",
            requireAuth: false
          }
        },
        {
          path: "/manyModelChat/chat",
          title: "多模型对话",
          component: manyModelChat,
          meta: {
            name: "多模型对话",
            requireAuth: false
          }
        },
        {
          path: "/share",
          title: "分享好友",
          component: share,
          meta: {
            name: "分享好友",
            requireAuth: false
          }
        },
        {
          path: "/createMentor",
          title: "createMentor",
          component: createMentor,
          meta: {
            name: "创建导师",
            requireAuth: false
          }
        },
        {
          path: "/mentorChat",
          title: "mentorChat",
          component: mentorChat,
          meta: {
            name: "对话导师",
            requireAuth: false
          }
        },
        {
          path: "/createMineMentor",
          title: "createMineMentor",
          component: createMineMentor,
          meta: {
            name: "创建我的专属导师",
            requireAuth: false
          }
        },
        {
          path: "/mengerMentor",
          title: "mengerMentor",
          component: mengerMentor,
          meta: {
            name: "创建我的专属导师",
            requireAuth: false
          }
        },
        {
          path: "/chat/Chat",
          name: "chat",
          component: ChatNew,
          meta: {
            title: "聊天",
            requireAuth: false
          }
        },
        {
          path: "/chat/ChatOld",
          name: "chat",
          component: Chat,
          meta: {
            title: "聊天",
            requireAuth: false
          }
        },
        {
          path: "/information/Information",
          name: "information",
          component: Information,
          meta: {
            title: "资讯",
            requireAuth: false
          }
        },
        // {
        //   path: "/chataboratory",
        //   name: "index",
        //   component: laboratoryIndex,
        //   meta: {
        //     title: "对话",
        //     requireAuth: false
        //   },
        //   children: [
            {
              path: "/chataboratory/laboratoryChat",
              name: "laboratoryChat",
              component: laboratoryChat,
              meta: {
                title: "AI实验室对话",
                requireAuth: false
              }
            },
            {
              path: "/chataboratory/laboratoryDrawChat",
              name: "laboratoryDrawChat",
              component: drawChatNew,
              meta: {
                title: "AI实验室绘画",
                requireAuth: false
              }
            },
        //   ]
        // },
        {
          path: "/member/Member",
          name: "购买套餐",
          component: Member,
          meta: {
            title: "购买套餐",
            requireAuth: false
          }
        },
        {
          path: "/center/Center",
          name: "个人中心",
          component: Center,
          meta: {
            title: "个人中心",
            requireAuth: false
          }
        },

        {
          path: "/document/chat",
          name: "文档对话",
          component: document,
          meta: {
            title: "文档对话",
            requireAuth: false
          }
        },

        {
          path: "/opinion/opinion",
          name: "意见反馈",
          component: opinion,
          meta: {
            title: "意见反馈",
            requireAuth: false
          }
        },
        {
          path: "/vision/vision",
          name: "视觉体验馆",
          component: vision,
          meta: {
            title: "视觉体验馆",
            requireAuth: false
          }
        },
        {
          path: "/visionNav/visionNav",
          name: "视觉体验馆导航页",
          component: visionNav,
          meta: {
            title: "视觉体验馆导航页",
            requireAuth: false
          }
        },
        {
          path: "/center/edit",
          name: "修改信息",
          component: editCneter,
          meta: {
            title: "修改信息",
            requireAuth: false
          }
        },
        {
          path: "/center/History",
          name: "历史对话",
          component: History,
          meta: {
            title: "历史对话",
            requireAuth: false
          }
        },
        {
          path: "/residueNumber/residueNumber",
          name: "计费中心",
          component: residueNumber,
          meta: {
            title: "计费中心",
            requireAuth: false
          }
        },
        {
          path: "/order/Order",
          name: "订单记录",
          component: Order,
          meta: {
            title: "订单记录",
            requireAuth: false
          }
        },
        {
          path: "/collaborate/collaborate",
          name: "商务合作",
          component: Collaborate,
          meta: {
            title: "商务合作",
            requireAuth: false
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "助理中心",
          component: templateSelect,
          meta: {
            title: "助理中心",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelectNew",
          name: "AI数字孪生",
          component: templateSelectNew,
          meta: {
            title: "AI数字孪生",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "人物互动",
          component: templateSelect,
          meta: {
            title: "人物互动",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "效率工具",
          component: templateSelect,
          meta: {
            title: "效率工具",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "娱乐生活",
          component: templateSelect,
          meta: {
            title: "娱乐生活",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "工作学习",
          component: templateSelect,
          meta: {
            title: "工作学习",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "工作助理",
          component: templateSelect,
          meta: {
            title: "工作助理",
            requireAuth: true
          }
        },
        {
          path: "/mineRole/mineRole",
          name: "人物互动",
          component: mineRole,
          meta: {
            title: "人物互动",
            requireAuth: true
          }
        },
        {
          path: "/createRole/createRole",
          name: "创作",
          component: createRole,
          meta: {
            title: "创作",
            requireAuth: true
          }
        },
        {
          path: "/drawChat/drawChat",
          name: "AI绘画",
          component: drawChatNew,
          meta: {
            title: "AI绘画",
            requireAuth: true
          }
        },
        {
          path: "/drawChat/fourDUltrasound",
          name: "彩超宝宝",
          component: fourDUltrasound,
          meta: {
            title: "彩超宝宝",
            requireAuth: true
          }
        },
        {
          path: "/drawChat/fourDUltrasound/history",
          name: "四维彩超历史记录",
          component: ultrasoundHistory,
          meta: {
            title: "历史记录",
            requireAuth: true
          }
        },
        {
          path: "/goods/Goods",
          name: "商品管理",
          component: Goods,
          meta: {
            title: "商品管理",
            requireAuth: true
          }
        },
        {
          path: "/services/services",
          name: "联系客服",
          component: services,
          meta: {
            title: "联系客服",
            requireAuth: true
          }
        },
        {
          path: "/change/change",
          name: "卡密兑换",
          component: Change,
          meta: {
            title: "卡密兑换",
            requireAuth: true
          }
        },
        {
          path: "/here/here",
          name: "桌面快捷教程",
          component: here,
          meta: {
            title: "桌面快捷教程",
            requireAuth: true
          }
        },
        {
          path: "/instruction/instruction",
          name: "操作指南",
          component: instruction,
          meta: {
            title: "操作指南",
            requireAuth: true
          }
        },
        {
          path: "/questionFeedwark/questionFeedwark",
          name: "问题反馈",
          component: questionFeedback,
          meta: {
            title: "问题反馈",
            requireAuth: true
          }
        },
        {
          path: "/version/version",
          name: "历史版本",
          component: version,
          meta: {
            title: "历史版本",
            requireAuth: true
          }
        },
        {
          path: "/mineDistribution/mineDistribution",
          name: "我的分销",
          component: mineDistribution,
          meta: {
            title: "我的分销",
            requireAuth: true
          }
        },
        {
          path: "/mineMember/mineMember",
          name: "我的成员",
          component: mineMember,
          meta: {
            title: "我的成员",
            requireAuth: true
          }
        },
        {
          path: "/mineDetail/mineDetail",
          name: "分佣明细",
          component: mineDetail,
          meta: {
            title: "分佣明细",
            requireAuth: true
          }
        },
        {
          path: "/withdrawal/withdrawal",
          name: "提现申请",
          component: withdrawal,
          meta: {
            title: "提现申请",
            requireAuth: true
          }
        },
        {
          path: "/bindBank/bindBank",
          name: "添加银行卡",
          component: bindBank,
          meta: {
            title: "添加银行卡",
            requireAuth: true
          }
        },
        {
          path: "/indent/indent",
          name: "提现订单",
          component: indent,
          meta: {
            title: "提现订单",
            requireAuth: true
          }
        },
        {
          path: "/share/share",
          name: "分享邀请",
          component: shareFriend,
          meta: {
            title: "分享邀请",
            requireAuth: true
          }
        },
        {
          path: "/upgradeDistribution/upgradeDistribution",
          name: "升级钻石分销",
          component: upgradeDistribution,
          meta: {
            title: "升级钻石分销",
            requireAuth: true
          }
        },
        {
          path: "/illustrate/illustrate",
          name: "分佣说明",
          component: illustrate,
          meta: {
            title: "分佣说明",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/index",
          name: "公告",
          component: noticeIndex,
          meta: {
            title: "公告",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/detail",
          name: "公告详情",
          component: noticeDetail,
          meta: {
            title: "公告详情",
            requireAuth: true
          }
        },
        {
          path: "/enterpriseWEB/index",
          name: "企业AI定制",
          component: enterpriseWEB,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          }
        },
        {
          path: "/enterpriseWEB/detail",
          name: "企业知识",
          component: enterpriseDetail,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          }
        },
        {
          path: "/enterpriseWEB/indexList",
          name: "企业知识库列表首页",
          component: editAIBaseIndex,
          meta: {
            title: "企业AI定制",
            requireAuth: true
          },
          children: [
            {
              path: "indexListView",
              name: "企业知识库列表",
              component: editAIBaseIndexView,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "editBase",
              name: "企业知识库修改",
              component: editAIBaseDetail,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "digitalEmployees",
              name: "数字员工",
              component: digitalEmployees,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "digitalEmployeesEdit",
              name: "数字员工编辑",
              component: digitalEmployeesEdit,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "chat",
              name: "数字员工对话",
              component: digitalEmployeesChat,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "memberManagement",
              name: "成员管理",
              component: memberManagement,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            },
            {
              path: "enterpriseSet",
              name: "企业设置",
              component: enterpriseSet,
              meta: {
                title: "企业AI定制",
                requireAuth: true
              }
            }
          ]
        },
        {
          path: "/convert/index",
          name: "音视频转写",
          component: convertVideo,
          meta: {
            title: "音视频转写",
            requireAuth: true
          }
        },
        {
          path: "/convert/realTime",
          name: "实时转换",
          component: realTime,
          meta: {
            title: "音视频转写",
            requireAuth: true
          }
        },
        {
          path: "/convert/loaclVideo",
          name: "本地转换",
          component: loaclVideo,
          meta: {
            title: "音视频转写",
            requireAuth: true
          }
        },
        {
          path: "/convert/editVideo",
          name: "修改内容",
          component: eidtVideo,
          meta: {
            title: "修改内容",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman/index",
          name: "AI直播数字人定制",
          component: digitizedHuman,
          meta: {
            title: "AI直播数字人定制",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman/profile",
          name: "形象克隆",
          component: imageClone,
          meta: {
            title: "AI直播数字人定制",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman/audioClone",
          name: "声音克隆",
          component: audioClone,
          meta: {
            title: "AI直播数字人定制",
            requireAuth: true
          }
        },
        {
          path: "/identify/identify",
          name: "看图说话",
          component: recognizingSllThings,
          meta: {
            title: "看图说话",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman",
          name: "produceIndex",
          component: produceIndex,
          children: [
            {
              path: "/digitizedHuman/produceIndex",
              name: "humanIndex",
              component: createHuman,
              meta: {
                title: "创建数字人",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineHuman",
              name: "mineHuman",
              component: mineHuman,
              meta: {
                title: "我的数字人",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineVideo",
              name: "mineVideo",
              component: mineVideo,
              meta: {
                title: "我的视频",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineAudio",
              name: "mineAudio",
              component: mineAudio,
              meta: {
                title: "我的声音",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/cloneAudio",
              name: "createAudioClone",
              component: createAudioClone,
              meta: {
                title: "声音克隆",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/synthesisAudio",
              name: "synthesisAudio",
              component: synthesisAudio,
              meta: {
                title: "合成声音",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/audioCloneHistory",
              name: "audioCloneHistory",
              component: audioCloneHistory,
              meta: {
                title: "合成声音记录列表",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/humanOrder",
              name: "humanOrder",
              component: humanOrder,
              meta: {
                title: "数字人订单记录",
                requireAuth: true
              }
            }
          ]
        },
      ]
    },
    {
      path: "/login",
      name: "登录",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/customized/customized",
      name: "系统定制",
      component: customized,
      hidden: true,
      meta: {
        title: "系统定制",
        requireAuth: true
      }
    },
    // {
    //   path: "/digitizedHuman",
    //   name: "produceIndex",
    //   component: produceIndex,
    //   children: [
    //     {
    //       path: "/digitizedHuman/produceIndex",
    //       name: "humanIndex",
    //       component: createHuman,
    //       meta: {
    //         title: "创建数字人",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineHuman",
    //       name: "mineHuman",
    //       component: mineHuman,
    //       meta: {
    //         title: "我的数字人",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineVideo",
    //       name: "mineVideo",
    //       component: mineVideo,
    //       meta: {
    //         title: "我的视频",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineAudio",
    //       name: "mineAudio",
    //       component: mineAudio,
    //       meta: {
    //         title: "我的声音",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/cloneAudio",
    //       name: "createAudioClone",
    //       component: createAudioClone,
    //       meta: {
    //         title: "声音克隆",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/synthesisAudio",
    //       name: "synthesisAudio",
    //       component: synthesisAudio,
    //       meta: {
    //         title: "合成声音",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/audioCloneHistory",
    //       name: "audioCloneHistory",
    //       component: audioCloneHistory,
    //       meta: {
    //         title: "合成声音记录列表",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/humanOrder",
    //       name: "humanOrder",
    //       component: humanOrder,
    //       meta: {
    //         title: "数字人订单记录",
    //         requireAuth: true
    //       }
    //     }
    //   ]
    // },
    {
      path: "/digitizedHuman/startProduceHuman",
      name: "startProduceHuman",
      component: startProduceHuman,
      meta: {
        title: "制作数字人",
        requireAuth: true
      }
    }
  ]
});
