var utils = require("../common/utils")
exports.display = () => {
    var w = floaty.rawWindow(  
        <vertical layout_gravity="center" w="{{Math.floor(device.width * 0.9)}}px" h="900px" bg="#FFFFFF">
            <horizontal w="*" padding="20px">
                <text text="软蛋脚本V1.0" gravity="left" layout_weight="1"textSize="16sp" textColor="red"/>
                <text id="exit" w="auto" text="退出" layout_gravity="right"/>
            </horizontal>
            <appbar>
                <tabs id="tabs" textSize="14sp" bg="#000000"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <relative id="content" gravity="center">
                        <list id="role_list" w="*" layout_alignParentTop="true" layout_centerHorizontal="true" layout_above="@+id/tips">
                            <horizontal w="*">
                                <checkbox id="selected" checked="false"/>
                                <input text="{{roleName}}" singleLine="true" layout_weight="1" textSize="12sp"/>
                                <spinner entries="{{roleType}}" layout_gravity="right" textSize="12sp"/>
                                <spinner entries="布万加|山脊|猫妖" layout_gravity="right" textSize="12sp"/>
                            </horizontal>
                        </list>
                        <text id="tips" text="需要手动添加角色，请勿输错名称及职业，注意事项参考公告说明！" padding="20px" textSize="12sp" textColor="red" layout_above="@+id/bottom"/>
                        <horizontal id="bottom" w="*" layout_alignParentBottom="true" layout_centerHorizontal="true">
                            <button id="add" w="*" layout_alignParentBottom="true" layout_centerHorizontal="true" text="添加角色"/>
                        </horizontal>
                    </relative>
                </frame>
                <frame>
                    <text text="第二页内容" textColor="red" textSize="16sp"/>
                </frame>
                <frame>
                    <text text="有问题请联系开发者进行处理!" textColor="red" textSize="16sp"/>
                </frame>
            </viewpager>
        </vertical>
    )
    w.setSize(-1, -1)

    //设置滑动页面的标题
    w.viewpager.setTitles(["搬砖仔列表", "系统设置", "系统公告"]);
    //让滑动页面和标签栏联动
    w.tabs.setupWithViewPager(w.viewpager);
    //让工具栏左上角可以打开侧拉菜单
    //w.toolbar.setupWithDrawer(ui.drawer);
    //w.setTouchable(false)
    // w.role_setting.setTextColor(colors.BLACK)
    let list = [
        {roleType:"大魔导师|暗狱战狂|狂暴者|大暗黑天",roleName:"2009年的秋天"},
        {roleType:"暗狱战狂|大魔导师|狂暴者|大暗黑天",roleName:"2009年玩红眼"},
        {roleType:"狂暴者|暗狱战狂|大魔导师|大暗黑天",roleName:"鸡哔伱呦"},
        {roleType:"大暗黑天|狂暴者|暗狱战狂|大魔导师",roleName:"星仔的修罗"}
    ]
    w.role_list.setDataSource(list)
    w.role_list.smoothScrollToPosition(3)
    // w.add.click(()=> {
    //     w.setTouchable(false)
    //     w.setSize(0, 0)
    // })
    w.exit.click(()=> {
        w.close()
    })
    ui.run(()=>{ w.requestFocus(); })
}