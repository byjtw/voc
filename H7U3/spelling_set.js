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
title = 'H7U3單字高手';

//
//虛擬鍵盤是否使用數字(使用: true, 不使用: false)
number_enabled = false;

//
//上載成績單記錄的網址
logger_url = ''

//
//存放題庫檔的資料夾名稱(相對於目前的資料夾
datafolder = 'data';

//
//【選單中的選項清單】
//  一行一個選單項目
//  以半形逗號為【選項文字】與【題庫檔名】兩欄的分欄符號
//
menuItemLines = function(){/*--這一行請勿更改--
單字高手:H7U3單字抄寫,03.js
單字高手:H7U3單字依發音規則,01.js
單字高手:H7U3單字需記憶,02.js
單字高手:H7U3單字亂碼,04.js
單字高手:H7U3單字挑戰,05.js
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);

