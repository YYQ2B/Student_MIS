//树结构
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] }
        ]
    }
});

var tree = Ext.create('Ext.tree.Panel', {
    //title: 'Simple Tree',
    width: 200,
    height:150,
    store: store,
    rootVisible: false
});



//入口函数 开启Ext的自动加载功能 否则could not load main class
Ext.Loader.setConfig({
	enabled:true
});
Ext.Loader.setPath('Ext.ux', '../../extjs/examples/ux/');
//代表一个ExtJS4 应用.使用Viewport的单页应用
Ext.application({     
    name: 'Exam',
    // paths:['/exam/'],
    controllers:["View","Information",'Exam',"Topic","Paper","Monitor"],
    autoCreateViewport:true,
   	//requires:["Exam.lib.Singleton"],
    //requires:["Exam.view.Header","Exam.view.MainCenter","Exam.view.Navigation"],/*controller will help to load the views*/
    launch: function() {
 		    
    }
});
Ext.require([
    'Ext.grid.*',
    'Ext.window.Window',
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'Ext.state.*',
    'Ext.data.*'
]);
Ext.define('Person', {
    extend: 'Ext.data.Model',
    fields: ['id','first', 'last', 'review', {
        name: 'age',
        type: 'int'
    }]
});

Ext.onReady(function(){

    // setup the state provider, all state information will be saved to a cookie
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'border',
            padding: '5'
        },
         items: [{
             region: 'north',
             height: 150,
             bodyPadding: 5,
             split: true,
             html: [
             '<div id=content-banner class=content-ele-banner>',
             '<img src="static/img/logo.png" alt="logo......"">',
             '<div class="user-info">',
             '<span title="00000000000" id="eUserInfo-name">老师 <em id="eUserInfo-ID">[00000000000]</em>，您好</span>',
             '<a href="logout.do" class="logout">退出</a>',
             '</div>',
             '</div>'
             ].join(''),
            dockedItems: [{
                // xtype: 'toolbar',
                // items: [{
                //     text: 'Show window',
                //     handler: function(btn){
                //         Ext.create('Ext.window.Window', {
                //             width: 300,
                //             height: 300,
                //             x: 5,
                //             y: 5,
                //             // title: 'State Window',
                //             maximizable: true,
                //             stateId: 'stateWindowExample',
                //             stateful: true,
                //             bodyPadding: 5,
                //             html: [
                //             '<div id=content-banner class=content-ele-banner>',
                //             '<img src="static/img/logo.png" alt="logo......"">',
                //             '<div class="user-info">',
                //             '<span title="00000000000" id="eUserInfo-name">老师 <em id="eUserInfo-ID">[00000000000]</em>，您好</span>',
                //             '<a href="logout.do" class="logout">退出</a>',
                //             '</div>',
                //             '</div>'
                //             ].join(''),
                //             listeners: {
                //                 destroy: function(){
                //                     btn.enable();
                //                 }
                //             }
                //         }).show();
                //         btn.disable();
                //     }
                // }]
            }]
        }, {
            bodyPadding: 5,
            region: 'west',
            xtype: 'panel', 
            title: 'Collapse/Width Panel',
            width: 200,
            margins: '5 0 0 5', 
            stateId: 'statePanelExample',
            stateful: true,
            // split: true,
            collapsible: true,
             layout: 'fit',
            items: [tree]
        }, {
            region: 'center',
            stateful: true,
            stateId: 'stateGridExample',
            xtype: 'grid',
            store: Ext.create('Ext.data.Store', {
                model: 'Person',
                data: [{
                	id:'01',
                    first: 'John',
                    last: 'Smith',
                    age: 32,
                    review: 'Solid performance, needs to comment code more!'
                }, {
                	id:'02',
                    first: 'Jane',
                    last: 'Brown',
                    age: 56,
                    review: 'Excellent worker, has written over 100000 lines of code in 3 months. Deserves promotion.'
                }, {
                	id:'03',
                    first: 'Kevin',
                    last: 'Jones',
                    age: 25,
                    review: 'Insists on using one letter variable names for everything, lots of bugs introduced.'
                }, {
                	id:'04',
                    first: 'Will',
                    last: 'Zhang',
                    age: 41,
                    review: 'Average. Works at the pace of a snail but always produces reliable results.'
                }, {
                	id:'05',
                    first: 'Sarah',
                    last: 'Carter',
                    age: 23,
                    review: 'Only a junior, but showing a lot of promise. Coded a Javascript parser in Assembler, very neat.'
                }]
            }),
            columns: [{
                text: 'Last Name',
                dataIndex: 'last'
            }, {
                text: 'Age',
                dataIndex: 'age'
            }, {
                flex: 1,
                text: 'Review',
                dataIndex: 'review'
            }]
        }]
    });
});
