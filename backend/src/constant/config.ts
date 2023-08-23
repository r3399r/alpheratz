export type Message = {
  type: 'text' | 'image';
  content: string;
  quickReply?: string[];
};

export type Reply = PassReply | HintReply | FailReply;

type PassReply = {
  type: 'pass';
  keyword: string;
  message?: Message[];
};

type HintReply = {
  type: 'hint';
  keyword: string;
  message: Message[];
};

type FailReply = {
  type: 'fail';
  keyword: string;
  message: Message[];
};

export type Stage = {
  prevStage: string | null;
  stage: string;
  message: Message[];
  reply?: Reply[];
};

type Config = {
  main: Stage[];
  fire: Stage[];
  water: Stage[];
  // earth:Stage[];
  // air:Stage[];
  // aether:Stage[];
};

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
          content: 'main-0-welcome.jpg',
        },
        {
          type: 'text',
          content:
            '隨著時間的流逝，元素的光芒漸顯黯淡。來自遠方的旅人阿，可否借助你力，讓這失落的元素再顯從前的光芒？請輸入「可以」、或是「不可以」',
          quickReply: ['可以', '不可以'],
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
              quickReply: ['可以'],
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
          content: 'main-1-map.jpg',
          quickReply: ['風', '火', '土', '水', '以太'],
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
          content: '/xxxx',
        },
        {
          type: 'text',
          content: '「火，走出洞穴與原始，啟動知識與文明。」',
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
      ],
      reply: [
        {
          type: 'pass',
          keyword: '校徽',
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
          ],
        },
      ],
    },
    {
      prevStage: 'fire-1',
      stage: 'fire-2',
      message: [
        {
          type: 'text',
          content: 'last stage of fire',
        },
      ],
      reply: [
        {
          type: 'pass',
          keyword: 'gogogo',
          message: [
            {
              type: 'text',
              content: '獲得火元素',
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
};
