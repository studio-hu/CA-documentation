---
title: repair页面
---

维修单页面

日期选择使用Vant Weapp的[Calendar 日历组件](https://vant-contrib.gitee.io/vant-weapp/#/calendar)，具体使用方法看开发文档

```typescript
// 日期选择页面控制
    onDisplay(): void {
        this.setData({ show: true });
    },
    // 日期选择页面控制
    onClose(): void {
        this.setData({ show: false });
    },
    // 日期格式化
    formatDate(date: Date): string {
        date = new Date(date);
        return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    // 预约日期选择
    onConfirm(event: any): void {
        this.setData({
            show: false,
            timeOfAppointment: this.formatDate(event.detail),
        });
    },
```

维修单图片上传，使用的是[Uploader 文件上传组件](https://vant-contrib.gitee.io/vant-weapp/#/uploader)，具体使用方法看开发文档

```typescript
// 图片回显
    afterRead(event: any): void {
        const { file } = event.detail;
        let fileList: IfileList[] = []
        fileList.push(...this.data.fileList, {
            url: file.url,
            thumb: file.thumb,
            type: file.type
        })
        this.setData({
            fileList
        })
    },
    // 上传前校验大小限制，最大的上传图片为2m
    beforeRead(event: any): void {
        console.log("e", event);
        // 2M大小
        const SIZE: number = 2097152
        const { file, callback } = event.detail;
        let res: boolean = file.size < SIZE
        if (!res) {
            Toast.fail("图片大小超出限制")
        }
        callback(res);
    },
    // 删除图片
    delete(event: any): void {
        const { file } = event.detail;
        // 通过filter函数来删除图片
        const fileList = this.data.fileList.filter(item => item.url != file.url)
        this.setData({
            fileList
        })
    },
```

