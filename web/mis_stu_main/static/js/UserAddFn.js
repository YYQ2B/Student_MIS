function userAddFn(){
	
	
	var userAddForm = new Ext.FormPanel({
		bodyStyle:"padding-left:230px",
		width:800,
		frame:true,
		labelAlign:"right",
		monitorValid:true,
		autoScroll:true,
		items:[
			new Ext.form.TextField({
				id:"stuid",
				name:"stuid",
				fieldLabel:"学号",
				allowBlank:false,
				blankText:"学号不能为空",
				emptyText:"2011010101"
				
			}),
			new Ext.form.TextField({
				id:"name",
				name:"name",
				fieldLabel:"姓名",
				allowBlank:false,
				blankText:"姓名不能为空"

			}),
				new Ext.form.TextField({
				id:"sex",
				name:"sex",
				fieldLabel:"性别",
				allowBlank:false,
				blankText:"性别不能为空",
				emptyText:"男/女"
			}),
				new Ext.form.TextField({
				id:"nationid",
				name:"nationid",
				fieldLabel:"民族",
				allowBlank:false,
				blankText:"民族不能为空"

			}),
				new Ext.form.TextField({
				id:"xeon_institute",
				name:"xeon_institute",
				fieldLabel:"所在学院",
				allowBlank:false,
				blankText:"学院不能为空",
				emptyText:"计算机科学与工程学院"
			}),

				new Ext.form.TextField({
				id:"grade",
				name:"grade",
				fieldLabel:"年级",
				allowBlank:false,
				blankText:"年级不能为空",
				emptyText:"2010级"
			}),
				new Ext.form.TextField({
				id:"sex",
				name:"sex",
				fieldLabel:"性别",
				allowBlank:false,
				blankText:"性别不能为空"
			}),
                new Ext.form.TextField({
				id:"xeon_major",
				name:"xeon_major",
				fieldLabel:"专业",
				allowBlank:false,
				blankText:"专业不能为空",
				emptyText:"计算机科学与技术"
			}),
				new Ext.form.TextField({
				id:"classid",
				name:"classid",
				fieldLabel:"班级",
				allowBlank:false,
				blankText:"班级不能为空",
				emptyText:"112"
			}),
				new Ext.form.TextField({
				id:"identify",
				name:"identify",
				fieldLabel:"身份证号",
				allowBlank:false,
				blankText:"身份证号不能为空"
			}),
				new Ext.form.TextField({
				id:"birth",
				name:"birth",
				fieldLabel:"出生日期",
				allowBlank:false,
				blankText:"出生日期不能为空",
				emptyText:"20110101"
			}),
				new Ext.form.TextField({
				id:"govface",
				name:"govface",
				fieldLabel:"是否党员",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"tel",
				name:"tel",
				fieldLabel:"手机号",
				allowBlank:false,
				blankText:"手机号不能为空"
			}),
				new Ext.form.TextField({
				id:"xeon_location_province",
				name:"xeon_location_province",
				fieldLabel:"省",
				allowBlank:false,
				blankText:"省不能为空"
			}),
				new Ext.form.TextField({
				id:"xeon_location_city",
				name:"xeon_location_city",
				fieldLabel:"市",
				allowBlank:false,
				blankText:"市不能为空"
			}),
				new Ext.form.TextField({
				id:"xeon_location_county",
				name:"xeon_location_county",
				fieldLabel:"县/区",
				allowBlank:false,
				blankText:"县/区不能为空"
			}),
				new Ext.form.TextField({
				id:"family",
				name:"family",
				fieldLabel:"家庭电话",
				allowBlank:false,
				blankText:"家庭电话不能为空",
				emptyText:"03584560000"
			}),
				new Ext.form.TextField({
				id:"registerstatus",
				name:"registerstatus",
				fieldLabel:"在校状态",
				allowBlank:false,
				blankText:"该项不能为空"
			}),
				new Ext.form.TextField({
				id:"ifpoor",
				name:"ifpoor",
				fieldLabel:"是否贫困入库",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"ifcountryloan",
				name:"ifcountryloan",
				fieldLabel:"是否享有国家助学金",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"iforigin",
				name:"iforigin",
				fieldLabel:"是否享有生源地贷款（是/否）",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"ifcommerial_insurance",
				name:"ifcommerial_insurance",
				fieldLabel:"是否商保（是/否）",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"ifmedical_insurance",
				name:"ifmedical_insurance",
				fieldLabel:"是否医保（是/否）",
				allowBlank:false,
				blankText:"该项不能为空",
				emptyText:"是/否"
			}),
				new Ext.form.TextField({
				id:"xeon_dormbuilding",
				name:"xeon_dormbuilding",
				fieldLabel:"公寓号",
				allowBlank:false,
				blankText:"寝室楼号不能为空",
				emptyText:"01"
			}),
				new Ext.form.TextField({
				id:"xeon_dorm",
				name:"xeon_dorm",
				fieldLabel:"寝室号",
				allowBlank:false,
				blankText:"寝室号不能为空",
				emptyText:"306"
			})

		],
		buttons:[
			{text:"添加",formBind:true,handler:function(){
				userAddForm.getForm().submit({
					url:"userAdd.action",
					waitMsg:"请稍等,正在添加!",
					success:function(form, action){
	                        Ext.MessageBox.alert("成功",action.result.msg); 
	                    },
					failure:function(form, action){
	                        Ext.MessageBox.alert("失败",action.result.msg);      
	                   }
				})
			}},
			{text:"重置",handler:function(){
				userAddForm.getForm().reset();
			}}
		]
	});
	
	if(!userAddPageIsOpen){
		var tabPage = tabPanel.add({
						title:"学生信息添加",
						height:508,
						layout:"fit",
						closable:true,
						items:[
							userAddForm	
						],
						listeners:{
							beforedestroy:function(){
								userAddPageIsOpen = false;
							}
						}
			});
		tabPanel.setActiveTab(tabPage);
		//设置该页面已经打开
		userAddPageIsOpen = true;
	}
}