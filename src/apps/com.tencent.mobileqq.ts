import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '全屏广告-小程序广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.tencent.luggage.wxa.standalone_open_runtime.container.WxaContainerMultiTaskActivity0',
          matches: [
            '@ImageView < FrameLayout <2 FrameLayout <5 FrameLayout <2 FrameLayout <2 FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26586330',
        },
      ],
    },
  ],
});
