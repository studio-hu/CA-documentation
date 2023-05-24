---
title: my页面
---

跳转到用户个人信息详情页

```typescript
personalInformation(): void {
        let openid: string = wx.getStorageSync('openid')
        wx.navigateTo({
            url: '../personalInformation/personalInformation',
            events: {
                // 为指定事件添加一个监听器
                refresh: () => {
                    getUserByOpenId({ openid }).then(res => {
                        if (res.data.code === 200) {
                            // @ts-ignore
                            let { headshot, realname, repair } = res.data.data[0]
                            this.setData({
                                headshot,
                                realname,
                                repair
                            })
                        }
                    })
                }
            } 
        })
    },
```

创建了一个名叫`refresh`的监听器，在用户个人信息详情页，用户修改完信息点保存，会触发此监听器，原来刷新my页面的数据