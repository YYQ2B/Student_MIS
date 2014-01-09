function userQueryFn(){
	//记录类型
	var user = Ext.data.Record.create([
		{name:"id",mapping:"id"},
		{name:"username",mapping:"username"},
		{name:"password",mapping:"password"}
	]);
	
	//存储器
	var store = new Ext.data.Store({
		url:"queryUser.action",
		reader:new Ext.data.JsonReader({
			root:"allUser",
			id:"id",
			totalProperty:"recordSize"
		},user)
	});
	
	//查询表单
	var queryForm = new Ext.FormPanel({
		labelAlign:"right",
		baseCls: 'x-plain',
		layout:"column",
		items:[
			new Ext.form.Label({
				text:"查询条件:"
			}),
			new Ext.form.ComboBox({
				store:new Ext.data.SimpleStore({
							fields:["queryL","queryV"],
							data:[
								["学号","stuid"],
								["性别","sex"],
								["民族","nationid"],
								["专业","xeon_major"],
								["班级","classid"],
								["出生日期","birth"],
								["政治面貌","govface"],
								["省","xeon_location_province"],
								["市","xeon_location_city"],
								["县/区","xeon_location_county"],
								["学籍状态","registerstatus"],
								["国家贷款","ifcountryloan"],
								["生源地贷款","iforigin"],
								["商保","ifcommerial_insurance"],
								["医保","ifmedical_insurance"],
								["公寓号","xeon_dormbuilding"],
								["寝室号","xeon_dorm"]

							]
				}),
				triggerAction:"all",
				selectOnFocus:true,
				typeAhead : true,
				displayField:"queryL",
				hiddenName:"queryCondition",
				valueField:"queryV",
				mode:"local",
				readOnly: true
			}),
			new Ext.form.Label({
				text:"查询值"
			}),
			new Ext.form.TextField({
				id:"queryValue",
				name:"queryValue"
			})
		]
	})
	
	var gridPanel = new Ext.grid.EditorGridPanel({
		width:300,
		height:200,
		frame:true,
		store:store,
		columns:[
			{header:"学号",dataIndex:"stuid",sortable:true},
			{header:"姓名",dataIndex:"name",sortable:true,
				 editor:new Ext.form.TextField({
				 	minLength:3,
				 	minLengthText:"用户名长度不能小于3个字符",
				 	maxLength:12,
					maxLengthText:"用户名长度不能大于12个字符",
				 	allowBlank:false,
				 	blankText:"用户名不能为空"
				 })
			},
			{header:"性别",dataIndex:"sex",sortable:true,
				 	editor:new Ext.form.TextField({
				 	minLength:3,
				 	minLengthText:"密码长度不能小于3个字符",
				 	maxLength:12,
				 	maxLengthText:"密码长度不能大于12个字符",
				 	allowBlank:false,
				 	blankText:"密码不能为空"
				 })
			},
			{header:"民族",dataIndex:"nationid",sortable:true},
			{header:"所在学院",dataIndex:"xeon_institute",sortable:true},
			{header:"年级",dataIndex:"grade",sortable:true},
			{header:"专业",dataIndex:"xeon_major",sortable:true},
			{header:"班级",dataIndex:"classid",sortable:true},
			{header:"身份证号",dataIndex:"identify",sortable:true},
			{header:"出生日期",dataIndex:"birth",sortable:true},
			{header:"政治面貌",dataIndex:"govface",sortable:true},
			{header:"手机号码",dataIndex:"tel",sortable:true},
			{header:"省/市/县（区）",dataIndex:"xeon_location_county",sortable:true},
			{header:"家庭电话",dataIndex:"family",sortable:true},
			{header:"学籍状态",dataIndex:"registerstatus",sortable:true},
			{header:"是否困难",dataIndex:"ifpoor",sortable:true},
			{header:"国家贷款",dataIndex:"ifcountryloan",sortable:true},
			{header:"生源地贷款",dataIndex:"iforigin",sortable:true},
			{header:"商保",dataIndex:"ifcommerial_insurance",sortable:true},
			{header:"医保",dataIndex:"ifmedical_insurance",sortable:true},
			{header:"公寓号",dataIndex:"xeon_dormbuilding",sortable:true},
			{header:"寝室号",dataIndex:"xeon_dorm",sortable:true}

		],
		autoExpandColumn:1,
		//分页控制条
		bbar:new Ext.PagingToolbar({
			pageSize:15,//每页显示多少条记录
			store:store,//数据源
			displayInfo:true,
			displayMsg:"当前显示第{0}条到{1}条记录，一共有{2}条记录",
			emptyMsg:"没有任何记录",
			firstText:"首页",
			prevText:"上一页",
			nextText:"下一页",
			lastText:"尾页",
			refreshText:"刷新"
		}),
		selModel:new Ext.grid.RowSelectionModel({singleSelect:false}),
		tbar:[
			queryForm,
			{text:"查询",handler:function(){
				store.load({
					params:
						{
							start:0, limit:10,
							queryCondition:Ext.get("queryCondition").dom.value,
							queryValue:Ext.get("queryValue").dom.value
						}});
			}}
		]
	});
	
	store.load({params:{start:0, limit:10}});
	
	//给EditorGridPanel添加afteredit事件处理代码
	gridPanel.on("afteredit",function(obj){
		//必须知道的信息
		//1.用户信息的id，方便服务器来查询该id对应的用户记录
		var id = obj.record.get("id");
		
		//2.修改的哪个字段
		var field = obj.field;
		
		//3.修改后的值是多少
		var value = obj.value;
		
		//发送异步请求
		Ext.Ajax.request({
			//1.请求的地址
			url:"updateUser.action",
			//2.请求的方式
			method:"post",
			//3.请求参数
			params:{
				id:id,
				field:field,
				value:value
			},
			callback:function(options,success,response) {
				var jsonStr = Ext.util.JSON.decode(response.responseText);
				if(jsonStr.success) {
					obj.record.commit();
				}else {
					Ext.MessageBox.alert("失败",jsonStr.msg);
					obj.record.reject();
				}
			}
			
			
		});
	});
	if(!userQueryPageIsOpen){
		var tabPage = tabPanel.add({
						title:"学生信息查询",
						height:505,
						closable:true,
						layout:"fit",
						items:[
							gridPanel
						],
						listeners:{
							beforedestroy:function(){
								userQueryPageIsOpen = false;
							}
						}
					});
		tabPanel.setActiveTab(tabPage);
		userQueryPageIsOpen= true;
	}
}