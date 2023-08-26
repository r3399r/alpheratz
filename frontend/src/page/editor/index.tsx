import { Form } from '@rjsf/mui';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useEffect, useState } from 'react';
import { Config } from 'src/model/backend/model/Config';
import { getConfig } from 'src/service/configService';

const MESSAGE: RJSFSchema = {
  title: '關卡訊息設定',
  type: 'array',
  items: {
    title: '',
    type: 'object',
    required: ['type', 'content'],
    properties: {
      type: {
        type: 'string',
        enum: ['text', 'image'],
        title: '訊息類型',
      },
      content: {
        type: 'string',
        title: '內容',
      },
      // quickReply: {
      //   title: '快速回覆',
      //   type: 'array',
      //   items: {
      //     type: 'string',
      //     title: '內容',
      //   },
      // },
    },
  },
};

const STAGE = (title: string): RJSFSchema => ({
  title,
  type: 'array',
  items: {
    title: '',
    type: 'object',
    required: ['stage'],
    properties: {
      prevStage: {
        type: ['string', 'null'],
        title: '前一關卡名',
      },
      stage: {
        type: 'string',
        title: '關卡名',
      },
      message: MESSAGE,
      reply: {
        title: '關鍵字回覆設定',
        type: 'array',
        items: {
          title: '',
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['pass', 'hint', 'fail'],
              title: '類型',
            },
            keyword: {
              type: 'string',
              title: '關鍵字',
            },
            message: MESSAGE,
          },
        },
      },
    },
  },
});

const schema: RJSFSchema = {
  title: '竹女實境解謎設定',
  type: 'object',
  properties: {
    main: STAGE('主線'),
    fire: STAGE('火'),
    water: STAGE('水'),
    earth: STAGE('土'),
    air: STAGE('風'),
    aether: STAGE('以太'),
  },
};

const STAGE_SCHEMA = {
  items: {
    prevStage: {
      'ui:emptyValue': null,
      'ui:help': 'Hint: 若無請留白',
    },
    message: {
      items: {
        content: {
          'ui:help': 'Hint: 若為圖片，請輸入圖片連結',
        },
      },
    },
  },
};

const uiSchema: UiSchema = {
  main: STAGE_SCHEMA,
  fire: STAGE_SCHEMA,
  water: STAGE_SCHEMA,
  earth: STAGE_SCHEMA,
  air: STAGE_SCHEMA,
  aether: STAGE_SCHEMA,
};

const Editor = () => {
  const [formData, setFormData] = useState<Config>();

  useEffect(() => {
    getConfig().then((res) => setFormData(res));
  }, []);

  return (
    <div className="p-10">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={(e) => setFormData(e.formData)}
        validator={validator}
        onSubmit={(e) => console.log(e.formData)}
      />
    </div>
  );
};

export default Editor;
