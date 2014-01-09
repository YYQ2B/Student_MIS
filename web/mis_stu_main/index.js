Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "Ext/resources/images/default/s.gif";
	Ext.QuickTips.init();
	Ext.form.Field.prototype.msgTarget="qtip";
	
	Ext.apply(Ext.form.VTypes,{
		//field表示该宿主组件，val是该宿主的值
		repetition:function(val,field) {
			//是否配置了相比较的目标组件
			if(field.repetition){
				//获得该目标组件
				var cmp = Ext.getCmp(field.repetition.targetCmpId);
				if(Ext.isEmpty(cmp)){
					Ext.MessageBox.show({
						title: '错误',
                     	msg: '发生异常错误，指定的组件未找到',
                      	icon: Ext.Msg.ERROR,
                      	buttons: Ext.Msg.OK
					});
				}
				//比较宿主和目标对象的值
				if(val == cmp.getValue()) {
					return true;
				} else {
					return false;
				}
			}
		},
		repetitionText:"两个组件的值不相同"
	});
	
	var viewPort = new Ext.Viewport({
		title:"学生管理系统(学生处)",
		layout:"border",
		items:[
			{
				title:" ",
				region:"north",
				height:100,
				// collapsible:true,
				html:[
				//'<img src="static/img/logo2.png" alt="logo......"" style=" float: right; margin-right: 590px;">',
				'<img src="static/img/logo.png" alt="logo......"" style=" float: left; ">',
				'<br><center><font size = 5>学生管理系统（学生处.金石滩校区）</font></center>',
				//'<center><img src="static/img/logo2.png" alt="logo......""><center>',
             	'<div style=" float: right; margin-right: 112px; "><span title="00000000000" id="eUserInfo-name">xx老师 <em id="eUserInfo-ID"></em>您好,</span>',
             	'<a href="logout.do" class="logout">退出</a></div>',
				]
			},
			{
				bodyPadding: 5,
				title:"查询选项",
				xtype: 'panel', 
				region:"west",
				width:200,
				items:menu,
				collapsible:true,
				stateful: true,
				split:true,
			    collapsible: true,
			    //layout: 'fit',  //如果加上滚动条不能根据内容增加而自动增长
			    autoScroll: true,
			    // bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
			    collapseMode: 'mini'
			},

			{
				title:"查询结果",
				region:"center",
				items:tabPanel,
				collapsible:true
			}
		]
	});
});
