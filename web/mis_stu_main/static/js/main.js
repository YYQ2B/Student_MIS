var tabPanel = new Ext.TabPanel({
	activeTab : 0,//默认激活第一个tab页
	animScroll : true,//使用动画滚动效果
	enableTabScroll : true,//tab标签超宽时自动出现滚动按钮
	items: [
		{
			title: '欢迎页面',
			height:600,
			closable : false,//允许关闭
			html:"<iframe scrolling='auto' frameborder='0' width='100%' height='78%' src='http://www.dlnu.edu.cn/new/index.htm'></iframe>"
		}
	],listeners:{
		"contextmenu":function(tabPanel,myitem,e){
			var menu = new Ext.menu.Menu([
				{text:"关闭当前选项页",handler:function(){
					if(myitem != tabPanel.getItem(0)) {
						tabPanel.remove(myitem)
					}
				}},
				{text:"关闭其他所有选项页",handler:function() {
						tabPanel.items.each(function(item){
							if(item != myitem && item != tabPanel.getItem(0)) {
								tabPanel.remove(item);
							}
						});
					}
				}
			]);
			menu.showAt(e.getPoint());
		}
	}	
});