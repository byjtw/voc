//=======================================================
// HTML5 Spelling 題庫設定檔: 使用自定的 MP3 語音檔
//=======================================================
//
//【測試區塊】
//-------------------------------
//用來偵測換行字元用的測試區塊
//請勿更動
//並且放在題庫設定區塊之前
//-------------------------------
//測試區塊開始
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//測試區塊結束
//-------------------------------
//

//---------------------------------------------------
//【TTS 語音設定】
//---------------------------------------------------
//
//是否使用 TTS 的語音(使用: true, 不使用: false)
tts_enabled = true;

//
//----------------
//Google TTS 文字轉語音的設定
//【注意】不能和 iSpeech TTS 同時使用
//----------------
//
//如果要使用 Google TTS，就拿掉下面這[4行]最左邊的註解(兩個斜線)
tts_language = 'en';  // en : 英語,   zh_tw : 中文
tts_speed = 0.3;  //語音的速度 0 ~ 1 (可用小數)
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';
tts_cut_last_seconds = 0; //裁掉最後面的聲音長度(秒為單位)

//
//----------------
//iSpeech TTS 文字轉語音的設定
//【注意】不能和 Google TTS 同時使用
//----------------
//原始網站參數說明: http://www.ispeech.org/api/#voices-standard
//
//如果要使用 iSpeech TTS，就拿掉下面這[5行]最左邊的註解(兩個斜線)
//tts_language = 'ukenglishfemale';  //auenglishfemale , usenglishfemale , chchinesefemale
//tts_speed = 0;  	//語音的速度 10 ~ -10 (10:最快, 0:一般, -10最慢)
//tts_pitch = 100; 	//音高 0~200 (100:預設值)
//tts_base_url = 'https://www.ispeech.org/p/generic/getaudio?action=convert&pitch='+tts_pitch+'&speed='+tts_speed+'&voice='+tts_language+'&text=';
//tts_cut_last_seconds = 2.54; //english: 2.54 chinese: 5.5 裁掉 iSpeech 最後面的聲音長度(秒為單位)


//
//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//計時幾秒
timer = 720;

//
//答對一題加幾分
number_of_points_for_one_question = 10;

//
//每題要拿掉幾個字母當填空
blanks_total_number = 3;

//
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//
//【題目設定】
//  一行一題, 
//  欄位左起
//    第一欄為英文
//    第二欄為中文
//    第三欄為MP3語音檔的路徑(沒有的話，tts_enabled = true 會以第一欄為TTS的朗讀內容)
//
questionLines = function(){/*--這一行請勿更改--
Sund[ay]##星期日
M[o]nd[ay]##星期一
Tu[es]day##星期二
Wedn[es]day##星期三
Th[ur]sday##星期四
[Fri]day##星期五
Sat[ur]day##星期六
t[o]d[ay]##今天
[wh]at##什麼
d[ay]##[名詞] 白天;日
[it]##它；牠
[is]##是（he/she/it使用）
br[ea]kf[a]st##早餐
lun[ch]##午餐
dinn[er]##晚餐
hamb[ur]g[er]##漢堡
noo[dle]s##麵條（常用複數）
ri[ce]##米飯；稻米
sal[ad]##沙拉
s[ou]p##湯
w[an]t##[動詞] 想要
f[or]##為了
[ar]t##美術
[Chi]nese##國語，中文
[En]gli[sh]##英語
ma[th]##數學
mu[s]i[c]##音樂
[PE]##體育
ha[ve]##有
h[as]##有（第三人稱單數時用）
[cl]a[ss]##課
sc[ie]n[ce]##自然
so[cial] [st]udi[es]##社會
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

