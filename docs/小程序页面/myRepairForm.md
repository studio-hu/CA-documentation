---
title: myRepairForm页面
---

获取用户提交的维修单

```typescript
   let openid: string = wx.getStorageSync('openid')
        // 根据用户openid来获取维修单信息
        getRepairFormByOpenId( openid ).then(res => {
            console.log(res);
            let list: IrepairList[] = res.data.data.reverse()
            let repairListPend: IrepairList[] = list.filter(item => item.state === 0)
            let repairListGet: IrepairList[] = list.filter(item => item.state === 1)
            let repairListDone: IrepairList[] = list.filter(item => item.state === 2)
            this.setData({
                repairListAll: list,
                repairListPend,
                repairListGet,
                repairListDone
            })
        })
```

调用`getRepairFormByOpenId`来获取用户所提交的维修单，再调用`filter`来过滤不同状态的维修单，具体用法请查阅MDN Plus文档[Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

