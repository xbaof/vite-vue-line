<template>
  <div id="resume">
    <div class="container">
      <div class="header-container">
        <div class="name"> {{ data.name }} </div>
        <div class="content">
          <el-tag v-for="(item, index) in data.status" :key="index" effect="info" round class="ml10"
            >{{ item }}
          </el-tag>
        </div>
        <div class="content">
          <el-text class="mr18">上海</el-text>
          <el-text>前端</el-text>
          <el-divider class="rotate-divider" direction="vertical" />
          <el-text>后端</el-text>
          <el-divider class="rotate-divider" direction="vertical" />
          <el-text>全栈开发</el-text>
        </div>
        <div class="content">
          <el-text class="mr10">
            <svg-icon name="el-icon-Iphone" />
            15054223505
          </el-text>
          <el-text>
            <svg-icon class="mr5" name="el-icon-Message" />
            <a style="vertical-align: 0.08em"> xiaogu060@163.com </a>
          </el-text>
        </div>
        <div class="content">
          <el-tag v-for="(item, index) in data.skill" :key="index" effect="info" round class="ml10">{{ item }} </el-tag>
        </div>
      </div>
      <div class="section">
        <el-divider content-position="left"> <span>掌握技能</span></el-divider>
        <div class="content mb20">
          <ul>
            <li v-for="(magteringSkill, magteringSkillIndex) in data.magteringSkills" :key="magteringSkillIndex">{{
              magteringSkill
            }}</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <el-divider content-position="left"> <span>工作经历</span></el-divider>
        <template v-for="(experience, experienceIndex) in data.experiences" :key="experienceIndex">
          <div class="content mb20">
            <div class="row">
              <div class="col-title">{{ experience.companyName }}</div>
              <div class="col-info">{{ experience.time }}</div>
            </div>
            <div class="row">
              <div class="col-info">{{ experience.post }}</div>
            </div>
            <div class="row mt10 mb10" style="justify-content: flex-start">
              <el-tag
                v-for="(skill, skillIndex) in experience.skills"
                :key="skillIndex"
                effect="plain"
                round
                type="info"
                class="ml10"
                >{{ skill }}
              </el-tag>
            </div>
            <template v-for="(item, infoIndex) in experience.info" :key="infoIndex">
              <div class="row mt20">
                <span style="font-size: 1em; color: #495057">{{ item.title }}</span>
              </div>
              <ul>
                <li v-for="(d, dIndex) in item.describe" :key="dIndex">{{ d }} </li>
              </ul>
            </template>
          </div>
        </template>
      </div>
      <div class="section">
        <el-divider content-position="left"> <span>自我评价</span></el-divider>
        <div class="content mb20">
          <ul>
            <li v-for="(selfEvaluation, selfEvaluationIndex) in data.selfEvaluation" :key="selfEvaluationIndex">{{
              selfEvaluation
            }}</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <el-divider content-position="left"> <span>教育经历</span></el-divider>
        <div class="content mb20">
          <div class="row">
            <div class="col-title">威海职业学院</div>
            <div class="col-info">2016.09 ~ 2019.07</div>
          </div>
          <div class="row">
            <div class="col-info">商务日语(对日软件外包)</div>
          </div>
        </div>
      </div>
      <div class="section">
        <el-divider content-position="left"> <span>其他链接</span></el-divider>
        <div class="content mb20">
          <div class="row">
            <a href="https://gitee.com/coepi/Ryuu.Core" target="_blank" class="col-title" style="vertical-align: 0.08em"
              >Ryuu.Core</a
            >
          </div>
          <div class="row">
            <div class="info">.Net Core WebApi 后端管理系统框架</div>
          </div>
          <div class="row mt10 mb10" style="justify-content: flex-start">
            <el-tag effect="plain" round type="info" class="mr10"> .Net5 </el-tag>
            <el-tag effect="plain" round type="info" class="mr10"> JWT </el-tag>
            <el-tag effect="plain" round type="info" class="mr10"> APO </el-tag>
            <el-tag effect="plain" round type="info" class="mr10"> ... </el-tag>
          </div>
        </div>
        <div class="content mb20">
          <div class="row">
            <a
              href="https://gitee.com/coepi/vite-vue-learn"
              target="_blank"
              class="col-title"
              style="vertical-align: 0.08em"
            >
              vite-vue-learn
            </a>
          </div>
          <div class="row">
            <div class="info">基于vue-element-admin的vue3升级版</div>
          </div>
          <div class="row mt10 mb10" style="justify-content: flex-start">
            <el-tag effect="plain" round type="info" class="mr10"> Vue3 </el-tag>
            <el-tag effect="plain" round type="info" class="mr10"> TypeScrip </el-tag>
            <el-tag effect="plain" round type="info" class="mr10"> Element Plus </el-tag>
          </div>
        </div>
      </div>
      <div class="footer">
        <span>更新于：{{ timeText() }} ago</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const data = {
  name: '顾建昌',
  status: ['求职中', '目前在职'],
  skill: ['.Net Core', 'Vue', 'JavaScript', 'TypeScript'],
  magteringSkills: [
    '能够独立完成项目架构搭建，熟悉 .Net Core 和.Net Framework',
    '熟悉常用后端框架：MVC、WebApi、Worker Service',
    '熟悉常用设计模式：掌握 IOC、AOP、多线程、异步编程、委托等技术的运用',
    '熟悉 HTML,CSS,JS,Ajax,Echarts,Vue2，Bootstrap、EasyUI、Layui、ElementUI进行前端页面的开发，有数据可视化经验',
    '可以在项目中熟练使用单例、观察者、代理模式、装饰器模式、工厂等模式等',
    '目前会用的后台组件： Autofac / AutoMapper / Serilog / Swagger / SqlSugar / Quartz 等',
    '目前会用的消息队列组件：Mqtt / Redis / RabbitMQ',
    '目前会用的数据库：MySQL / SqlServer / Oracle / MongoDB ， 也尝试过国产数据库达梦、时序库InfluxDb2.1、松果'
  ],
  experiences: [
    {
      companyName: '山东博硕自动化技术有限公司',
      time: '2023.06 ~ 至今',
      post: '.net研发工程师',
      skills: ['Jquery', 'Html', 'SQL Server'],
      info: [
        {
          title: '工程拌和站智能管理平台',
          describe: ['负责与硬件设备对接（GPS、工控程序）', '负责产品升级和功能维护']
        }
      ]
    },
    {
      companyName: '山东达斯特信息技术有限公司',
      time: '2020.11 ~ 2023.05',
      post: '.net研发工程师',
      skills: ['.net Core', 'mvc', 'vue2', 'uniapp', 'redis'],
      info: [
        {
          title: '物联网平台迭代',
          describe: [
            '作为物联网平台的负责人对旧平台进行前后端业务迭代和基础设施建设，进行系统设计、数据迁移、功能优化等工作',
            '负责重构数据接收服务在低延迟的前提下支撑四五千 QPS ，接入时序数据库InfluxdB，制定硬件模块数据异常、信号波动等报警推送和进行异常流量分析（Mqtt + Redis消息队列）',
            '负责手机端升级与重构'
          ]
        },
        {
          title: '排污企业用电监管项目',
          describe: [
            '环保局面向企业的电量管控系统',
            '前期参与企业调研、制定方案，协调企业负责人指导施工人员完成硬件实施',
            '参与平台的前端界面，后端 API 的开发（MVC Core + EF + Mysql）',
            '负责平台中针对硬件上报的异常数据推送报警和短信推送',
            '负责手机端的研发'
          ]
        },
        {
          title: '无组织管控平台',
          describe: [
            '参与平台的功能设计及开发（WebForm + Easy UI + echart）',
            '负责在软件平台中增加对厂区内雾帘、雾炮、扬尘检测仪等设备的参数采集及行为控制 （Modbus、串口、PLC）'
          ]
        },

        {
          title: '环保局大屏可视化',
          describe: [
            '对环保局内多个系统的数据抓取及整合（定时任务 + Python模拟登录获取token + C#请求URL）',
            '负责大屏可视化系统前后端功能研发 （Html + Bootstrap + Echart + Layui + JavaScript）'
          ]
        }
      ]
    },
    {
      companyName: '山东正基力信息科技有限公司',
      time: '2019.08 ~ 2020.11',
      post: '.net研发工程师',
      skills: ['Winform', 'Dev控件', 'EF', 'Sql Server'],
      info: [
        {
          title: 'ERP定制化开发',
          describe: [
            '参与需求调研、方案整理和数据库设计',
            '负责‘存’部分的流程和功能开发与维护（Winform + Devexpress）',
            '平台对接厂内地磅称重（串口通讯）'
          ]
        }
      ]
    },
    {
      companyName: '山东三希环保科技有限公司',
      time: '2018.10 ~ 2019.07',
      post: '.net研发（实习）',
      skills: ['Winform', 'EasyUI', 'MVC5', 'Bootstrap', 'Sql Server'],
      info: [
        {
          title: '在线监测系统',
          describe: ['参与需求调研、功能调整和二次开发', '第三方公司合作项目的技术对接']
        }
      ]
    }
  ],
  selfEvaluation: [
    '基本功扎实，具有良好的代码编写风格，遵循 Restful 代码风格、注重代码质量以及代码可维护性以及稳定性。',
    '喜欢接触新东西，用lua写过游戏Mod和游戏脚本，用Python写过小说网站抓取脚本',
    '时常关注.NET 社区动态',
    '乐于接受和学习新技术。敢于面对挑战，吸取经验。为人和善，性格开朗'
  ]
}
const updateDate = new Date('2024-06-30')
const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000 // 每天的毫秒数
  const firstTime = date1.getTime() // 第一个时间的毫秒数
  const secondTime = date2.getTime() // 第二个时间的毫秒数

  return Math.round((secondTime - firstTime) / oneDay)
}
const days = daysBetween(updateDate, new Date())
const timeText = () => {
  if (days < 30) {
    if (days < 7) {
      return days + ' days'
    }
    return Math.round(days / 30) + ' weeks'
  }
  return Math.round(days / 30) + ' months'
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
