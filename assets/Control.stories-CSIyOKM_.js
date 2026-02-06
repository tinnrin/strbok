import{e,h as r}from"./iframe-C561pEjZ.js";const i={title:"Components/Control",component:e,tags:["autodocs"],argTypes:{}},u=n=>({components:{VControl:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n},()=>"Выбрать значение")])}}),o=u.bind({});o.args={component:"text"};const t={render:n=>({components:{VControl:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n,component:"text",props:{placeholder:"Имя поля",allowClear:!0}}),r(e,{...n,component:"number",props:{min:-5,max:5}}),r(e,{...n,component:"number-range",props:{}}),r(e,{...n,component:"select",props:{options:[{label:"Тип 1",value:1},{label:"Тип 2",value:2},{label:"Тип 3",value:3},{label:"Тип 4",value:4}],clear:!0,multiple:!0,placeholder:"Выберите тип",search:!0}}),r(e,{...n,component:"date",props:{}}),r(e,{...n,component:"date-range",props:{}})])}}),args:{component:"text"}};var l,a,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    VControl
  },
  setup() {
    return {
      args
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VControl, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,c,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VControl
    },
    setup() {
      return {
        args
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VControl, {
        ...args,
        component: "text",
        props: {
          placeholder: "Имя поля",
          allowClear: true
        }
      }), h(VControl, {
        ...args,
        component: "number",
        props: {
          min: -5,
          max: 5
        }
      }), h(VControl, {
        ...args,
        component: "number-range",
        props: {}
      }), h(VControl, {
        ...args,
        component: "select",
        props: {
          options: [{
            label: "Тип 1",
            value: 1
          }, {
            label: "Тип 2",
            value: 2
          }, {
            label: "Тип 3",
            value: 3
          }, {
            label: "Тип 4",
            value: 4
          }],
          clear: true,
          multiple: true,
          placeholder: "Выберите тип",
          search: true
        }
      }), h(VControl, {
        ...args,
        component: "date",
        props: {}
      }), h(VControl, {
        ...args,
        component: "date-range",
        props: {}
      })]);
    }
  }),
  args: {
    component: "text"
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["Primary","AllInOne"];export{t as AllInOne,o as Primary,x as __namedExportsOrder,i as default};
