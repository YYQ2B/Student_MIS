function inComeAddFn(){
	if(!inComeAddPageIsOpen){
		var tabPage = tabPanel.add({
						title:"2010¼¶",
						height:600,
						closable:true,
						listeners:{
							beforedestroy:function(){
								inComeAddPageIsOpen = false;
							}
						}
					});
		tabPanel.setActiveTab(tabPage);
		inComeAddPageIsOpen = true;
	}
}