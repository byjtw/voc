//=======================================================
// HTML5 Spelling 選單設定檔
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

//
//上方標題
title = '字母名辨識聽選';

//
//虛擬鍵盤是否使用數字(使用: true, 不使用: false)
number_enabled = false;

//
//上載成績單記錄的網址
logger_url = 'https://docs.google.com/forms/d/e/1FAIpQLSd1qCC_m-cI0B3wVtQWa02c7s6sywlwa6SPl5LkAO2etOmiTQ/viewform';

//
//存放題庫檔的資料夾名稱(相對於目前的資料夾
datafolder = 'data';

//
//【選單中的選項清單】
//  一行一個選單項目
//  以半形逗號為【選項文字】與【題庫檔名】兩欄的分欄符號
//
menuItemLines = function(){/*--這一行請勿更改--

聽選大寫A-M字母,01.js
聽選大寫N-Z字母,02.js
聽選小寫a-m字母,03.js
聽選小寫n-z字母,04.js
聽選大小寫字母A-M(有提示),05.js
聽選大小寫字母N-Z(有提示),06.js
聽選大小寫字母A-Z(無提示),07.js
聽選小寫a-m字母(60),03.js
聽選小寫n-z字母(60),04.js
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

