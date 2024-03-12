<template>
  <div class="main" ref="main">
    <!-- 头部 -->
    <header>
      <img
        :src="
          httpUrls.ossUrl +
          'static/picture/6c198f38-1c43-43ba-936c-abb2fd6f122d.png'
        "
        alt=""
      />
      <div class="bg-box"></div>
      <div class="title"><span>AI</span>能力</div>
      <div class="remind">一站式链接优质的AIGC大模型</div>
      <div class="center">
        <div
          v-for="(item, index) in headerData"
          :key="item.title"
          @click="$router.push(item.path)"
          @mouseout="headerCheck = null"
          @mouseover="headerCheck = index"
          :class="headerCheck == index ? 'checkHeader' : ''"
        >
          <img
            :src="
              headerCheck == index
                ? httpUrls.ossUrl + item.checkImage
                : httpUrls.ossUrl + item.image
            "
            alt=""
          />
          <div :style="headerCheck == index ? 'color: white;' : ''">
            {{ item.title }}
          </div>
          <div
            :style="
              headerCheck == index ? 'color: rgba(255, 255, 255, 0.85);' : ''
            "
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </header>
    <!-- 主体 -->
    <section style="padding-top: 20px">
      <!-- 主题内容 -->
      <div class="left">
        <!-- 栏目 -->
        <div class="column" v-for="(item, index) in leftOne" :key="index">
          <!-- 标题 -->
          <div class="column-title">
            <div>{{ item.title }}</div>
            <div
              class="more"
              v-if="item.arr.length < 5"
              @click="leftMeny(index)"
            >
              查看更多
            </div>
            <div class="more" v-else @click="leftMeny(index)">收起</div>
          </div>
          <div class="column-conter">
            <div
              class="column-box"
              v-for="child in item.arr"
              :key="child.title"
              :ref="child.title"
              @click="toPage(item, child)"
            >
              <img
                class="box-image"
                v-if="child.topImage"
                :style="
                  child.title == '绘画模型'
                    ? 'width:32px;height: 32px;top: 7px;right: 5px; ':''
                "
                :src="httpUrls.ossUrl + child.topImage"
                alt=""
              />
              <div class="box-top">
                <div v-if="child.image">
                  <img
                    :style="
                      child.val == 1000 || child.val == 1001 || child.val == 8
                        ? 'width: 24px;height: 24px;'
                        : (item.title == 'AI工具集' && (child.title == '图片处理' || child.title == '视频处理'))?'width: 24px;height: 24px;': (item.title == 'AI工具集' && (child.title != '图片处理' || child.title != '视频处理'))?'width: 18px;height: 18px;':(child.title=='看图说话')?'width: 21px;height: 24px;':
                        (child.title=='多模型对话')?'width: 21px;height: 28px;':(child.title=='音视频转写' || child.title=='声音克隆' || child.title=='虚拟数字人' || child.title=='彩超宝宝')?'width: 21px;height: 21px;':''
                    "
                    :src="httpUrls.ossUrl + child.image"
                    alt=""
                  />
                </div>
                <span v-if="child.title != '语音对讲'">{{ child.title }}</span>
                <el-popover v-model="bool" placement="right" width="180" trigger="hover" v-if="child.title == '语音对讲'">
                  <div style="display: flex; justify-content: center">
                    <div>
                      <div style="text-align: center;background: #FFF;">请前往小程序体验该功能</div>
                      <img
                        style="width: 180px"
                        :src="
                          httpUrls.ossUrl +
                          'static/picture/c94d71e3-9a2c-4033-b3f6-fe2c3720057a.png'
                        "
                        alt=""
                      />
                    </div>
                  </div>
                  <span slot="reference">{{ child.title }}</span>
                </el-popover>
              </div>
              <div class="box-text" >{{ child.text }}</div>
              
            </div>
          </div>
        </div>
        <div id="element"></div>
      </div>
      <!-- AI资讯 -->
      <div class="right">
        <div class="right-top">
          <img
            style="width: 100%; height: 100%"
            :src="
              httpUrls.ossUrl +
              'static/picture/837d9bcd-e7de-477c-a340-e3e03c5d834b.png'
            "
            alt=""
          />
        </div>
        <!-- 相关推荐 -->
        <div class="related" >
          <!-- 标题 -->
          <div class="related-title">相关推荐</div>
          <!-- 相关推荐内容展示 -->
          <!-- <div> -->
          <div
            class="related-box"
            v-for="item in informationData"
            :key="item.message_id"
            style="cursor: pointer"
            @click="handleDetails(item)"
          >
            <div class="related-left">
              <div>{{ item.title }}</div>
              <div>
                <div class="related-time">
                  {{ informationTime(item.create_time) }}
                </div>
                <div>阅读{{ item.read_count }}</div>
              </div>
            </div>
            <img class="related-img" :src="item.image" />
          </div>
          <!-- </div> -->
          <div
            class="rightMeny"
            @click="$router.push('/information/information?ification=fun')"
            v-if="informationData.length != informationTotal"
          >
            查看更多
          </div>
        </div>
        <!-- 官方活动 -->
        <div class="activity">
          <div class="activity-title">官方活动</div>
          <div class="activity-content">
            <img
              :src="
                httpUrls.ossUrl +
                'static/picture/b19b6ab9-8259-4e45-8f6f-c368304b4f29.png'
              "
              @click="$router.push('/shoppingServer')"
            />
            <div>服务器购买&租赁</div>
          </div>
        </div>
      </div>
    </section>
    <footerRemark></footerRemark>
  </div>
