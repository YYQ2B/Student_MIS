Ext.BLANK_IMAGE_URL = "Ext/resources/images/default/s.gif";
	//一级导航
	var root = new Ext.tree.TreeNode({
		id:"root",
		text:"根节点"
	});
	
	//用户管理
	var menuUserManager = new Ext.tree.TreeNode({
		id:"MenuUserManager",
		text:"学生信息管理",
		expanded:true
	});
	
	//用户添加
	var userAddMenu = new Ext.tree.TreeNode({
		id:"userAddMenu",
		text:"学生信息添加",
		listeners:{
			"click":userAddFn
		}
	});
	
	//用户管理
	var userManageMenu = new Ext.tree.TreeNode({
		id:"userManageMenu",
		text:"学生信息管理",
		listeners:{
			"click":userManageFn
		}
	});
	
	//用户查询
	var userQueryMenu = new Ext.tree.TreeNode({
		id:"userQueryMenu",
		text:"学生信息查询",
		listeners:{
			"click":userQueryFn
		}
	});
	menuUserManager.appendChild(userAddMenu);
	menuUserManager.appendChild(userManageMenu);
	menuUserManager.appendChild(userQueryMenu);
	
	//支出管理
	var menuPayOut = new Ext.tree.TreeNode({
		id:"menuPayOut",
		text:"所在学院",
		expanded:true
	});
	
	var payOutAddMenu = new Ext.tree.TreeNode({
		id:"payOutAddMenu",
		text:"经济管理学院",
		listeners:{
			"click":payOutAddFn
		}
	});
	var payOutAddMenu1 = new Ext.tree.TreeNode({
		id:"payOutAddMenu1",
		text:"经济管理专业",
		listeners:{
			"click":payOutAddFn
		}
	});
	payOutAddMenu.appendChild(payOutAddMenu1);
	
	var payOutManageMenu = new Ext.tree.TreeNode({
		id:"payOutManageMenu",
		text:"机电信息工程学院",
		listeners:{
			"click":payOutManageFn
		}
	});
	
	var payOutQueryMenu = new Ext.tree.TreeNode({
		id:"payOutQueryMenu",
		text:"生命科学学院",
		listeners:{
			"click":payOutQueryFn
		}
	});
		var xueyuan1 = new Ext.tree.TreeNode({
		id:"xueyuan1",
		text:"设计学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan2 = new Ext.tree.TreeNode({
		id:"xueyuan2",
		text:"计算机科学与工程学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan3 = new Ext.tree.TreeNode({
		id:"xueyuan3",
		text:"土木建筑工程学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan4 = new Ext.tree.TreeNode({
		id:"xueyuan4",
		text:"文法学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan5 = new Ext.tree.TreeNode({
		id:"xueyuan5",
		text:"理学院 预科部",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan6 = new Ext.tree.TreeNode({
		id:"xueyuan6",
		text:"国际商学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan7 = new Ext.tree.TreeNode({
		id:"xueyuan7",
		text:"信息与通信工程学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan8 = new Ext.tree.TreeNode({
		id:"xueyuan8",
		text:"环境与资源学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan9 = new Ext.tree.TreeNode({
		id:"xueyuan9",
		text:"物理与材料工程学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan10 = new Ext.tree.TreeNode({
		id:"xueyuan10",
		text:"国际文化交流学院",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan11 = new Ext.tree.TreeNode({
		id:"xueyuan11",
		text:"体育教学研究部",
		listeners:{
			"click":payOutManageFn
		}
	});
		var xueyuan12 = new Ext.tree.TreeNode({
		id:"xueyuan12",
		text:"东北少数民族研究院",
		listeners:{
			"click":payOutManageFn
		}
	});
	menuPayOut.appendChild(payOutAddMenu);
	menuPayOut.appendChild(payOutManageMenu);
	menuPayOut.appendChild(payOutQueryMenu);
	menuPayOut.appendChild(xueyuan1);
	menuPayOut.appendChild(xueyuan2);
	menuPayOut.appendChild(xueyuan3);
	menuPayOut.appendChild(xueyuan4);
	menuPayOut.appendChild(xueyuan5);
	menuPayOut.appendChild(xueyuan6);
	menuPayOut.appendChild(xueyuan7);
	menuPayOut.appendChild(xueyuan8);
	menuPayOut.appendChild(xueyuan9);
	menuPayOut.appendChild(xueyuan10);
	menuPayOut.appendChild(xueyuan11);
	menuPayOut.appendChild(xueyuan12);

	//收入管理
	var menuIncome = new Ext.tree.TreeNode({
		id:"menuIncome",
		text:"年级",
		expanded:true
	});
	
	var incomeAddMenu = new Ext.tree.TreeNode({
		id:"incomeAddMenu",
		text:"2010级",
		listeners:{
			"click":inComeAddFn
		}
	});
	
	var incomeManageMenu = new Ext.tree.TreeNode({
		id:"incomeManageMenu",
		text:"2011级",
		listeners:{
			"click":inComeManageFn
		}
	});
	
	var incomeQueryMenu = new Ext.tree.TreeNode({
		id:"incomeQueryMenu",
		text:"2012级",
		listeners:{
			"click":inComeQueryFn
		}
	});
	var incomeQueryMenu1 = new Ext.tree.TreeNode({
		id:"incomeQueryMenu1",
		text:"2013级",
		listeners:{
			"click":inComeQueryFn
		}
	});
	menuIncome.appendChild(incomeAddMenu);
	menuIncome.appendChild(incomeManageMenu);
	menuIncome.appendChild(incomeQueryMenu);
	menuIncome.appendChild(incomeQueryMenu1);
	var classxueyuan = new Ext.tree.TreeNode({
		id:"classxueyuan",
		text:"某年级所在学院",
		expanded:true
	});
	var xueyuan11 = new Ext.tree.TreeNode({
		id:"xueyuan11",
		text:"2010级",
		listeners:{
			"click":inComeQueryFn
		}
	})
    var xueyuan111 = new Ext.tree.TreeNode({
		id:"xueyuan111",
		text:"经济管理学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan112 = new Ext.tree.TreeNode({
		id:"xueyuan112",
		text:"机电信息工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan113 = new Ext.tree.TreeNode({
		id:"xueyuan113",
		text:"生命科学学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan114 = new Ext.tree.TreeNode({
		id:"xueyuan114",
		text:"设计学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan115 = new Ext.tree.TreeNode({
		id:"xueyuan115",
		text:"计算机科学与工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan116 = new Ext.tree.TreeNode({
		id:"xueyuan116",
		text:"土木建筑工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan117 = new Ext.tree.TreeNode({
		id:"xueyuan117",
		text:"文法学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan118 = new Ext.tree.TreeNode({
		id:"xueyuan118",
		text:"理学院 预科部",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan119 = new Ext.tree.TreeNode({
		id:"xueyuan119",
		text:"国际商学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1110 = new Ext.tree.TreeNode({
		id:"xueyuan1110",
		text:"信息与通信工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan1111 = new Ext.tree.TreeNode({
		id:"xueyuan1111",
		text:"环境与资源学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1112 = new Ext.tree.TreeNode({
		id:"xueyuan1112",
		text:"物理与材料工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1113 = new Ext.tree.TreeNode({
		id:"xueyuan1113",
		text:"国际文化交流学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan1114 = new Ext.tree.TreeNode({
		id:"xueyuan1114",
		text:"国际文化交流学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1115 = new Ext.tree.TreeNode({
		id:"xueyuan1115",
		text:"东北少数民族研究院",
		listeners:{
			"click":inComeQueryFn
		}
	})


 xueyuan11.appendChild(xueyuan111);
 xueyuan11.appendChild(xueyuan112);
 xueyuan11.appendChild(xueyuan113);
 xueyuan11.appendChild(xueyuan114);
 xueyuan11.appendChild(xueyuan115);
 xueyuan11.appendChild(xueyuan116);
 xueyuan11.appendChild(xueyuan117);
 xueyuan11.appendChild(xueyuan118);
 xueyuan11.appendChild(xueyuan119);
 xueyuan11.appendChild(xueyuan1110);
 xueyuan11.appendChild(xueyuan1111);
 xueyuan11.appendChild(xueyuan1112);
 xueyuan11.appendChild(xueyuan1113);
 xueyuan11.appendChild(xueyuan1114);
 xueyuan11.appendChild(xueyuan1115);


	var xueyuan12 = new Ext.tree.TreeNode({
		id:"xueyuan12",
		text:"2011级",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan121 = new Ext.tree.TreeNode({
		id:"xueyuan121",
		text:"经济管理学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan122 = new Ext.tree.TreeNode({
		id:"xueyuan122",
		text:"机电信息工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan123 = new Ext.tree.TreeNode({
		id:"xueyuan123",
		text:"生命科学学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan124 = new Ext.tree.TreeNode({
		id:"xueyuan124",
		text:"设计学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan125 = new Ext.tree.TreeNode({
		id:"xueyuan125",
		text:"计算机科学与工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan126 = new Ext.tree.TreeNode({
		id:"xueyuan126",
		text:"土木建筑工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan127 = new Ext.tree.TreeNode({
		id:"xueyuan127",
		text:"文法学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan128 = new Ext.tree.TreeNode({
		id:"xueyuan128",
		text:"理学院 预科部",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan129 = new Ext.tree.TreeNode({
		id:"xueyuan129",
		text:"国际商学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1210 = new Ext.tree.TreeNode({
		id:"xueyuan1210",
		text:"信息与通信工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan1211 = new Ext.tree.TreeNode({
		id:"xueyuan1211",
		text:"环境与资源学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1212 = new Ext.tree.TreeNode({
		id:"xueyuan1212",
		text:"物理与材料工程学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1213 = new Ext.tree.TreeNode({
		id:"xueyuan1213",
		text:"国际文化交流学院",
		listeners:{
			"click":inComeQueryFn
		}
	})
	     var xueyuan1214 = new Ext.tree.TreeNode({
		id:"xueyuan1214",
		text:"体育教学研究部 体育馆",
		listeners:{
			"click":inComeQueryFn
		}
	})
	    var xueyuan1215 = new Ext.tree.TreeNode({
		id:"xueyuan1215",
		text:"东北少数民族研究院",
		listeners:{
			"click":inComeQueryFn
		}
	})


 xueyuan12.appendChild(xueyuan121);
 xueyuan12.appendChild(xueyuan122);
 xueyuan12.appendChild(xueyuan123);
 xueyuan12.appendChild(xueyuan124);
 xueyuan12.appendChild(xueyuan125);
 xueyuan12.appendChild(xueyuan126);
 xueyuan12.appendChild(xueyuan127);
 xueyuan12.appendChild(xueyuan128);
 xueyuan12.appendChild(xueyuan129);
 xueyuan12.appendChild(xueyuan1210);
 xueyuan12.appendChild(xueyuan1211);
 xueyuan12.appendChild(xueyuan1212);
 xueyuan12.appendChild(xueyuan1213);
 xueyuan12.appendChild(xueyuan1214);
 xueyuan12.appendChild(xueyuan1215);




 //
    var xueyuan121 = new Ext.tree.TreeNode({
		id:"xueyuan121",
		text:"2010级",
		listeners:{
			"click":inComeQueryFn
		}
	})
 xueyuan12.appendChild(xueyuan121);


	var xueyuan13 = new Ext.tree.TreeNode({
		id:"xueyuan13",
		text:"2012级",
		listeners:{
			"click":inComeQueryFn
		}
	})
	var xueyuan131 = new Ext.tree.TreeNode({
		id:"xueyuan131",
		text:"2010级",
		listeners:{
			"click":inComeQueryFn
		}
	})


 xueyuan13.appendChild(xueyuan131);


	var xueyuan14 = new Ext.tree.TreeNode({
		id:"xueyuan14",
		text:"2013级",
		listeners:{
			"click":inComeQueryFn
		}
	})
	var xueyuan141 = new Ext.tree.TreeNode({
		id:"xueyuan141",
		text:"2010级",
		listeners:{
			"click":inComeQueryFn
		}
	})
 xueyuan14.appendChild(xueyuan141);


	classxueyuan.appendChild(xueyuan11);
	classxueyuan.appendChild(xueyuan12);
	classxueyuan.appendChild(xueyuan13);
	classxueyuan.appendChild(xueyuan14);

	var gongyu = new Ext.tree.TreeNode({
		id:"gongyu",
		text:"公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	var gongyu1 = new Ext.tree.TreeNode({
		id:"gongyu1",
		text:"1号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu1);
    var gongyu2 = new Ext.tree.TreeNode({
		id:"gongyu2",
		text:"2号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu2);
	var gongyu3 = new Ext.tree.TreeNode({
		id:"gongyu3",
		text:"3号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu3);
	var gongyu4 = new Ext.tree.TreeNode({
		id:"gongyu4",
		text:"4号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu4);
	var gongyu5 = new Ext.tree.TreeNode({
		id:"gongyu5",
		text:"5号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu5);
	var gongyu6 = new Ext.tree.TreeNode({
		id:"gongyu6",
		text:"6号公寓",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	gongyu.appendChild(gongyu6);


	var zhengzhimianmao = new Ext.tree.TreeNode({
		id:"zhengzhimianmao",
		text:"政治面貌",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	var zhengzhimianmao1 = new Ext.tree.TreeNode({
		id:"zhengzhimianmao1",
		text:"预备党员",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	zhengzhimianmao.appendChild(zhengzhimianmao1);
		var zhengzhimianmao2 = new Ext.tree.TreeNode({
		id:"zhengzhimianmao2",
		text:"中共党员",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	zhengzhimianmao.appendChild(zhengzhimianmao2);
		var zhengzhimianmao3 = new Ext.tree.TreeNode({
		id:"zhengzhimianmao3",
		text:"积极分子",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	zhengzhimianmao.appendChild(zhengzhimianmao3);
	var zhengzhimianmao4 = new Ext.tree.TreeNode({
		id:"zhengzhimianmao4",
		text:"共青团员",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	zhengzhimianmao.appendChild(zhengzhimianmao4);

	var kunnan = new Ext.tree.TreeNode({
		id:"kunnan",
		text:"困难",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	var kunnan1 = new Ext.tree.TreeNode({
		id:"kunnan1",
		text:"国家贷款",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	kunnan.appendChild(kunnan1);
	var kunnan2 = new Ext.tree.TreeNode({
		id:"kunnan2",
		text:"生源地贷款",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
	kunnan.appendChild(kunnan2);

	var baoxian = new Ext.tree.TreeNode({
		id:"baoxian",
		text:"保险",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});

	var baoxian1 = new Ext.tree.TreeNode({
		id:"baoxian1",
		text:"商保",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
		baoxian.appendChild(baoxian1);
	var baoxian2 = new Ext.tree.TreeNode({
		id:"baoxian2",
		text:"医保",
		expanded:true,
		listeners:{
			"click":userManageFn
		}
	});
		baoxian.appendChild(baoxian2);






	root.appendChild(menuUserManager);
	root.appendChild(menuPayOut);
	root.appendChild(menuIncome);
	root.appendChild(classxueyuan);
	root.appendChild(gongyu);
	root.appendChild(zhengzhimianmao);
	root.appendChild(kunnan);
	root.appendChild(baoxian);

	
	var menu = new Ext.tree.TreePanel({
		border:false,
		rootVisible:false,
		root:root
	});


	
	
	//添加布尔类型的变量，用来判断该页面是否打开
	var userAddPageIsOpen = false;
	var userManagePageIsOpen = false;
	var userQueryPageIsOpen = false;
	var payOutAddPageIsOpen = false;
	var payOutManagePageIsOpen = false;
	var payOutQueryPageIsOpen = false;
	var inComeAddPageIsOpen = false;
	var inComeManagePageIsOpen = false;
	var inComeQueryPageIsOpen = false;