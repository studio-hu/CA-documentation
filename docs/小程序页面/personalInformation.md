---
title: personalInformation页面
---

这里使用了Vant Weapp的[Toast组件](https://vant-contrib.gitee.io/vant-weapp/#/toast)添加交互

```typescript
 Toast.loading({
            message: '保存中...',
            forbidClick: true,
            duration: 0
        });
```

更换用户头像

```typescript
 async uploadImg() {
        let res = await wx.chooseMedia({
            count: 1,
            mediaType: ['image', 'video'],
            sourceType: ['album', 'camera'],
            maxDuration: 30,
            camera: 'back'
        })
        Toast.loading({
            message: '保存中...',
            forbidClick: true,
            duration: 0
        });
        // 头像临时存储路径
        let fileUrl = res.tempFiles[0].tempFilePath
        console.log('fileUrl',fileUrl);
        // 调用uploadAvatar接口,上传图片到腾讯云对象存储桶
        let result = await uploadAvatar(fileUrl, 'Image')
        console.log('result', result);
        // 服务器返回的图片地址
        const imgUrl = JSON.parse(result.data).image
        let id = this.data.id
        let resAvatar = await updateUserInfo({
            id,
            headshot: imgUrl
        })
        if (resAvatar.data.code === 200) {
            Toast.success('头像保存成功')
            this.onLoad()
            const eventChannel = this.getOpenerEventChannel()
            eventChannel.emit('refresh')
        }
    },
```

调用微信提供的api` wx.chooseMedia`来选择所要上传的图片，点击确定后获取到图片临时的存储地址，再调用`uploadAvatar`将图片上传，上传成功后保存返回的图片url地址，存放到数据库中