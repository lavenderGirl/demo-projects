new Vue({
    el: '#app',
    data: {
        tableData:[],
        userlist:[{
            name:'车键',
            jobNum:'K201904080001',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'车凌云',
            jobNum:'K201607010016',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'车凌云',
            jobNum:'K201607010016',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'车凌云',
            jobNum:'K201607010016',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'车凌云',
            jobNum:'K201607010016',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'车凌云',
            jobNum:'K201607010016',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        },{
            name:'陈易冰',
            jobNum:'K201605090003',
            time:'11:36:40',
            status:'对比成功',
            avatar:'https://i.loli.net/2019/08/30/LBknjCAoYuJptwX.jpg'
        }]
    },
    mounted: function () {
        this.userlist.forEach((item,index) => {
            if(index < 11){
                this.tableData.push(item);
            }
        });

        var canvas = document.getElementById('video-canvas');
		var url = 'ws://127.0.0.1:8082/';
		var player = new JSMpeg.Player(url, {canvas: canvas});
    },
    methods: {
       
    }
});