</template>
<script>
import { informationList, informationDetail } from "../../api/information";
import httpUrls from "../../api/requestURL";
import footerRemark from "../../components/footerRemark";
import { mapGetters } from "vuex";
export default {
  name: "capacity",
  data() {
    return {
      httpUrls,
      bool:false,
      headerData: [
        {
          title: "问一问",
          text: "我将为你解答",
          image: "static/picture/96042174-23f0-41ac-95e9-7568b0a2150e.png",
          checkImage: "static/picture/1dcb6b51-5681-4620-8077-8be60cbee6c9.png",
          path: "/chat/Chat",
        },
        {
          title: "画一画",
          text: "关键词生图",
          image: "static/picture/4623d2ab-b50e-42f7-914f-8b9e7c1d7eec.png",
          checkImage: "static/picture/7a6d3d20-c4c1-42ab-903d-22b1cca3ad7c.png",
          path: "/drawChat/drawChat",
        },
        {
          title: "AI资讯",
          text: "精选AI资讯",
          image: "static/picture/38fa608f-da12-4255-9e9f-cb1a7ed01b5b.png",
          checkImage: "static/picture/3b2e9185-a86d-4a99-92c4-a548ac8eccf9.png",
          path: "/information/information",
        },
      ],
      headerCheck: null, //选中头部盒子
      leftOne: [
        // {
        //   title: "热门推荐",
        //   arr: [
        //     // {
        //     //   title: "AI工具集",
        //     //   text: "丰富功能应有尽有",
        //     //   query: "",
        //     //   topImage:
        //     //     "static/picture/7451f312-2a49-406b-afe7-e5033da6cdb5.png",
        //     // },
        //     {
        //       title: "AI数字孪生",
        //       text: "AI数字孪生",
        //       query: "/templateSelect/templateSelectNew",
        //       topImage:''
        //     },
        //     {
        //       title: "AI语音合成",
        //       text: "AI语音合成",
        //       query: "/workset/voiceChat",
        //       topImage:''
        //     },
        //     {
        //       title: "文档对话",
        //       text: "文档对话",
        //       query: "/workset/documentChat",
        //       topImage:'static/picture/b57fb660-b66a-4af0-9df4-06d77fd5e7e0.png'
        //     },
        //     {
        //       title: "看图说话",
        //       text: "看图说话",
        //       query: "/identify/identify",
        //       topImage:''
        //     },
        //     {
        //       title: "对话模型",
        //       text: "智能交流，秒回解答",
        //       query: "/chat/Chat",
        //       topImage:
        //         "static/picture/b23f5b61-c56f-472a-a462-d4fe8b3f3b16.png",
        //     },
        //     {
        //       title: "绘画模型",
        //       text: "无忧创意，从此开始",
        //       query: "/drawChat/drawChat",
        //       topImage:
        //         "static/picture/613fd85f-94b6-4126-a6f8-6f5d566bd6f0.png",
        //     },
        //   ],
        // },
        
        {
          title: "对话模型",
          arr: [
            {
              title: "无忧秘书",
              text: "先进AI、无限创意",
              query: "/chat/Chat",
              val: "12",
              image: "static/picture/89200a8a-36ab-43aa-9f6b-918b470c3f63.png",
            },
            {
              title: "文心一言",
              text: "推荐百度新一代语言大模型",
              query: "/chat/Chat",
              val: 4,
              image: "static/picture/2a4a8b53-5339-4f11-976d-af5c562656ba.png",
            },
            {
              title: "讯飞星火",
              text: "科大讯飞推出的新一代认知智能大模型",
              query: "/chat/Chat",
              val: 5,
              image: "static/picture/f6ccba51-9274-4a9e-9380-27775dda6cb1.png",
            },
            {
              title: "ChatGLM",
              text: "由智谱AI推出的千亿参赛对话大模型",
              query: "/chat/Chat",
              val: 8,
              image: "static/picture/e70dcaf9-f3cb-40c1-99de-b739f09a7d18.png",
            },
            {
              title: "通义千问",
              text: "阿里巴巴集团推出的大语言模型",
              query: "/chat/Chat",
              val: 10,
              image: "static/picture/c41cd958-a14d-4f6e-a26a-bd22c6b3460e.png",
            },
            // {
            //   title: "360智脑",
            //   text: "由360集团推出的认知型通用大模型",
            //   query: "/chat/Chat",
            //   val: 12,
            //   image: "static/picture/0bd787ee-2f53-4216-b810-030f6ba2f55c.png",
            // },
            {
              title: "火山云雀",
              text: "字节旗下火山引擎推出的大型语言模型",
              query: "/chat/Chat",
              val: 1000,
              image: "static/picture/a2d95978-ce23-4206-99cd-7b51a42a4388.png",
            },
            {
              title: "腾讯混元",
              text: "腾讯最新研发的大语言模型",
              query: "/chat/Chat",
              val: 1001,
              image: "static/picture/b21293b8-b53c-4aab-8a5e-7eb269776839.png",
            },
          ],
        },
        {
          title: "绘画模型",
          arr: [
            {
              title: "无忧秘书",
              text: "先进AI、无限创意",
              query: "13",
              image: "static/picture/89200a8a-36ab-43aa-9f6b-918b470c3f63.png",
            },
            {
              title: "通义万相",
              text: "一个不断进化的AI艺术创作大模型",
              query: "13",
              image: "static/picture/c41cd958-a14d-4f6e-a26a-bd22c6b3460e.png",
            },
            {
              title: "百度绘画",
              text: "AI一下，文字成画将创意变成创作",
              query: "3",
              image: "static/picture/5e052261-6ace-48c1-8c2a-3c6422207a3d.png",
            },
            {
              title: "火山引擎",
              text: "火山方舟推出的大模型服务，文生图",
              query: "14",
              image: "static/picture/90b3a7b1-1b0e-401b-bc2a-f71b56feb937.jpg",
            },
          ],
        },
        {
          title: "优选能力",
          arr: [
            {
              title: "多模型对话",
              text: "丰富功能应有尽有",
              query: "",
              topImage:
                "static/picture/b3ce80fe-81fa-41bb-b1a2-ae5f7f5f7a50.png",
            },
            {
              title: "音视频转文字",
              text: "会议记录、课堂笔记领域一键生稿",
              query: "",
              topImage:
                "static/picture/fa6c6413-ca88-4c70-8d0d-c1f7f9ac4408.png",
            },
            {
              title: "数字人",
              text: "数字人定制、想象无界",
              query: "",
              topImage:
                "static/picture/7baaebb1-12db-478c-ada5-eb845a26ae90.png",
            },
            {
              title: "文本识别",
              text: "智能识别图中的内容",
              query: "",
              topImage:
                "static/picture/ecfc7aab-9a13-43c3-89a1-092924f512c8.png",
            },
            {
              title: "文档对话",
              text: "上传文档、即可进行文档知识对话",
              query: "",
              topImage:
                "static/picture/b57fb660-b66a-4af0-9df4-06d77fd5e7e0.png",
            },
            {
              title: "人像抠图",
              text: "上传图片即可人像抠图",
              query: "",
              topImage:
                "static/picture/5b45f220-edb7-46e3-9a2a-a1d765db5cce.png",
            },
            {
              title: "人脸融合",
              text: "提供视频和图片即可进行人脸融合",
              query: "",
              topImage:
                "static/picture/ee2ae9b9-b522-41e0-9e00-7f04e2122064.png",
            },
          ],
        },
        {
          title: "AI工具集",
          arr: [
            {
              title: "对话模型",
              text: "多种对话模型任意选择",
              image: "static/picture/385ba555-a833-4e66-b1e8-9e2b94a21758.png",
              path:"/workset/worksetNav"
            },
            {
              title: "绘画模型",
              text: "多种绘画模型任意选择",
              image: "static/picture/fe226738-79ae-4752-bb37-40678c2506de.png",
              path:"/workset/worksetNav"
            },
            {
              title: "图片处理",
              text: "高效处理图片能力合集",
              image: "static/picture/429c8e3f-accc-4ffa-832b-9fc732904198.png",
              path:"/workset/worksetNav"
            },
            {
              title: "视频处理",
              text: "高效处理视频能力合集",
              image: "static/picture/ecadf13f-ca74-4c91-b006-cd1d1a17d858.png",
              path:"/workset/worksetNav"
            },
            {
              title: "文字识别",
              text: "识别图片中所包含的文字",
              image: "static/picture/62de06f8-babe-4eb3-85d2-692419f67f04.png",
              path:"/workset/textChat?title=通用文字识别"
            },
            {
              title: "语音合成",
              text: "根据文字合成语音",
              image: "static/picture/b2585ea5-2be9-4a27-a95c-b4eb2de6673d.png",
              path:"/workset/voiceChat"
            },
            {
              title: "文档对话",
              text: "上传文档进行文档知识对话",
              image: "static/picture/7aea648c-06f9-45cc-bf12-0459f931ba76.png",
              path:"/workset/documentChat"
            },
          ],
        },
        {
          title: "AI超级能力",
          arr: [
            {
              title: "音视频转写",
              text: "音频，视频快速转写文字",
              image: "static/picture/db7722da-b876-40d9-8a0d-5553f22fe9ad.png",
              path:'/convert/index'
            },
            {
              title: "看图说话",
              text: "上传图片并根据文字智能对话",
              image: "static/picture/588fbf6f-f74e-429e-8a24-b8303c289df7.png",
              path:'/identify/identify'
            },
            {
              title: "彩超宝宝",
              text: "根据四维彩超预测宝宝未来长相",
              image: "static/picture/0968d1c6-c33c-4906-8362-b2b0e359dc47.png",
              path:'/drawChat/fourDUltrasound'
            },
            {
              title: "多模型对话",
              text: "沉浸式体验群聊场景",
              query: "1",
              image: "static/picture/23736a28-671f-4774-a92a-d09ec7dcc7a0.png",
              path:'/manyModelChat/chat'
            },
            {
              title: "虚拟数字人",
              text: "定制你的专属数字人",
              image: "static/picture/07ed9435-7777-4048-bde7-75adc3f5db0b.png",
              path:'/digitizedHuman/produceIndex'
            },
            {
              title: "声音克隆",
              text: "根据需求定制专属声音",
              image: "static/picture/ee71c7e6-c41a-4fcb-903e-638a3f535b33.png",
              path:'/audioCloneNew/index'
            },
            {
              title: "语音对讲",
              text: "智能语音你问我答",
              image: "static/picture/b8a0f83c-f3eb-46c0-9d49-71574f2511f5.png",
              path:''
            },
          ],
        },
        {
          title: "AI实验室",
          arr: [
            {
              title: "AI35",
              text: "语言大模型3.5版本，语义理解不错",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",

              query: "0",
            },
            {
              title: "AI40",
              text: "语言大模型4.0版本，语义理解升级版",

              query: "1",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",
            },
            {
              title: "Stable Diffusion",
              text: "上传人像图即可生成相应的漫画人像",
              query: "9",
              image: "static/picture/d426d41b-c1e1-427e-b1bd-ec30c824ee14.jpg",
              // query: { value: 9, label: 'Stable Diffusion', size: '512*512' }
            },
            {
              title: "Midjourney",
              text: "上传图片，智能修图",
              image: "static/picture/9d013074-eff9-476e-864c-e98c67e00fbe.jpg",

              query: "6",
            },
            {
              title: "Dall.E3",
              text: "输入文字内容即可智能生图",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",
              query: "15",
            },
          ],
        },
      ],
      informationData: [], //资讯数据
      informationTotal: 25, //资讯总数
      page_index: 1,
      page_count: 8,
      userInfo: null,
      menyIndex: 4,
    };
  },
  components: {
    footerRemark
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.init();
    
  },
  mounted() {
    let dom = this.$refs[this.indexDom]
    if(dom != undefined ){
      dom[0].scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  },
  computed:{
    ...mapGetters([
      "indexDom"
    ]),
  },
  methods: {
    informationTime(val) {
      let time = new Date(val);
      return time.getMonth() + 1 + "-" + time.getDate();
    },
    init(str = "") {
      if (str == "gundong") {
        this.page_index++;
      }
      if (this.informationData.length >= this.informationTotal) {
        return;
      }
      //请求参数
      let data = {
        user_id: this.userInfo.user_id,
        message_type: 2,
        page_index: this.page_index,
        page_count: this.page_count,
      };
      console.log(data, "请求参数");
      informationList(data)
        .then((res) => {
          console.log(res.data);
          if (res.code == 20000) {
            this.informationTotal = res.total;
            if (str == "gundong") {
              this.informationData = this.informationData.concat(res.data);
              // console.log(this.informationData)
            } else {
              this.informationData = res.data;
            }
          }
        })
        .catch((err) => {
          console.log(err, "错误信息");
        });
    },
    leftMeny(index) {
      let data = [
        // {
        //   title: "热门推荐",
        //   arr: [
        //     // {
        //     //   title: "AI工具集",
        //     //   text: "丰富功能应有尽有",
        //     //   query: "",
        //     //   topImage:
        //     //     "static/picture/7451f312-2a49-406b-afe7-e5033da6cdb5.png",
        //     // },
        //     {
        //       title: "AI数字孪生",
        //       text: "AI数字孪生",
        //       query: "/templateSelect/templateSelectNew",
        //       topImage:''
        //     },
        //     {
        //       title: "AI语音合成",
        //       text: "AI语音合成",
        //       query: "/workset/voiceChat",
        //       topImage:''
        //     },
        //     {
        //       title: "文档对话",
        //       text: "文档对话",
        //       query: "/workset/documentChat",
        //       topImage:'static/picture/b57fb660-b66a-4af0-9df4-06d77fd5e7e0.png'
        //     },
        //     {
        //       title: "看图说话",
        //       text: "看图说话",
        //       query: "/identify/identify",
        //       topImage:''
        //     },
        //     {
        //       title: "对话模型",
        //       text: "智能交流，秒回解答",
        //       query: "/chat/Chat",
        //       topImage:
        //         "static/picture/b23f5b61-c56f-472a-a462-d4fe8b3f3b16.png",
        //     },
        //     {
        //       title: "绘画模型",
        //       text: "无忧创意，从此开始",
        //       query: "/drawChat/drawChat",
        //       topImage:
        //         "static/picture/613fd85f-94b6-4126-a6f8-6f5d566bd6f0.png",
        //     },
        //   ],
        // },
        
        {
          title: "对话模型",
          arr: [
            {
              title: "无忧秘书",
              text: "先进AI、无限创意",
              query: "/chat/Chat",
              val: "12",
              image: "static/picture/89200a8a-36ab-43aa-9f6b-918b470c3f63.png",
            },
            {
              title: "文心一言",
              text: "推荐百度新一代语言大模型",
              query: "/chat/Chat",
              val: 4,
              image: "static/picture/2a4a8b53-5339-4f11-976d-af5c562656ba.png",
            },
            {
              title: "讯飞星火",
              text: "科大讯飞推出的新一代认知智能大模型",
              query: "/chat/Chat",
              val: 5,
              image: "static/picture/f6ccba51-9274-4a9e-9380-27775dda6cb1.png",
            },
            {
              title: "ChatGLM",
              text: "由智谱AI推出的千亿参赛对话大模型",
              query: "/chat/Chat",
              val: 8,
              image: "static/picture/e70dcaf9-f3cb-40c1-99de-b739f09a7d18.png",
            },
            {
              title: "通义千问",
              text: "阿里巴巴集团推出的大语言模型",
              query: "/chat/Chat",
              val: 10,
              image: "static/picture/c41cd958-a14d-4f6e-a26a-bd22c6b3460e.png",
            },
            // {
            //   title: "360智脑",
            //   text: "由360集团推出的认知型通用大模型",
            //   query: "/chat/Chat",
            //   val: 12,
            //   image: "static/picture/0bd787ee-2f53-4216-b810-030f6ba2f55c.png",
            // },
            {
              title: "火山云雀",
              text: "字节旗下火山引擎推出的大型语言模型",
              query: "/chat/Chat",
              val: 1000,
              image: "static/picture/a2d95978-ce23-4206-99cd-7b51a42a4388.png",
            },
            {
              title: "腾讯混元",
              text: "腾讯最新研发的大语言模型",
              query: "/chat/Chat",
              val: 1001,
              image: "static/picture/b21293b8-b53c-4aab-8a5e-7eb269776839.png",
            },
          ],
        },
        {
          title: "绘画模型",
          arr: [
            {
              title: "无忧秘书",
              text: "先进AI、无限创意",
              query: "13",
              image: "static/picture/89200a8a-36ab-43aa-9f6b-918b470c3f63.png",
            },
            {
              title: "通义万相",
              text: "一个不断进化的AI艺术创作大模型",
              query: "13",
              image: "static/picture/c41cd958-a14d-4f6e-a26a-bd22c6b3460e.png",
            },
            {
              title: "百度绘画",
              text: "AI一下，文字成画将创意变成创作",
              query: "3",
              image: "static/picture/5e052261-6ace-48c1-8c2a-3c6422207a3d.png",
            },
            {
              title: "火山引擎",
              text: "火山方舟推出的大模型服务，文生图",
              query: "14",
              image: "static/picture/90b3a7b1-1b0e-401b-bc2a-f71b56feb937.jpg",
            },
          ],
        },
        {
          title: "优选能力",
          arr: [
            {
              title: "多模型对话",
              text: "丰富功能应有尽有",
              query: "",
              topImage:
                "static/picture/b3ce80fe-81fa-41bb-b1a2-ae5f7f5f7a50.png",
            },
            {
              title: "音视频转文字",
              text: "会议记录、课堂笔记领域一键生稿",
              query: "",
              topImage:
                "static/picture/fa6c6413-ca88-4c70-8d0d-c1f7f9ac4408.png",
            },
            {
              title: "数字人",
              text: "数字人定制、想象无界",
              query: "",
              topImage:
                "static/picture/7baaebb1-12db-478c-ada5-eb845a26ae90.png",
            },
            {
              title: "文本识别",
              text: "智能识别图中的内容",
              query: "",
              topImage:
                "static/picture/ecfc7aab-9a13-43c3-89a1-092924f512c8.png",
            },
            {
              title: "文档对话",
              text: "上传文档、即可进行文档知识对话",
              query: "",
              topImage:
                "static/picture/b57fb660-b66a-4af0-9df4-06d77fd5e7e0.png",
            },
            {
              title: "人像抠图",
              text: "上传图片即可人像抠图",
              query: "",
              topImage:
                "static/picture/5b45f220-edb7-46e3-9a2a-a1d765db5cce.png",
            },
            {
              title: "人脸融合",
              text: "提供视频和图片即可进行人脸融合",
              query: "",
              topImage:
                "static/picture/ee2ae9b9-b522-41e0-9e00-7f04e2122064.png",
            },
          ],
        },
        {
          title: "AI工具集",
          arr: [
            {
              title: "对话模型",
              text: "多种对话模型任意选择",
              image: "static/picture/385ba555-a833-4e66-b1e8-9e2b94a21758.png",
              path:"/workset/worksetNav"
            },
            {
              title: "绘画模型",
              text: "多种绘画模型任意选择",
              image: "static/picture/fe226738-79ae-4752-bb37-40678c2506de.png",
              path:"/workset/worksetNav"
            },
            {
              title: "图片处理",
              text: "高效处理图片能力合集",
              image: "static/picture/429c8e3f-accc-4ffa-832b-9fc732904198.png",
              path:"/workset/worksetNav"
            },
            {
              title: "视频处理",
              text: "高效处理视频能力合集",
              image: "static/picture/ecadf13f-ca74-4c91-b006-cd1d1a17d858.png",
              path:"/workset/worksetNav"
            },
            {
              title: "文字识别",
              text: "识别图片中所包含的文字",
              image: "static/picture/62de06f8-babe-4eb3-85d2-692419f67f04.png",
              path:"/workset/textChat?title=通用文字识别"
            },
            {
              title: "语音合成",
              text: "根据文字合成语音",
              image: "static/picture/b2585ea5-2be9-4a27-a95c-b4eb2de6673d.png",
              path:"/workset/voiceChat"
            },
            {
              title: "文档对话",
              text: "上传文档进行文档知识对话",
              image: "static/picture/7aea648c-06f9-45cc-bf12-0459f931ba76.png",
              path:"/workset/documentChat"
            },
          ],
        },
        {
          title: "AI超级能力",
          arr: [
            {
              title: "音视频转写",
              text: "音频，视频快速转写文字",
              image: "static/picture/db7722da-b876-40d9-8a0d-5553f22fe9ad.png",
              path:'/convert/index'
            },
            {
              title: "看图说话",
              text: "上传图片并根据文字智能对话",
              image: "static/picture/588fbf6f-f74e-429e-8a24-b8303c289df7.png",
              path:'/identify/identify'
            },
            {
              title: "彩超宝宝",
              text: "根据四维彩超预测宝宝未来长相",
              image: "static/picture/0968d1c6-c33c-4906-8362-b2b0e359dc47.png",
              path:'/drawChat/fourDUltrasound'
            },
            {
              title: "多模型对话",
              text: "沉浸式体验群聊场景",
              query: "1",
              image: "static/picture/23736a28-671f-4774-a92a-d09ec7dcc7a0.png",
              path:'/manyModelChat/chat'
            },
            {
              title: "虚拟数字人",
              text: "定制你的专属数字人",
              image: "static/picture/07ed9435-7777-4048-bde7-75adc3f5db0b.png",
              path:'/digitizedHuman/produceIndex'
            },
            {
              title: "声音克隆",
              text: "根据需求定制专属声音",
              image: "static/picture/ee71c7e6-c41a-4fcb-903e-638a3f535b33.png",
              path:'/audioCloneNew/index'
            },
            {
              title: "语音对讲",
              text: "智能语音你问我答",
              image: "static/picture/b8a0f83c-f3eb-46c0-9d49-71574f2511f5.png",
              path:''
            },
          ],
        },
        {
          title: "AI实验室",
          arr: [
            {
              title: "AI35",
              text: "语言大模型3.5版本，语义理解不错",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",
              query: "0",
            },
            {
              title: "AI40",
              text: "语言大模型4.0版本，语义理解升级版",

              query: "1",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",
            },
            {
              title: "Stable Diffusion",
              text: "上传人像图即可生成相应的漫画人像",
              query: "9",
              image: "static/picture/d426d41b-c1e1-427e-b1bd-ec30c824ee14.jpg",
              // query: { value: 9, label: 'Stable Diffusion', size: '512*512' }
            },
            {
              title: "Midjourney",
              text: "上传图片，智能修图",
              image: "static/picture/9d013074-eff9-476e-864c-e98c67e00fbe.jpg",

              query: "6",
            },
            {
              title: "Dall.E3",
              text: "输入文字内容即可智能生图",
              image: "static/picture/2b1ae683-8a59-450a-9d56-bfd55cc626a9.png",
              query: "15",
            },
          ],
        },
      ];
      if (data[index].arr.length <= 4) {
        this.$message("没有更多数据了...");
        return;
      }
      if (this.leftOne[index]["arr"].length <= 4) {
        this.$set(
          this.leftOne[index],
          "arr",
          data[index]["arr"].slice(0, data[index]["arr"].length)
        );
      } else {
        this.$set(this.leftOne[index], "arr", data[index]["arr"].slice(0, 4));
      }
    },
    //跳转Ai资讯
    handleDetails(val) {
      // 请求参数
      let data = {
        message_type: val.message_type,
        message_id: val.message_id,
      };
      sessionStorage.setItem("information", JSON.stringify(data));
      this.$router.push(`/information/information`);
    },
    toPage(item, type) {
      switch (item.title) {
        case "热门推荐":
          // this.$router.push(`/chat/Chat?value=${type.query}`);
          if (type.title == "AI工具集") {
            this.$router.push("/treasureBoxNav");
          } else if (type.title == "AI实验室") {
            this.$router.push("/chataboratory/laboratoryDrawChat?value=9");
          } else if (type.title == "AI视觉馆") {
            this.$router.push("/visionNav/visionNav");
          } else if (type.title == "智能工具") {
            this.$message("功能正在开发中...");
          } else if (type.title == "绘画模型") {
            this.$router.push("/drawChat/drawChat?value=13");
          } else if (type.title == "对话模型") {
            this.$store.dispatch("app/changeSelectChat", 12);
            this.$router.push("/chat/Chat");
          }else{
            this.$router.push(type.query);
          }
          break;
        case "优选能力":
          // type.title == '语音对讲'
          if (type.title == "多模型对话") {
            this.$router.push("/manyModelChat/chat");
          } else if (type.title == "音视频转文字") {
            this.$router.push("/convert/index");
          } else if (type.title == "数字人") {
            this.$router.push("/digitizedHuman/index");
          } else if (type.title == "文本识别") {
            this.$router.push("/identify/identify");
          } else if (type.title == "文档对话") {
            this.$router.push("/workset/documentChat");
          } else if (type.title == "人像抠图") {
            this.$router.push("/vision/vision?title=人物抠图");
          } else if (type.title == "人脸融合") {
            this.$router.push("/vision/vision?title=人脸融合");
          }
          break;
        case "对话模型":
          // if (type.query == "/chat/Chat") {
          //   this.$router.push(`/chat/Chat`);
          // } else {
          this.$store.dispatch("app/changeSelectChat", type.val);

          this.$router.push("/chat/Chat");
          // }
          break;
        case "绘画模型":
          if (type.title == '无忧秘书') {
            this.$router.push("/drawChat/drawChat");
          }else{
            this.$router.push("/drawChat/drawChat?value=" + type.query);
            sessionStorage.setItem("indexType", JSON.stringify(type.query));
          }
          break;
        case "AI工具集":
          if (type.path == '/workset/worksetNav') {
            this.$store.dispatch("app/changeworksetLabel", type.title);
          this.$router.push(type.path);
          } else {
            this.$router.push(type.path);
          }
          break;
        case "AI超级能力":
          if (type.path != ''){
            this.$router.push(type.path);
          }else{
            this.bool = !this.bool
          }
          break;
        case "AI视觉馆":
          console.log(item);
          item.arr.forEach((item2, index) => {
            if (item2.title == type.title && index < 12) {
              this.$router.push(`/vision/vision?title=${type.title}`);
            } else if (item2.title == type.title && index >= 12) {
              this.$message("正在开发中...");
            }
          });
          break;
        case "助理中心":
          this.$router.push("/templateSelect/templateSelect");
          this.$store.dispatch("app/changeApplicationCenterId", type.id);
          sessionStorage.setItem("applicationId", type.id);
          sessionStorage.setItem("applicationType", type.tab_id);
          break;
        case "AI实验室":
          if (
            type.title == "AI35" ||
            type.title == "AI40"
          ) {
            this.$router.push(
              `/chataboratory/laboratoryChat?value=${type.query}`
            );
            sessionStorage.setItem("indexType", type.query);
          } else {
            console.log(type.query)
            this.$router.push(
              `/chataboratory/laboratoryDrawChat?value=${type.query}`
            );
            sessionStorage.setItem("indexType", JSON.stringify(type.query));
          }
          break;
        case "智能工具":
          if (type.title == "数字人") {
            this.$router.push(type.page);
          } else if (type.title == "彩超宝宝") {
            this.$router.push("/drawChat/fourDUltrasound");
          } else if (type.title == "音视频转文字") {
            this.$router.push("/convert/index");
          } else if (type.title == "文本识别") {
            this.$router.push(`/vision/vision?title=通用文字识别`);
          } else if (type.title == "文档对话") {
            this.$router.push("/document/chat");
          } else if (type.title == "看图说话") {
            this.$router.push("/identify/identify");
          }

          break;
        default:
          break;
      }
      this.$store.dispatch("app/changeIndexDom", type.title);
    },
  },
};
</script>
<style scoped>
.activity {
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
}
.activity-title {
  margin-bottom: 12px;
}
.activity-content img {
  width: 100%;
  min-height: 120px;
  cursor: pointer;
}
.activity-content div {
  font-size: 14px;
}
.main {
  padding: 0px;
  width: 100%;
  overflow: hidden;
}

header {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 20px;
  /* background: rgb(241, 242, 245); */
}
header .bg-box {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0px;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(241, 242, 245, 1)
  );
}
header > img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
}

