import Form from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { Fragment } from 'react';
import { Stage } from 'src/model/backend/model/Config';

const MESSAGE = (title: string): RJSFSchema => ({
  title,
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
    },
  },
});

const STAGE: RJSFSchema = {
  title: '',
  type: 'array',
  items: {
    title: '',
    type: 'object',
    required: ['stage'],
    properties: {
      stage: {
        type: 'string',
        title: '關卡名',
      },
      message: MESSAGE('關卡訊息'),
      reply: {
        title: '關鍵字回覆設定',
        type: 'array',
        items: {
          title: '',
          type: 'object',
          oneOf: [
            {
              title: 'Option: 成功',
              properties: {
                type: {
                  type: 'string',
                  enum: ['pass'],
                  title: '類型',
                },
                keyword: {
                  type: 'string',
                  title: '關鍵字',
                },
              },
            },
            {
              title: 'Option: 提示或失敗',
              properties: {
                type: {
                  type: 'string',
                  enum: ['hint', 'fail'],
                  title: '類型',
                },
                keyword: {
                  type: 'string',
                  title: '關鍵字',
                },
                message: MESSAGE('關鍵字回覆訊息'),
              },
            },
          ],
        },
      },
    },
  },
};

const uiSchema: UiSchema = {
  items: {
    message: {
      items: {
        content: {
          'ui:help': 'Hint: 若為圖片，請輸入圖片連結',
          'ui:widget': 'textarea',
        },
      },
    },
    reply: {
      items: {
        message: {
          items: {
            content: {
              'ui:help': 'Hint: 若為圖片，請輸入圖片連結',
              'ui:widget': 'textarea',
            },
          },
        },
      },
    },
  },
};

type Props = { data: Stage[]; setData: (stage: Stage[]) => void };

const FormData = ({ data, setData }: Props) => (
  <Form
    schema={STAGE}
    uiSchema={uiSchema}
    formData={data}
    onChange={(e) => setData(e.formData)}
    validator={validator}
  >
    <Fragment />
  </Form>
);

export default FormData;
