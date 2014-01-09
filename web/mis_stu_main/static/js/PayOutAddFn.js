function payOutAddFn(){
	if(!payOutAddPageIsOpen){
		var tabPage = tabPanel.add({
						title:"经济管理学院",
						height:600,
						closable:true,
						listeners:{
							beforedestroy:function(){
								payOutAddPageIsOpen = false;
							}
						}
					});
		tabPanel.setActiveTab(tabPage);
		payOutAddPageIsOpen = true;
	}
}