header .title {
  padding-top: 50px;
  text-align: center;
  color: #333;
  font-family: PingFang SC;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 72px */
}

header .title span {
  background: linear-gradient(
    277deg,
    #1f64ff 54.69%,
    #97b7ff 64.14%,
    #1f64ff 74.27%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

header .remind {
  margin-top: 16px;
  color: #333;
  font-family: PingFang SC;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  /* 80% */
}

header .center {
  width: 60%;
  height: 196px;
  background: white;
  border-radius: 8px;
  border: 1px solid #fff;
  padding: 20px 35px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 39px;
  padding-bottom: 20px;
}

header .center > div {
  width: calc(100% / 3 - 40px);
  text-align: center;
  height: 100%;
  border-radius: 10px;
  background: #f9fafb;
  padding-top: 38px;
  box-sizing: border-box;
  cursor: pointer;
}

header .checkHeader {
  background: #1f64ff !important;
  color: #fff !important;
}

header .center > div img {
  margin: auto;
  text-align: center;
}

header .center > div div:nth-child(2) {
  color: #333;
  font-family: PingFang SC;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  margin: 4px auto;
  /* 27px */
}

header .center > div div:nth-child(3) {
  /* color: rgba(255, 255, 255, 0.85); */

  font-family: PingFang SC;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 21px */
  color: #8b8b8b;
}

section {
  width: 100%;
  background: #f1f2f5;
  padding: 0px 26px;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  /* flex-direction: row; */
  box-sizing: border-box;
  height: 100%;
}

section .left {
  width: calc(100% - 300px - 20px);
  /* height: 800px; */
  /* flex: 1; */
}

.column {
  box-sizing: content-box;
  margin-bottom: 20px;
  padding: 0px;
}

.column-title {
  color: #19191a;
  font-family: PingFang SC;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
}

.column-title .more {
  color: #1f64ff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 1%;
}

.column-conter {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: content-box;
}

.column-box {
  width: 23%;
  height: 110px;
  padding: 10.5px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  border-radius: 8px;
  margin: 8px 1%;
  cursor: pointer;
}
/* .column-box:hover{
  background: rgb(204, 204, 204,0.7);
} */

.column-box:last-child {
  margin-right: 0px;
}

.column-box .box-image {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.column-box .box-top {
  display: flex;
}

.column-box .box-top >div:first-child {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 3.2px;
  border: 0.8px solid #f4f5f9;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  overflow: hidden;
}

.column-box .box-top >div:first-child img {
  width: 16px;
  height: 16px;
}


.column-box .box-top span {
  color: #000;
  font-family: PingFang SC;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  /* 24px */
}

.column-box .box-text {
  color: #8f8f8f;
  font-family: PingFang SC;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin-top: 12px;
  /* 21px */
}

.right {
  width: 300px;
  min-height: 100%;
  padding-top: 50px;
  /* flex: 1; */
}

.right-top {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.right-top > img {
  width: 100%;
  height: 100%;
}

.related {
  width: 100%;
  /* min-height: 2063px; */
  /* height: calc(100% - 320px); */
  flex-shrink: 0;
  border-radius: 4px;
  padding: 14px;
  box-sizing: border-box;
  background: #fff;
}

.related-box {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
}

.related-left {
  position: relative;
  width: calc(100% - 150px);
}

.related-left > div:last-child {
  color: #a6a6a6;
  width: 100%;
  font-family: PingFang SC;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
}

.related-left > div:last-child .related-time {
  /* margin-right: 51px; */
}

.related-left > div:last-child div:last-child {
  /* margin-left: 16px; */
}

.related-left > div:first-child {
  color: #333;

  font-family: PingFang SC;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 18px */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: absolute;
  top: 0px;
}

.related-img {
  border-radius: 10px;
  width: 130px;
  height: 80px;
}

.rightMeny {
  width: 80%;
  line-height: 50px;
  text-align: center;
  border: 1px solid blue;
  color: blue;
  border-radius: 8px;
  margin: auto;
  margin-top: 30px;
  cursor: pointer;
}
</style>
<!-- <style>
.footer_remark-on {
    background-color: rgb(241, 242, 245) !important;
}
</style> -->