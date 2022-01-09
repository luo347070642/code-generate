import {
  Layout,
  Tabs,
  Collapse,
  Drawer,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Select,
  Radio,
  Button,
  Result
} from 'ant-design-vue'

export function setupAntd(app) {
  app
    .use(Layout)
    .use(Tabs)
    .use(Collapse)
    .use(Drawer)
    .use(Row)
    .use(Col)
    .use(Form)
    .use(Input)
    .use(Checkbox)
    .use(Select)
    .use(Radio)
    .use(Button)
    .use(Result)
}
