//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../libs/bmap-wx.min.js')
var wxMarkerData = []
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js')
var qqmapsdk = new QQMapWX({
  key: '6FVBZ-2N7KQ-6IB5N-GJDNL-UQZPS-RHB3E'
})

Page({
  data: {
    namelist: {
      ptm: ["王生安", "李鑫灏", "薛佛世", "蔡壮保", "钱勤堃", "潘恩依", "陈国柏", "魏皑虎", "周卓浩", "汤辟邦", "张顺谷", "郑迎凌", "王涌竹", "陶益怡", "魏腾玉", "辛务琪", "吴欢茜", "张俱嫦", "岑昭菁", "周业楚", "陆荆虹", "龚哲虹", "曾以惠", "廉琬峥", "施房好", "洪伟若", "丘玥雪", "谭屏英", "梁爽屏", "吴赐晓", "梁仓腾", "", "张悌斯", "张灶冲", "易江维", "张昧谡", "苏经苞", "彭笙葛", "龚佩义", "何翼宪", "路壁桥", "彭煌彤", "严君岚", "吴来衷", "侯真堂", "孙来笙", "饶展林", "岳列洋", "时党舒", "周迟蒲", "廉梦容", "张淮森", "夏劲釜", "王好隐", "俞灶迟", "元感棋", "陆示笙", "简胜琰", "云介融", "梁夜翊", "成昀澄", "卞然倌", "林静育", "王成文", "刘昼星", "池荣弈", "邹包幼", "王施峪", "武慎萌", "范千皋", "潘佩焱", "周逸依", "齐寒昇", "邱栾树", "卢钦钧", "文壮翔", "蔡沐壮", "唐盎正", "王腾振", "蔡容富", "宁雨御", "朱付流", "陆丛枫", "汤丞昱", "萧百徽", "田稻善", "莫立恩", "戚渊苏", "郭磊留", "邱靖祈", "刘鲜发", "李彩早", "卓互知", "岳繁粟", "何刚名", "莫两敬", "柯纤翊", "梁澄静", "岑贝澄", "陶臣杜", "卫惇琰", "王赫颢", "殷蒙共", "齐聪纪", "丘存心"],
      lrj: ["悉数沉淀", "暖寄归人", "瞎闹腾i", "♚独美i", "厌世症i", "人心可畏", "你真逗比", "前凸后翘", "可喜可乐", "以心换心", "☞或许☜", "渣中王♔", "一干为尽", "你的愚忠", "就是任性", "缺氧患人！", "住进时光里", "难免心酸°", "只为你生！", "前后都是你", "☀陌离女王", "缺我也没差", "十年温如初", "闹够了就滚", "单身女王i", "给我五厘米的高度", "喜欢你是我有病i", "往事讽刺笑到肚疼", "妞╮笑个", "一半╮眼线", "这样就好╮", "豆芽菜╮", "過客。", "無盡透明的思念", "solo　-", "忘了他╮", "粉红。顽皮豹", "今非昔比’", "孤单*无名指", "莫名的青春", "灬一抹丶苍白", "笑叹★尘世美", "爱你心口难开", "那傷。眞美", "命運不堪浮華", "々爱被冰凝固ゝ", "一生承诺", "只求一份安定", "哭花了素颜、", "浮殇年華", "", "ー 半 憂 傷", "余温散尽 ぺ", "执念，爱", "漫长の人生", "路的男人", "夨落旳尐孩。", "蝶恋花╮", "。婞褔ｖīｐ", "丶演绎悲伤怀念·最初", "回忆未来", "请在乎我１秒", "昂贵的、背影", "日久见人心", "*丶 海阔天空", "虚伪了的真心", "最迷人的危险", "有妳，很幸福", "相知相惜", "◆乱世梦红颜", "残花为谁悲丶", "淡淡の、清香", "", "吥↘恠侑噯↘", "?、花容月貌", "﹎℡默默的爱", "穿越古代", "习惯", "就再多一秒的爱", "石头剪子布", "﹂生﹂世﹂双人ら", "言己", "石头队长再见了", "爱你太久i", "很有粪量的人", "爱我所爱@", "疯格@", "黒色ン誘惑灬", "累@", "@重返20岁", "步非+烟花", "- Vie", "爱情有保质期", "徒留一场笑谈一场心伤", "最爱还是你i", "掌心温差", "玫瑰香旳誘惑", "看我不爽就滚i", "柠栀@", "Queenie. 女帝", "颓废囧妳", "乱的很有节奏ゆ", "◆帅气范儿つ"],
      wmx: ["陈伟霆", "鹿晗", "黄子韬", "张艺兴", "乔振宇", "蔡徐坤", "周杰伦", "霍建华", "胡歌", "王俊凯", "易烊千玺", "周星驰", "华晨宇", "杨子", "张国荣", "杨洋", "李易峰", "陈赫", "郑恺", "成龙", "王源", "邓超", "张翰", "张杰", "李晨", "林志颖", "高大伟", "钟汉良", "范丞丞", "黄晓明", "文章", "刘恺威", "林正英", "吴奇隆", "何炅", "吴磊", "乔任梁", "林峰", "吴京", "马天宇", "陈晓", "谢霆锋", "韩庚", "高云翔", "郭敬明", "陈思诚", "许嵩", "周润发", "黄家驹", "霍尊", "黄渤", "罗志祥", "古天乐", "张一山", "吴秀波", "向华强", "王宝强", "冯建宇", "冯绍峰", "黄宗泽", "王祖蓝", "张嘉译", "刘昊然", "武艺", "杜淳", "陈翔", "姚明", "靳东", "张学友", "柯震东", "雷佳音", "贾乃亮", "释小龙", "汪峰", "陈奕迅", "张若昀", "白敬亭", "刘烨", "赵本山", "林更新", "孙红雷", "张卫健", "炎亚纶", "李咏", "邱泽", "薛之谦", "郭德纲", "甄子丹", "梁朝伟", "王凯", "孙艺洲", "罗晋", "郭子睿", "董子健", "王梓蘅", "刘奕君", "井柏然", "黄磊", "撒贝宁", "周渝民", "徐峥", "小沈阳", "张家辉"],
      mmx: ["刘诗诗", "周笔畅", "杨幂", "宋茜", "Angelababy", "赵丽颖", "迪丽热巴", "郑爽", "韩雪", "唐嫣", "戚薇", "韩雨芹", "范冰冰", "欧阳娜娜", "佟丽娅", "邓紫棋", "柳岩", "关晓彤", "张韶涵", "杨子姗", "黄圣依", "张钧甯", "张馨予", "高圆圆", "白百何", "宋祖儿", "杨紫", "林心如", "蓝燕", "何超琼", "刘涛", "古力娜扎", "李小璐", "陈乔恩", "张檬", "孙俪", "景甜", "张俪", "姚笛", "赵奕欢", "谢娜", "董璇", "周冬雨", "江疏影", "霍思燕", "何超仪", "娄艺潇", "胡然", "张子萱", "白冰", "昆凌", "王菲", "张歆艺", "邓莎", "李沁", "安以轩", "徐黄丽", "谭维维", "贾静雯", "王丽坤", "张雪迎", "胡冰卿", "谭晶", "陈妍希", "章子怡", "林志玲", "林依晨", "郭采洁", "倪妮", "马伊琍", "蒋欣", "张子枫", "万茜", "赵薇", "袁姗姗", "赵梦玥", "薛佳凝", "李金铭", "本兮", "董洁", "舒畅", "王祖贤", "孙怡", "马苏", "张柏芝", "朱茵", "鞠婧祎", "徐熙媛", "王珞丹", "陈都灵", "张雨绮", "蔡依林", "李丽珍", "汤唯", "梅艳芳", "林妙可", "李宇春", "邱淑贞", "黎姿", "陈意涵", "李小冉", "陈若仪"],
      smx: ["许家印", "马化腾", "马云", "王健林", "王卫", "杨惠妍", "何享健", "李彦宏", "丁磊", "李书福", "王文银", "张志东", "周群飞", "孙宏斌", "龚虹嘉", "郭广昌", "许世辉", "", "刘强东", "潘政民", "宗庆后", "姚振华", "许荣茂", "孙飘扬", "吴亚军", "雷军", "阎志章", "金梅家", "王文学", "魏建军", "庞康", "林秀成", "喻会蛟", "江南春", "马建荣", "陈丽华", "聂腾云", "张近东", "王传福", "于泳", "卢志强", "姚良松", "徐传化", "张邦鑫", "傅利泉", "刘永好", "张士平", "姜滨", "朱孟依", "纪海鹏", "车建新", "蒋卫平", "李丐腾", "梁稳根", "季昌群", "周建平", "蔡奎", "王玉锁", "王兴", "叶澄海", "张一鸣", "柯尊洪", "方威", "蒋仁生", "曹龙祥", "梁信军", "刘忠田", "赵涛", "高天国", "张欣", "黄如论", "王清涛", "李革", "易峥", "苏卫忠", "钭正刚", "李洪信", "李新炎", "王剑峰", "汪群斌", "张轩松", "刘汉元", "李华", "陈东升", "孙广信", "张劲", "吕向阳", "张帆", "徐镜", "何巧女", "马秀慧", "李水荣", "史玉柱", "邱光和", "汪建", "张力赖", "梅松", "季琦", "汪滔", "秦英林"],
      bmx: ["迈克尔·乔丹", "凯里·欧文", "科比·布莱恩特", "勒布朗·詹姆斯", "斯蒂芬·库里", "特雷西·麦克格雷迪", "詹姆斯·哈登", "凯文·杜兰特", "阿隆·戈登", "布林·福布斯", "丹尼·格林", "特里斯坦·汤普森", "肖恩·利文斯顿", "鲁迪·戈贝尔", "罗恩·贝克", "特雷韦恩·格雷厄姆", "拉沙德·沃恩", "帕蒂·米尔斯", "奎因·库克", "泰勒·莱登", "罗伊斯·奥尼尔", "德里克·怀特", "布兰登·保罗", "鲍比·布朗", "保罗·乔治", "卡梅隆·安东尼", "德里克·罗斯", "克里斯·保罗", "德怀恩·韦德", "沙奎尔·奥尼尔", "姚明", "林书豪", "易建联", "文斯·卡特", "王治郅", "RJ·亨特", "拉德·乍哥拉克", "特雷·伯克", "王哲林", "文斯·亨特", "斯特林·布朗", "托里恩·普林斯", "小蒂姆·哈达威", "扎克·拉文", "韦恩·艾灵顿", "萨拉赫·梅杰里", "鲁迪·盖伊", "凯文·加内特", "奥米尔·阿西克", "托尼·阿伦", "贾斯汀·霍勒迪", "克里斯·邓恩", "钱宁·弗莱", "以赛亚·托马斯", "达米安·琼斯", "安德烈·伊戈达拉", "拉夫·阿尔斯通", "肖恩·巴蒂尔", "约翰·沃尔", "布兰顿·罗伊", "杰拉德·格林", "本·华莱士", "拉简·朗多", "格雷格·奥登", "德里克·罗斯", "哈里森·巴恩斯", "蒂姆·邓肯", "杰拉德·格林", "拉简·朗多", "内特·罗宾逊", "雷·阿伦", "克里斯·波什", "格雷格·奥登", "斯科蒂·皮蓬", "凯文·乐福", "德雷蒙德·格林", "卡梅隆·安东尼", "布雷克·格里芬", "拉塞尔·威斯布鲁克", "科怀·伦纳德", "肖恩·基尔帕特里克", "谢尔文·马克", "沙巴兹·内皮尔", "史蒂文·亚当斯", "肖恩·基尔帕特里克", "谢尔顿·麦克", "特洛伊·丹尼尔斯", "托马斯·萨特兰斯基", "维克托·奥拉迪波", "TJ·威廉姆斯", "索恩·梅克", "雷吉·布洛克", "沙奎尔·哈里森", "泰·劳森", "威利·里德", "小韦恩·塞尔登", "文斯·卡特", "扎克·兰多夫", "约吉·费雷尔",],
      gmx: ["爱因斯坦", "牛顿", "亚里士多德", "康德", "马克思", "顾恺之", "莎士比亚", "巴尔扎克", "安徒生", "肖邦", "列夫托尔斯泰", "马克·吐温", "柴可夫斯基", "罗丹", "凡高", "泰戈尔", "鲁迅", "毕加索", "卡夫卡", "卓别林", "达芬奇", "米开朗琪罗", "塞万提斯", "奥斯汀", "贝克", "布莱恩", "布莱克", "布鲁斯", "布朗", "亨特", "米勒", "史密斯", "菲尔德", "格林", "怀特", "伍德", "米尔", "希尔", "哈代", "斯特林", "哈特", "伯德", "福克斯", "汉德", "朗曼", "冈特", "纽曼", "史蒂芬阿伯特", "亚当", "艾伯特", "安德鲁", "安东尼", "奥古斯塔", "巴顿", "伯纳德", "本杰明", "鲍勃", "卡尔", "查尔斯", "戴维", "爱德华", "弗雷德", "贾斯汀", "詹姆斯", "乔治", "哈罗德", "哈特", "哈维", "亨利", "贾斯帕", "约瑟夫", "兰姆", "劳伦斯", "奥凯西", "帕特里克", "理查德", "伊戈尔", "迈克", "西蒙", "爱丽丝", "安娜", "丽贝卡", "夏洛蒂", "克里斯蒂娜", "萨布利亚", "朱丽叶", "莎朗", "切瑞", "凯莉", "阿瑞娜", "乔治安娜", "伊丽莎白", "维多利亚迪利亚", "艾米丽", "尤菲米娅", "露易丝", "路易斯安娜", "朱莉安娜", "露西亚", "罗莎丽", "泰勒", "沃顿"],
      amx:  ["飯島愛 ", "三浦愛佳", " 大浦安娜 ", "川島和津實", "金澤文子 ", "桐島惠理香 ", "原史奈 ", "水野春樹 ", " 草苺牛奶 ", "稻田千花", " 鳩村薰 ", " 薰 ", "津野田薰 ", "水谷佳 ", "森下來美 ", "中村水穗 ", "小澤圓", " 萩原舞 ", "夕樹舞子 ", "小澤真珠 ", "濱田美姬 ", "美里真里 ", "夢野瑪麗亞 ", " 盛本真理子", " 飯窪五月", "大澤惠", "有賀美穗", "程嘉美", "葵實野理", "飯島美雪", " 中村水穗", " 盛本真理子", "及川奈央", "遠野奈津子", " 濱田範子", "友崎怜 ", "三宮里緒 ", "瞳亮", "美崎涼香 ", "麻生早苗 ", "島田沙羅 ", "吉田里深", "紗耶香", "鈴木史華", "栗林知美", "長曾我部蓉子", "大西結花", "染谷由紀子", "阪井優美", "久保惠子 ", "中澤慶子 ", "齊藤慶子 ", "鈴木景子 ", "武田惠子 ", "朝吹？", "相澤紀美 ", "長坂仁惠 ", "吉野公佳", " 重坂季實子", "櫻井貴美子 ", "伊丹公理 ", "木村衣里 ", " 希良梨", " 小泉？", "衣澄桐子", "北澤唯 ", "山川小春 ", "遠野小春 ", "飯島戀 ", "安井小徑 ", "長谷川小夏 ", "白石琴子 ", "京野琴美 ", "嶋田琴美 ", " 白石久美 ", "麻生久美子", " 遠藤久美子", " 原久美子 ", "池田久美子 加藤久美子", "大場久美子 ", "武田久美子 ", "森下來美 AV ", "鈴木來美", " 恭江 RQ ", "長谷川?京子 ", "恭香 ", "深田恭子 ", "長谷川京子 ", "泉京子 ", " 小泉今日子", " 南恭子 ", "森野京子", "中村涼子", "西原京子", "立花杏子", "山本嚮子 ", "吉澤京子 ", "藤澤京子 ", "遠山景織子 ", "小泽玛利亚"],
    },
    commentlist: [],
    commentdefault: ["史上最搞笑的事情就是我去年跟你说的话，你今年给我回复，整整反应了5个月零3天，哇哦!反应够快啊!", "赞，怒赞，狂赞，力赞，超赞，跳楼赞，无敌赞，吐血赞，全民赞，莫名赞，无限赞，极赞，绝赞，大赞，非常赞必须赞不得不赞，史上最赞，赞了又赞，一赞到底。", "为了巩固咱们的友谊，拉近东西部差距，抑制贫富悬殊，杜绝社会分化，稳定社会治安，推动有中国特色社会主义现代化建设……借我两百块!", "小楼主，白又白，两只耳朵拎起来，割完动脉割静脉，一动不动真可爱。 小楼主，肚皮白，进针毁脑挂起来，肚皮上面贴盐酸，骚骚爬爬真可爱。 小楼主，白又白，一只笼子关起来，吊完尾巴做电击，忧伤抑郁真可爱。 小楼主，白又白，左胸右胸捏起来，剖完胸腔剖腹腔，鲜血淋漓真可爱。小楼主，白又白，注射麻醉绑起来，割完盲肠缝起来，目光呆滞真可爱。 小楼主，白又白，挖掉眼睛提起来，割掉膀胱割小脑，垂死挣扎真可爱。小楼主，白又白，捆手捆脚挂起来，皮鞭蜡烛电警棍，哇哇叫得真可爱!小楼主，白又白，空气打进肱静脉，打完左边打右边，两眼突出真可爱。", "好!(此回复虽有且仅有一个字，却深刻的表达了回复人的深深祝福与刻骨的情感，可谓言简意骇，一字千金，字字扣人心弦，字字催人泪下，足可见回复人扎实的文字功底和信手拈来的写作技巧以及惨绝人寰的创新潜质。再加上以感叹号收尾，点睛之笔，妙笔生花，意境深远，照应前文，升华主题)", "我真搞不懂你，发生了这种事情你居然还有情绪在这发说说。那女孩子我已经帮你安顿好了，找了个宾馆让她住下了，也做了很多她的思想工作，就应不会再有轻生的念头了，作为同学，我只能帮到你这一步了，剩下的事情你自我好好想想怎样解决吧。她说了，她不会再纠缠着你了，也不怪你了，期望你以后能愉悦，还让我转告你，期望你有时刻的时候能多去下她那里，就算是为了孩子也行，毕竟那是你们曾今在一齐的证明。而且她也不期望孩子以后的成长路上没有父爱的陪伴，就算你不能给她们母子两一个家，但能抽点时刻多陪伴一下她也心满意足了!", "看完您的说说后，我的心久久不能平静!这条说说构思新颖，题材独具匠心，段落清晰，情节诡异，跌宕起伏，主线分明，引人入胜，平淡中显示出不凡的文学功底，可谓是字字珠玑，句句经典，是我辈应领悟之典范。就小说艺术的角度而言，可能不算太成功，但它的实验好处却远大于成功本身。一马奔腾，射雕引弓，天地在我心中!您不愧为无厘头界新一代开山怪!是你让我的心里重燃起期望之火，这是难得一见的好说!苍天有眼，让我在有生之年能观得如此精彩说说!真如‘大音希声扫阴翳’，犹如‘拨开云雾见青天’，使我等之辈看到期望，晴天霹雳，醍醐灌顶，不足以形容大师文章的构思;巫山行云，长江流水更难比拟大师的文才!你烛照天下，明见万里;雨露苍生，泽被万方!透过你深邃的文字，我仿佛看到了你鹰视狼顾，龙行虎步的伟岸英姿;仿佛看到了你手执如椽大笔，写天下文章的智慧神态;仿佛看见了你按剑四顾，江山无数的英武气概!你说的多好啊!我在网上打滚这么多年，所谓阅人无数，见怪不怪了，但一看您的气势，我就觉得您与在网上灌水的那帮小混蛋有着本质的差别，那忧郁的语调，那熟悉的签名，那高屋建瓴的辞藻，就足以证明您的伟大。是您让中华民族精神得以弘扬。佩服佩服!", "小楼主，白又白，两只耳朵拎起来，割完动脉割静脉，一动不动真可爱。 小楼主，肚皮白，进针毁脑挂起来，肚皮上面贴盐酸，骚骚爬爬真可爱。 小楼主，白又白，一只笼子关起来，吊完尾巴做电击，忧伤抑郁真可爱。 小楼主，白又白，左胸右胸捏起来，剖完胸腔剖腹腔，鲜血淋漓真可爱。小楼主，白又白，注射麻醉绑起来，割完盲肠缝起来，目光呆滞真可爱。 小楼主，白又白，挖掉眼睛提起来，割掉膀胱割小脑，垂死挣扎真可爱。小楼主，白又白，捆手捆脚挂起来，皮鞭蜡烛电警棍，哇哇叫得真可爱!小楼主，白又白，空气打进肱静脉，打完左边打右边，两眼突出真可爱。", "不得了!不得了啊!。楼主，有道灵光从你的天灵盖儿喷出来，你知道吗?年纪轻轻的就有一身横练的筋骨，简直百年一见的练武奇才呀!如果有一天让你打通任督二脉，那还不飞龙上天呐。正所谓我不入地狱谁入地狱，禁恶惩奸维护世界和平这个任务就交给你了。这本如来神掌秘籍是无价之宝，我看与你有缘，收你块钱传授给你吧", "7、你又在那里吹牛逼了。工头到处找你，叫你赶紧回工地去，还有两车水泥要卸，工头说再不回去你那天块多工钱一分都别想拿到。还有村长来电话了，叫我转告你，隔壁村的王寡妇来你家了，叫你明天赶紧结工钱回去和她把婚事给办了。还有你侄子的DNA检验结果出来了，你侄子不是你和你嫂子的，隔壁张大婶也去乡里派粗所撤案了，说年前你偷看她洗澡的事情就算了，安心回村里来吧，村里通电了，电话也通了，路也修好了。不好再瞎逛胡说八道了", "你安排我的事已经办好了。孩子已经打掉了，刚把她从医院接出来。给她找了个宾馆住。作为兄弟该做的我都做了，她毕竟是你的女人，还得需要你负责。她现在情绪很不好，你来看看她吧。没办法，打你电话不接，发短信给你不回，看到你还有心情发说说，只能在这里留言了。言尽于此，好自为之吧。", "专业维修核潜艇、反应堆，核弹头翻新、抛光、打蜡，回收二手航母，清洗航母油槽，航天飞机保养换三滤，高空作业清洗卫星表面灰尘，批发歼-10、F22、F35、B2轰炸机，各类核弹头，量大从优，有发票，三个月内提货，送两年免费保养和飞机后视镜。另承接火车补胎，订做蚊子眼睛，蚂蚁刨腹产等业务、有正规发票，质量三包、另外新到一批野生散养奥特曼，纯天然，无污染、一批未调试的野生多啦A梦，欲购从速", "第一次回复，好紧张啊！有没有潜规则？用不用脱啊？该怎样说啊？打多少字才显的有文采啊？我写的这么好会不会太招遥？写的这么深奥别人会不会看不懂啊？好激动啊！怎样才能装成是经常回复的样貌？好紧张啊！", "头一次评论啊，好紧张啊，该怎么说啊，打多少字才显的有文采啊，这样说好不好啊，会不会成热门啊，我写的这么好会不会太招遥，写的这么深奥别人会不会看不懂啊，怎样才能写出飘逸潇洒的水平呢，半小时写了这么多会不会太快啊，好激动啊！", "昨日贫道夜观天象，发现北斗七星有一颗星往南偏离了两厘米，便知施主气数已尽，今日见施主印堂发黑，眼睛发紫，胡言乱语，语无伦次，看来施主命不久矣啊！施主要想化险为夷唯有越过喜马拉雅山，登上珠穆朗玛峰向原始天尊求得一包“板蓝根”服下方能活命。", "为了赞你这条说说，我走了几十公里的山路来到镇上，脚上磨起了许多豆大的水泡，鞋子也开胶了。本来想把家里的苞谷卖掉几十斤，在镇上坐车到城里的网吧赞你这条说说的，无奈天公不作美，今年收成不好，种的粮食只够家里吃，所以我只好在镇上的砖窑里打工，挣足路费。从砖窑搬一块砖到拖拉机上只给一分钱，为了100块的车费，我搬了一万块砖，十个手指头都磨出了鲜血，为了省下车费，我没贴云南白药创可贴，让血液自然凝结。之后拿到搬砖钱，我坐上了从镇上开往城里的汽车。来到网吧，一摸兜里，尼玛，没有三块钱的上网费了，少搬了300块砖。我只好在大街上四处奔走，守望着那些喝矿泉水的人们，当他们将矿泉水瓶从手中抛出的那一刹那，我就像守门员扑球般扑去了，生怕矿泉水瓶被别人抢去了，我赞你的说说又晚上那么一秒钟，你理解我迫不及待赞你这条说说的心情么？历尽千辛万苦，我终于收集到60个珍贵的矿泉水瓶子，拿到废品收购站换了3块钱的网费，来到网吧，终于赞上了你的这条说说！", "全都是泡沫゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○。°゜Ｏ○。°○ｏ°○ｏ○゜ｏ。Ｏ゜○。゜。゜○。○゜。Ｏ°ｏ○。ｏ゜゜○。○゜。Ｏ°ｏ○。ｏ゜○。゜Ｏ○", "哇塞，不错哦！", "老铁，你这个可以啊", "点赞+1", "我也喜欢这个", "你去哪儿里啊", "明天我去你那儿啊", "你这个厉害了", "我去你这是哪里啊", "hha ,你这个", "明天出去玩啊"],
    list: [],
    word: '',
    imglist: [],
    wz: "",
    hdimg: '',
    hdname: 'default',
    tab: true,
    comment: false,
    commentnum: 1,
    commentmax: '1',
    commentInput:'',
    location: false,
    weatherData: '',
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
    dzDefault:'ptm',
    radioitems: [
      { name: '普通人', value: 'ptm', checked: 'true'},
      { name: '路人甲', value: 'lrj' },
      { name: '男明星', value: 'wmx' },
      { name: '女明星', value: 'mmx' },
      { name: '篮球明星', value: 'bmx' },
      { name: '商界大佬', value: 'smx' },
      { name: 'AW明星', value: 'amx' },
      { name: '国外大佬', value: 'gmx' },
    ],
    current:0,
    disabled:true,
    tempFilePaths: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bgimg:'images/bg.jpg'
  },
  back:function(){
    this.setData({
      word: '',
      list: [],
      word: '',
      imglist: [],
      wz: "",
      tab: true,
      comment: false,
      commentnum: 1,
      commentmax: '1',
      commentInput: '',
      location: false,
      tab:true
    })
  },
  radioChange: function (e) { //需要谁给你点赞
    var _this = this.data
    _this.list = _this.namelist[e.detail.value].slice('0', _this.commentmax)
    _this.commentname = _this.namelist[e.detail.value].slice('0', _this.commentnum)
    this.setData({
      list:_this.list,
      commentname: _this.commentname,
      dzDefault:e.detail.value
    })
  },
  select:function(e){
    var _this = this.data
    _this.list = _this.namelist[e].slice('0', _this.commentmax)
    _this.commentname = _this.namelist[e].slice('0', _this.commentnum)
    this.setData({
      list: _this.list,
      commentname: _this.commentname,
      dzDefault: e
    })
  },
  sliderchange: function(e){ //需要多少个点赞
    this.setData({
      commentmax : e.detail.value
    })
  },
  commentslider:function(e){ //需要多少恶搞评论
    this.setData({
      commentnum: e.detail.value
    })
  },
  switchChange: function (e) { //是否需要评论
    if (e.detail.value === true) {
      this.setData({
        comment: true
      })
    } else {
      this.setData({
        comment: false
      })
    }
  },
  switchChange2: function (e) { //是否显示地理位置
    if (e.detail.value === true) {
      this.setData({
        location: true
      })
    } else {
      this.setData({
        location: false
      })
    }
  },
  locationClick:function(e){ //获取当前位置
    this.setData({
      current: e.target.dataset.num
    })
    if (e.target.dataset.num === "1"){
      this.getlocation()
      this.setData({
        disabled: true
      })
    }else{
      this.setData({
        disabled: false
      })
    }
  },
  chooseimage: function () {//上传说说图
    var _this = this,
        list = this.data.imglist
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        if (list){
          if(list.length < 9){
            list.push(res.tempFilePaths[0])
          }
        }else{
          list = res.tempFilePaths
        }
        _this.setData({
          imglist: list
        })
      }
    })
  },
  choosebgimage:function(){// 修改背景图
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        _this.setData({
          bgimg: res.tempFilePaths
        })
      }
    })
  },
  delimg: function (e) {
    var temp = []
    for (var i in this.data.imglist) {
      if (i != e.target.dataset.index) {
        temp.push(this.data.imglist[i])
      }
    }
    this.data.imglist = temp
    this.setData({
      imglist:temp
    })
  },
  whiteword: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  whitecomment: function (e) {
    this.setData({
      commentInput: e.detail.value
    })
  },
  whitewz: function (e) {
    this.setData({
      wz: e.detail.value
    })
  },
  getlocation: function () {
    var _this = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            _this.setData({
              wz: res.result.address
            })
          }
        })
      }
    })
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  getcomment: function (namelist, commentlist, comment, type) {
    var _this = this.data;
    if (type === 'a') {// 填写过评论
      for (var i = 0; i < _this.commentnum; i++) {
        var temp = {
          "name": "default",
          "comment": "default"
        };
        temp.name = namelist[i]
        temp.comment = comment
        _this.commentlist.push(temp)
      }
      this.setData({
        commentlist: _this.commentlist
      })
    } else if (type === 'b') {
      for (var i = 0; i < _this.commentnum; i++) {
        var temp = {
          "name": "default",
          "comment": "default"
        };
        temp.name = namelist[i]
        temp.comment = commentlist[Math.floor(Math.random() * commentlist.length)]
        _this.commentlist.push(temp)
      }
      this.setData({
        commentlist: _this.commentlist
      })
    }
  },
  generate:function(){
    var _this = this.data
    if (_this.word !== '' || _this.imglist.length > 0) {
      if (_this.list.length === 0) { //是否选择要谁点赞
        _this.list = _this.namelist['ptm'].slice('0', _this.commentmax)
        this.setData({
          list: _this.list
        })
      }
      this.select(_this.dzDefault)
      if (_this.comment === true) {
        if (_this.commentInput !== '') {
          this.getcomment(_this.list, _this.commentdefault, _this.commentInput, 'a')
        } else {
          this.getcomment(_this.list, _this.commentdefault, '', 'b')
        }
      }
      this.setData({
        tab: false
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
      })
    }
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'SHMAcISLXjBvCZaYKAl4L05T5xbQxWRw'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = weatherData.currentCity
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    })

    //实例化腾讯地图
    qqmapsdk = new QQMapWX({
      key: '6FVBZ-2N7KQ-6IB5N-GJDNL-UQZPS-RHB3E'
    });

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
    
    //获取当前用户昵称和头像
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        hdimg: app.globalData.userInfo.avatarUrl,
        hdname: app.globalData.userInfo.nickName
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          hdimg: res.userInfo.avatarUrl,
          hdname: res.userInfo.nickName
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            hdimg: res.userInfo.avatarUrl,
            hdname: res.userInfo.nickName
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hdimg: e.detail.userInfo.avatarUrl,
      hdname: e.detail.userInfo.nickName,
    })
  },
  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hdimg: e.detail.userInfo.avatarUrl,
      hdname: e.detail.userInfo.nickName,
    })
  }
})
