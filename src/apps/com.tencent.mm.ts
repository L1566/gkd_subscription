import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '警告⚠️：该规则有可能会误触，请谨慎开启',
      activityIds: [
        '.plugin.sns.ui.SnsTimeLineUI',
        '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        '.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: [
            '@LinearLayout[clickable=true] > [text="广告" || text="廣告" || text="Sponsored"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13000395',
            'https://i.gkd.li/i/12905837',
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/16568338',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          actionDelay: 300,
          position: {
            left: 'width * 0.9223',
            top: 'height * 0.5',
          },
          anyMatches: [
            '@LinearLayout >2 [text="广告"][visibleToUser=false]',
            'RecyclerView > FrameLayout[childCount=1] > RelativeLayout > FrameLayout > LinearLayout > LinearLayout > LinearLayout > @LinearLayout[childCount=2][getChild(0).getChild(0).text!=null] > LinearLayout[index=1][clickable=false][visibleToUser=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',
            'https://i.gkd.li/i/19665911',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/19717709',
        },
        {
          key: 2,
          matches:
            '[name$="RecyclerView"||name$="ListView"] >(1,2) RelativeLayout >3 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/i/19633571',
          ],
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1, 2],
          key: 25,
          name: '点击[关闭]',
          fastQuery: true,
          anyMatches: [
            '[text^="关闭" || text*="Close" || text="關閉此廣告"][clickable=true][visibleToUser=true]', //1
            '@LinearLayout[clickable=true] > [text="关闭该广告" || text*="Close"][visibleToUser=true]', //2
            '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]', //3
            '@[text="关闭该广告"] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]', //4
          ],
          snapshotUrls: [
            //1
            'https://i.gkd.li/i/13926578',
            'https://i.gkd.li/i/15531274',
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
            'https://i.gkd.li/i/13791202',
            //2
            'https://i.gkd.li/i/14783820',
            'https://i.gkd.li/i/15284966',
            //3
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/19666176',
            //4
            'https://i.gkd.li/i/19633486',
          ],
        },

        // 预留key
        // 第三段
        {
          preKeys: [25],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭" || text="Close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12663984',
            'https://i.gkd.li/i/12905846',
            'https://i.gkd.li/i/14647940',
            'https://i.gkd.li/i/14783534',
          ],
        },

        // 预留key
        // 第四段
        {
          preKeys: [50],
          key: 75,
          name: '点击[确认]',
          fastQuery: true,
          matches:
            '@[text="确认"][visibleToUser=true] -2 [text="不感兴趣原因"]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
        },
      ],
    },

    {
      key: 10,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      priorityTime: 10000,
      activityIds: [
        '.plugin.appbrand.ui.AppBrandUI',
        '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },

    {
      key: 17,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      activityIds: ['.plugin.finder.', '.ui.LauncherUI'],
      rules: [
        {
          key: 0,
          matches:
            '@[text="我知道了"][index=parent.childCount.minus(1)] <n LinearLayout > [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13538145',
            'https://i.gkd.li/i/13575195',
            'https://i.gkd.li/i/14735456',
            'https://i.gkd.li/i/14896723',
            'https://i.gkd.li/i/18135103',
            'https://i.gkd.li/i/19683937',
          ],
        },
        {
          key: 1,
          matches:
            '@[text="不再提醒"][clickable=true] <2 [index=parent.childCount.minus(1)] -n [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24796791',
        },
      ],
    },

    {
      key: 25,
      name: '局部广告-订阅号消息-推荐文章',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
          matches:
            'View[childCount=2] > View[desc$="推​荐​"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14392392',
        },
      ],
    },

    {
      key: 28,
      name: '分段广告-订阅号消息-视频推荐',
      desc: '点击[X]-点击[不喜欢此类视频]-点击[确定]',
      activityIds:
        '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击[X]',
          matches:
            '[desc="订阅号消息"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475',
          snapshotUrls: 'https://i.gkd.li/i/14436176',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不喜欢此类视频]',
          matches: '[desc="不喜欢此类视频"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4',
          snapshotUrls: 'https://i.gkd.li/i/14444654',
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[确定]',
          matches: '[desc="确定"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10',
          snapshotUrls: 'https://i.gkd.li/i/14436190',
        },
      ],
    },

    {
      key: 30,
      name: '全屏广告-文档页面-腾讯文档APP弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },

    {
      key: 31,
      name: '分段广告-订阅号消息-推荐阅读',
      desc: '点击关闭',
      activityIds:
        '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          matches:
            'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
        },
      ],
    },

    {
      key: 32,
      name: '权限提示-权限申请弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.pluginsdk.permission.PermissionActivity',
          matches: ['[text="权限申请"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
        },
      ],
    },

    {
      key: 35,
      name: '分段广告-公众号文章内广告',
      desc: '注意⚠️：该规则有概率误触，请谨慎开启',
      activityIds: [
        '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
        '.plugin.webview.ui.tools.MMWebViewUI',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            // 防止在第二段、第三段出现时触发，防止在文章末尾广告关闭后触发
            '[text="不感兴趣" || text="与我无关" || text="感谢你的反馈"][visibleToUser=true]',
          ],
          matches:
            '@View[childCount<5][bottom<2000] > [text^="广告"][text.length<4][visibleToUser=true]', // 某些微信版本上该节点的`clickable=false`
          exampleUrls: [
            'https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37',
            'https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/i/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/i/14006180', // .plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/i/17093010', // .plugin.webview.ui.tools.MMWebViewUI
            'https://i.gkd.li/i/16796663', // 内容尾部广告
            'https://i.gkd.li/i/16796725', // 内容中部广告
            'https://i.gkd.li/i/16798663', // clickable=false
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/i/17276697', // text="广告 "，有空格
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15198464', // 防止在文章末尾广告关闭后误触
          ],
        },
        {
          // 第二段-有“关闭此广告”按钮，则直接关闭该广告
          preKeys: [0],
          key: 20,
          matches: '[text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796729', // 内容中部广告
            'https://i.gkd.li/i/17113565', // 在某些情况下，点击“不感兴趣”会导致无法执行下一步操作，因此点击“关闭此广告”
          ],
        },
        {
          // 第二段-无“关闭此广告”按钮，则点击“不感兴趣”，需继续执行第三段
          preKeys: [0],
          key: 25,
          excludeMatches: [
            '[text="感谢你的反馈"][visibleToUser=true]',
            '[text="关闭此广告"][visibleToUser=true]',
          ],
          matches: '[text="不感兴趣"][visibleToUser=true]', // 为确保能够关闭尾部广告，此处点击“不感兴趣”而非“关闭此广告”
          snapshotUrls: [
            'https://i.gkd.li/i/16796666', // 内容尾部广告
            'https://i.gkd.li/i/16798661', // clickable=false
            'https://i.gkd.li/i/15198459', // 无id
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15061424', // 使用excludeMatches防止在文章末尾广告关闭后误触'
            'https://i.gkd.li/i/16796729', // 内容中部广告，若同时存在“关闭此广告”与“不感兴趣”，则点击前者
          ],
        },
        {
          // 第三段
          preKeys: [25],
          key: 50,
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796674', // 内容尾部广告
            'https://i.gkd.li/i/16796732', // 内容中部广告
            'https://i.gkd.li/i/16798658', // clickable=false
            'https://i.gkd.li/i/15198461', // 无id
          ],
        },
      ],
    },

    {
      key: 37,
      name: '全屏广告-小程序弹窗广告',
      desc: '点击关闭',
      matchTime: 20000,
      // actionMaximum: 1,
      actionCd: 300, // 有时候需要点击多次
      actionDelay: 300, // 过早触发有概率无效
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发
          matches:
            '@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31',
          snapshotUrls: [
            'https://i.gkd.li/i/13459614',
            'https://i.gkd.li/i/16943989',
            'https://i.gkd.li/i/16920797',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
        },
      ],
    },
    {
      key: 38,
      name: '弹窗广告-跳转某服务广告',
      desc: '取消推荐',
      actionMaximum: 2, // 最多触发2次
      actionCd: 300,
      rules: [
        {
          activityIds: '.plugin.appbrand.ui.AppBrandUI00',
          matches:
            '@TextView[text="取消推荐"] <3 View < View < View[id="shiQuinsertScreen"] <7 WebView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout <3 RelativeLayout < FrameLayout <2 FrameLayout <2 FrameLayout <2 [vid="w_"]',
          snapshotUrls: 'https://i.gkd.li/i/26666158',
        },
      ],
    },
  ],
});
