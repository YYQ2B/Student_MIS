function payOutManageFn(){
	if(!payOutManagePageIsOpen){
		var tabPage = tabPanel.add({
						title:"机电信息工程学院",
						height:600,
						closable:true,
						listeners:{
							beforedestroy:function(){
								payOutManagePageIsOpen = false;
							}
						}
					});
		tabPanel.setActiveTab(tabPage);
		payOutManagePageIsOpen = true;
	}
}