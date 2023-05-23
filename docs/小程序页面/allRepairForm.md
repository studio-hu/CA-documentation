allRepairForm页面

## 数据类型定义

```typescript
// 维修单数据类型定义
interface IrepairList {
    //电脑型号（类型为字符串）
    computername: string,
    //电脑类型（类型为字符串）
    computertype: string,
    // 预约时间（类型为字符串）
    createtime: string,
    // 宿舍号（类型为字符串）
    dormnum: string,
    // id（类型为数值）
    id: number,
    // 图片（类型为字符串）
    image: string,
    // 维修人员（类型为字符串）
    name: string,
    // 用户唯一标识（类型为字符串）
    openid: string,
    // 手机号（类型为字符串）
    phone: string,
    // 报修人（类型为字符串）
    realname: string,
    // 问题描述（类型为字符串）
    reason: string,
    // 备注（类型为字符串）
    remark: string,
    // 维修人员openid（类型为字符串）
    repairid: string,
    // 维修单状态（0：待处理，1：已接单，2：已完成）（类型为数值）
    state: number,
    // 报修人学号（类型为字符串）
    stunum: string,
    // 更新时间（类型为字符串）
    updatetime: string
}
// 对data的数据进行类型定义
interface Idata {
    // 维修单数据类型为IrepairList对象数组
    repairListAll: IrepairList[],
    repairListPend: IrepairList[],
    repairListGet: IrepairList[],
    repairListDone: IrepairList[],
    /**
     * 分页
     */
    // 全部维修单当前页（类型为数值）
    currentPageAll: number,
    // 状态为待处理的维修单当前页（类型为数值）
    currentPagePend: number,
    // 状态为已接单的维修单当前页（类型为数值）
    currentPageGet: number,
    // 状态为已完成的维修单当前页（类型为数值）
    currentPageDone: number,
    // 每次发送请求返回的数据条数（类型为数值）
    PageSize: number,
    // 总页数（类型为数值）
    pages: number,
    // 屏幕高度（类型为数值）
    windowHeight: number,
    // 显示区域高度（类型为数值）
    height: number
}
```

