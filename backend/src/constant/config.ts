// export type Message = {
//   type: 'text' | 'image';
//   content: string;
//   // quickReply?: string[];
// };

import { Config } from 'src/model/Config';

// export type Reply = PassReply | HintReply | FailReply;

// type PassReply = {
//   type: 'pass';
//   keyword: string;
//   message?: Message[];
// };

// type HintReply = {
//   type: 'hint';
//   keyword: string;
//   message: Message[];
// };

// type FailReply = {
//   type: 'fail';
//   keyword: string;
//   message: Message[];
// };

// export type Stage = {
//   prevStage: string | null;
//   stage: string;
//   message: Message[];
//   reply?: Reply[];
// };

// type Config = {
//   main: Stage[];
//   fire: Stage[];
//   water: Stage[];
//   earth: Stage[];
//   air: Stage[];
//   aether: Stage[];
// };

export const config: Config = {
  main: [
    {
      prevStage: null,
      stage: 'welcome',
      message: [
        {
          type: 'text',
          content: '傳說中，這個宇宙由風、水、土、火、以太所構成。',
        },
        {
          type: 'text',
          content:
            '百年之前，融合了柏拉圖的理念，這五種構成的因素悄悄的埋入了眼前的校園',
        },
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/main-0-welcome.jpg',
        },
        {
          type: 'text',
          content:
            '隨著時間的流逝，元素的光芒漸顯黯淡。來自遠方的旅人阿，可否借助你力，讓這失落的元素再顯從前的光芒？請輸入「可以」、或是「不可以」',
          // quickReply: ['可以', '不可以'],
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '可以',
        },
        {
          type: 'fail',
          keyword: '不可以',
          message: [
            {
              type: 'text',
              content:
                '寶藏與秘密，只顯與那些願意追尋、勇敢承擔的勇士。\n你可以無視，但埋藏的秘密你將無法知曉。\n（輸入「可以」，你還是可以反悔）',
              // quickReply: ['可以'],
            },
          ],
        },
      ],
    },
    {
      prevStage: 'welcome',
      stage: 'start',
      message: [
        {
          type: 'text',
          content:
            '【第一百回：失落的沂風古城】\n\n距今百年前，聖主將改變世界秘密的五大元素，藏進沂風古城。\n\n「五方元素，合為聖器，若擁此物，必得江山。」\n\n消息既出，各路英雄豪傑為奪聖器，燒殺擄掠，沂風一帶不得安寧。\n百年後的今日，\n古城內元素魂魄已飛散四處。\n\n勇士，\n請蒐集五方元素，掌管聖器，\n助我們重啟沂風榮景，\n並守護古城安危。',
        },
        {
          type: 'text',
          content:
            '當你踏入這座沂風古城，抬頭一望，六個金色的字在你眼前熠熠閃爍，請說出鑰匙的名稱，開啟這趟元素之旅吧！',
        },
        {
          type: 'text',
          content: '（請由左到右輸入六個中文字，不要空格）',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '好學力行知恥',
        },
      ],
    },
    {
      prevStage: 'start',
      stage: 'in-game',
      message: [
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/main-1-elements.jpg',
        },
        {
          type: 'text',
          content:
            '天光乍現，複雜的形體瞬間崩裂，每一個元素碎片在它所在的多面體中低喚。請前去蒐集所有的元素吧！一旦你得到所有的元素，它們將告訴你如何使它們重回光芒。',
        },
        {
          type: 'text',
          content:
            '（請分別輸入「風」、「火」、「土」、「水」、「以太」來蒐集這五種元素，順序不拘）',
        },
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/main-2-map.jpg',
          // quickReply: ['風', '火', '土', '水', '以太'],
        },
      ],
    },
    {
      prevStage: 'in-game',
      stage: 'last',
      message: [
        {
          type: 'text',
          content:
            '恭喜蒐集完五種元素，將其背後對應的訊息組合起來，輸入該訊息即可得到最終的聖物。）\n（英文中文數字都要全部正確才會開啟）',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '去藝大2F',
        },
      ],
    },
    {
      prevStage: 'last',
      stage: 'complete',
      message: [
        {
          type: 'image',
          content: '/xxxx',
        },
        {
          type: 'text',
          content:
            '恭喜你破關了，獲得聖器！沂風古城將免遭他人襲擊，且昌隆幾萬年。',
        },
        {
          type: 'text',
          content:
            '此遊戲尚在測試階段，請您撥冗填一下表單，以利後續的調整修正：\nhttps://forms.gle/qwaJmPWifwqPrrFB8',
        },
      ],
    },
  ],
  fire: [
    {
      prevStage: null,
      stage: 'fire-0',
      message: [
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-1-map.jpg',
        },
        {
          type: 'text',
          content:
            '「火，走出洞穴與原始，啟動知識與文明。」\n小禮堂，這是現今它的名字。\n斑駁水泥牆面遺留各式圖騰，\n細數先人智慧之結晶，\n解給其中秘密。',
        },
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-2-hint.jpg',
        },
        {
          type: 'text',
          content: '請輸入數字(四位數)',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '1048',
        },
      ],
    },
    {
      prevStage: 'fire-0',
      stage: 'fire-1',
      message: [
        {
          type: 'text',
          content:
            '勇士的智慧之眼帶領我們望向：百年歲月中，古老的建築餘下的一小片磚牆以及眼前的建築。站在門前仰望，山牆上的圖騰究竟是什麼？',
        },
        {
          type: 'text',
          content: '請輸入中文兩個字（你可以先google看看「山牆」是什麼）',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校徽',
        },
      ],
    },
    {
      prevStage: 'fire-1',
      stage: 'fire-2',
      message: [
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-3-badge.jpg',
        },
        {
          type: 'text',
          content:
            '抹去校徽的文字，剩下三片竹葉的浮雕在眼前建築的兩側。究竟被抹去的文字是什麼？',
        },
        {
          type: 'text',
          content:
            '請輸入中文兩字\n（可以google）\n（如果還是看不出來，請輸入「消失的文字」）',
          // quickReply: ['消失的文字'],
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '女中',
        },
        {
          type: 'pass',
          keyword: '中女',
        },
        {
          type: 'pass',
          keyword: '女、中',
        },
        {
          type: 'pass',
          keyword: '中、女',
        },
        {
          type: 'pass',
          keyword: '女，中',
        },
        {
          type: 'pass',
          keyword: '中，女',
        },
        {
          type: 'hint',
          keyword: '消失的文字',
          message: [
            {
              type: 'text',
              content:
                '竹女的校徽，三片竹葉代表的是新竹。中間有一個字，旁邊剩下的三組線條，合起來也是一個字。',
            },
            {
              type: 'text',
              content:
                '（如果你還是不知道這兩個字是什麼，請輸入「告訴我消失的文字」）',
              // quickReply: ['告訴我消失的文字'],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '告訴我消失的文字',
          message: [
            {
              type: 'text',
              content: '女中',
            },
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-4-hint.jpg',
              // quickReply: ['女中'],
            },
          ],
        },
      ],
    },
    {
      prevStage: 'fire-2',
      stage: 'fire-3',
      message: [
        {
          type: 'text',
          content:
            '看著三片葉子的浮雕，這裡遺留了一扇門，左右的門牌沒有留下地址。左側留白，右側的門牌指引方向，只是被指向的小燈不曾照亮來往的人。（請輸入「燈+顯示的英文字」）',
        },
        {
          type: 'text',
          content: '（如果你找不到請輸入「我迷路了」）',
          // quickReply: ['我迷路了'],
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '燈x',
        },
        {
          type: 'pass',
          keyword: '燈+x',
        },
        {
          type: 'hint',
          keyword: '我迷路了',
          message: [
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-5-door.jpg',
            },
            {
              type: 'text',
              content:
                '看出箭頭指向哪個英文字母了嗎？\n（請輸入「燈+英文字母」）',
            },
            {
              type: 'text',
              content: '（如果你還是看不出英文字母，請輸入「我看不懂地圖」）',
              // quickReply: ['我看不懂地圖'],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '我看不懂地圖',
          message: [
            {
              type: 'text',
              content: '答案為「燈x」',
            },
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-6-door.jpg',
              // quickReply: ['燈x'],
            },
          ],
        },
      ],
    },
    {
      prevStage: 'fire-3',
      stage: 'fire-4',
      message: [
        {
          type: 'text',
          content:
            '忽然間，你手上的火元素碎片劇烈震動。轉瞬間，伴隨著巨大的光芒，失落的火元素在你手上熠熠重現。',
        },
        {
          type: 'image',
          content:
            'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-7-block.jpg',
        },
        {
          type: 'text',
          content:
            '山牆上被抹去的字出現在你的眼前，兩字之間形成一條「穿越四面」的路徑。將路燈上的字母放置於地上，俯視這耀眼的路徑，你是否看到往前的方向？（請輸入一個中文字）',
        },
        {
          type: 'text',
          content: '（注意：內外側不同。從四面體的內部往外看，字是正向的。）',
        },
        {
          type: 'text',
          content:
            '（除非你能從迷霧中看清方向，否則請輸入「火之迷宮」，直接進入一窺究竟吧）',
          // quickReply: ['火之迷宮'],
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '去',
          message: [
            {
              type: 'text',
              content:
                '原來，記憶不曾被人遺忘。也許能抹去表面的文字，卻抹不去歷史的印痕。',
            },
            {
              type: 'text',
              content:
                '照耀我們前面道路的，不只有發光的燈，也有發人深省的文字。',
            },
            {
              type: 'text',
              content:
                '火炬仍在流傳。即使百年前的學生今已離去，今日仍有許多的人接下這棒，我們承接歷史，也創造歷史。\n\n劇情觸發：「獲得火元素」',
            },
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-12-get.jpg',
            },
          ],
        },
        {
          type: 'hint',
          keyword: '火之迷宮',
          message: [
            {
              type: 'text',
              content:
                '請按照以下步驟操作：\n1. 將四面體用適當的方式拼湊起來，使「女」和「中」這兩個字之間形成一條「通過四個面的最短路徑」\n2. 將該條路徑用「水性螢光筆」著色，路徑請塗滿，太細不易分辨\n3. 將x置於底部，從正上方俯視，會發現路徑形成一個中文字\n（俯視圖如下圖所示）',
            },
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-8-hint.jpg',
            },
            {
              type: 'text',
              content:
                '（如果你還是走不出這個迷宮，可以依照你的能力，輸入「從哪裡切入比較容易」、「關閉一些錯誤的路口」、「直接顯示路徑」、「我放棄，給我展開圖」）',
              // quickReply: [
              //   '從哪裡切入比較容易',
              //   '關閉一些錯誤的路口',
              //   '直接顯示路徑',
              //   '我放棄，給我展開圖',
              // ],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '從哪裡切入比較容易',
          message: [
            {
              type: 'text',
              content:
                '建議先用展開圖（四片三角形，拼成一個大三角形）擺設，從「女」出發開始連路徑會比較簡單，每個面都必須經過，而且有些面會重複經過。',
            },
            {
              type: 'text',
              content:
                '（注意，連完後，拼出四面體時，從內部往外看的字必須是正的。它的內外側有分別）',
              // quickReply: [
              //   '關閉一些錯誤的路口',
              //   '直接顯示路徑',
              //   '我放棄，給我展開圖',
              // ],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '關閉一些錯誤的路口',
          message: [
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-9-hint.jpg',
              // quickReply: ['直接顯示路徑', '我放棄，給我展開圖'],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '直接顯示路徑',
          message: [
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-10-hint.jpg',
              // quickReply: ['我放棄，給我展開圖'],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '我放棄，給我展開圖',
          message: [
            {
              type: 'image',
              content:
                'https://alpheratz-test.s3.ap-southeast-1.amazonaws.com/public/image/fire-11-hint.jpg',
            },
            {
              type: 'text',
              content:
                '如果你看不出字，請注意是否內外側弄反。或是你也可以輸入「給我答案吧QQ」',
              // quickReply: ['給我答案吧QQ'],
            },
          ],
        },
        {
          type: 'hint',
          keyword: '給我答案吧QQ',
          message: [
            {
              type: 'text',
              content: '答案是「去」',
              // quickReply: ['去'],
            },
          ],
        },
      ],
    },
  ],
  water: [
    {
      prevStage: null,
      stage: 'water-0',
      message: [
        {
          type: 'text',
          content: '「水，走出洞穴與原始，啟動知識與文明。」',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '10489',
        },
      ],
    },
    {
      prevStage: 'water-0',
      stage: 'water-1',
      message: [
        {
          type: 'text',
          content:
            '勇士的智慧之眼帶領我們望向：百年歲月中，古老的建築餘下的一小片磚牆以及眼前的建築。站在門前仰望，山牆上的圖騰究竟是什麼？',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校',
        },
        {
          type: 'hint',
          keyword: 'no~~~',
          message: [
            {
              type: 'text',
              content: '答案是什麼呢',
            },
          ],
        },
      ],
    },
    {
      prevStage: 'water-1',
      stage: 'water-2',
      message: [
        {
          type: 'text',
          content: 'last stage of water',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: 'gogogo-water',
          message: [
            {
              type: 'text',
              content: '獲得水元素',
            },
          ],
        },
      ],
    },
  ],
  earth: [
    {
      prevStage: null,
      stage: 'earth-0',
      message: [
        {
          type: 'text',
          content: '「水1，走出洞穴與原始，啟動知識與文明。」',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '10489',
        },
      ],
    },
    {
      prevStage: 'earth-0',
      stage: 'earth-1',
      message: [
        {
          type: 'text',
          content:
            '勇士的智慧之眼帶領我們望向：百年歲月中，古老的建築餘下的一小片磚牆以及眼前的建築。站在門前仰望，山牆上的圖騰究竟是什麼？',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校111',
        },
        {
          type: 'hint',
          keyword: 'no~~~q',
          message: [
            {
              type: 'text',
              content: '答案是什麼呢',
            },
          ],
        },
      ],
    },
    {
      prevStage: 'earth-1',
      stage: 'earth-2',
      message: [
        {
          type: 'text',
          content: 'last stage of earth',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: 'gogogo-earth',
          message: [
            {
              type: 'text',
              content: '獲得earth元素',
            },
          ],
        },
      ],
    },
  ],
  air: [
    {
      prevStage: null,
      stage: 'air-0',
      message: [
        {
          type: 'text',
          content: '「air，走出洞穴與原始，啟動知識與文明。」',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '10489',
        },
      ],
    },
    {
      prevStage: 'air-0',
      stage: 'air-1',
      message: [
        {
          type: 'text',
          content:
            '勇2士的智慧之眼帶領我們望向：百年歲月中，古老的建築餘下的一小片磚牆以及眼前的建築。站在門前仰望，山牆上的圖騰究竟是什麼？',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校sd',
        },
        {
          type: 'hint',
          keyword: 'no~aq1~~',
          message: [
            {
              type: 'text',
              content: '答案是什麼呢',
            },
          ],
        },
      ],
    },
    {
      prevStage: 'air-1',
      stage: 'air-2',
      message: [
        {
          type: 'text',
          content: 'last stage of air',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: 'gogogo-air',
          message: [
            {
              type: 'text',
              content: '獲得air元素',
            },
          ],
        },
      ],
    },
  ],
  aether: [
    {
      prevStage: null,
      stage: 'aether-0',
      message: [
        {
          type: 'text',
          content: '「aether，走出洞穴與原始，啟動知識與文明。」',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '10489',
        },
      ],
    },
    {
      prevStage: 'aether-0',
      stage: 'aether-1',
      message: [
        {
          type: 'text',
          content:
            '勇士的智慧之眼帶領我們望向：百年歲月中，古老的建築餘下的一小片磚牆以及眼前的建築。站在門前仰望，山牆上的圖騰究竟是什麼？',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校',
        },
        {
          type: 'hint',
          keyword: 'no~~~',
          message: [
            {
              type: 'text',
              content: '答案是什麼呢',
            },
          ],
        },
      ],
    },
    {
      prevStage: 'aether-1',
      stage: 'aether-2',
      message: [
        {
          type: 'text',
          content: 'last stage of aether',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: 'gogogo-aether',
          message: [
            {
              type: 'text',
              content: '獲得水元素',
            },
          ],
        },
      ],
    },
  ],
};
