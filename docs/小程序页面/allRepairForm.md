---
title: allRepairForm页面
---

### 跳转到维修单详情页

```typescript
showRepair(event: any): void {
        console.log('event', event);
        // 获取当前点击的维修单信息
        let currentValue: IrepairList = event.currentTarget.dataset.value
        // 获取当前点击的维修单状态
        let { state } = event.currentTarget.dataset.value
        wx.navigateTo({
            /**
             * 页面跳转跳转到维修单详情页，路径后可以带参数。
             * 参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，
             * 不同参数用 & 分隔；如 'path?key=value&key2=value2'
             */
            url: `../showRepair/showRepair?admin=1&state=${state}`,
            events: {
                // 为指定事件添加一个监听器
                refreshPage: () => {
                    this.setData({
                        repairListAll: [],
                        repairListPend: [],
                        repairListGet: [],
                        repairListDone: [],
                        currentPageAll: 1,
                        currentPagePend: 1,
                        currentPageGet: 1,
                        currentPageDone: 1,
                    })
                    this.onLoad()
                }
            },
            success: res => {
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('currentValue', {
                    data: currentValue
                })
            }
        })
    },
```

event的数据

![image-20230524014021137.png](img%2Fimage-20230524014021137.png)[image-20230524014021137](img%2Fimage-20230524014021137.png))

` let currentValue: IrepairList = event.currentTarget.dataset.value`

所拿到的值就是当前维修单的详细信息

我们再通过`eventChannel`向被打开页面传送数据
               ` res.eventChannel.emit('currentValue', {
                    data: currentValue
                })`

维修单详情页就可以获取到传过来的数据，然后进行页面渲染

------



```typescript
 events: {
	// 为指定事件添加一个监听器
	refreshPage: () => {
		this.setData({
			repairListAll: [],
			repairListPend: [],
			repairListGet: [],
			repairListDone: [],
			currentPageAll: 1,
			currentPagePend: 1,
			currentPageGet: 1,
			currentPageDone: 1,
		})
	this.onLoad()
	}
},
```

创建了一个名叫`refreshPage`的监听器，在维修单详情页调用，会执行函数里面的代码，刷新全部的维修单，数据重新加载