function payOutQueryFn(){
	if(!payOutQueryPageIsOpen) {
		var tabPage = tabPanel.add({
						title:"生命科学学院",
						height:600,
						closable:true,
						listeners:{
							beforedestroy:function(){
								payOutQueryPageIsOpen = false;
							}
						}
					});
		tabPanel.setActiveTab(tabPage);
		payOutQueryPageIsOpen = true;
	}
}