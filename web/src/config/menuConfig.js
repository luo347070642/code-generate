export default [
  {
    id: 1,
    title: '容器',
    name: 'universal',
    children: [
      { name: 'Grid', tempType: 'Grid', icon: '' },
      { name: 'Layout', tempType: 'Layout', icon: '' },
      { name: 'Space', tempType: 'Space', icon: '' },
      { name: 'Carousel', tempType: 'Carousel', icon: '' },
      { name: 'Tabs', tempType: 'Tabs', icon: '' }
    ]
  },
  {
    id: 2,
    title: '基础',
    name: 'universal',
    children: [
      {
        name: 'Input',
        tempType: 'Input',
        icon: '',
        options: {
          type: 'text',
          fieldName: 'input',
          value: null,
          size: 'default',
          defaultValue: '',
          placeholder: '',
          disabled: false,
          maxlength: null,
          prefix: null,
          suffix: null,
          style: 'width: 220px',
          allowClear: true
        }
      },
      {
        name: 'Number',
        tempType: 'Number',
        icon: '',
        options: {
          value: null,
          fieldName: 'number',
          size: 'default',
          defaultValue: '',
          placeholder: '',
          disabled: false,
          style: 'width: 220px',
          min: null,
          max: null,
          precision: 0
        }
      },
      {
        name: 'Radio',
        tempType: 'Radio',
        icon: '',
        options: {
          value: null,
          fieldName: 'radio',
          size: 'default',
          defaultValue: '',
          name: 'radio1',
          buttonStyle: 'outline',
          disabled: false,
          options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
          ]
        }
      },
      {
        name: 'Select',
        tempType: 'Select',
        icon: '',
        options: {
          value: null,
          fieldName: 'select',
          name: 'select1',
          disabled: false,
          style: 'width: 220px',
          options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
          ]
        }
      },
      {
        name: 'Check',
        tempType: 'Check',
        icon: '',
        options: {
          value: null,
          fieldName: 'check',
          name: 'check',
          disabled: false,
          options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: '高级',
    name: 'universal',
    children: [{ name: 'Textarea', tempType: 'Input', icon: '' }]
  }
]
