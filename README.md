 

#  修改位置 
  1.static/js/common/base.js
       3行-1826行新增
     zhoulei修改
  2.static/css/lib/sui/sm.css
  4150行 URL上加一个http:
  
  

# 正式包打包流程：
1､common.js中把测试地址注释掉，正式地址放开
2､config.xml中把版本号改一下，versionCode、versionBuild、versionName要同步改，按现有规则+1
3､config.xml中把webContentsDebuggingEnabled改成false
4､安卓直接用RentingSM打包，IOS打包时需要选择BundleID，选择com.yonyou.uap.mobile7
5､打包成功之后去服务器上用RentingSM账号登录下载安装包

# 发布流程

- 证书
- 签名（doc/renting.keystore）；别名：renting.keystore，密码：123456
- 打包账号（RentingSM/SM123456）



