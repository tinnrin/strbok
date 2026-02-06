import{a5 as n,h as e,r as c,S as u}from"./iframe-C561pEjZ.js";const V={title:"Components/InputNumber",component:n,tags:["autodocs"],argTypes:{}},f=l=>({components:{VInputNumber:n},setup(){const t=c(0);return{args:l,value:t}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{...l,modelValue:void 0})])}}),r=f.bind({});r.args={};const a={render:l=>({components:{VInputNumber:n},setup(){const t=c(0);return{args:l,value:t}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{modelValue:this.value,placeholder:"Outlined",variant:"outlined",checked:!0,step:2,min:50,max:2},{suffix:()=>e(u,{size:16}),prefix:()=>e(u,{size:16}),default:()=>"text"}),e(n,{placeholder:"Outlined",variant:"outlined",disabled:!0,modelValue:1}),e(n,{placeholder:"Filled",variant:"filled",modelValue:1}),e(n,{placeholder:"Borderless",variant:"borderless",modelValue:1,status:"error"}),e(n,{placeholder:"Underline",variant:"underline",modelValue:1})])}}),args:{}};var s,o,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VInputNumber
  },
  setup() {
    const value = ref(0);
    return {
      args,
      value
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VInputNumber, {
      ...args,
      modelValue: undefined
    })]);
  }
})`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VInputNumber
    },
    setup() {
      const value = ref(0);
      return {
        args,
        value
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VInputNumber, {
        modelValue: this.value,
        placeholder: "Outlined",
        variant: "outlined",
        checked: true,
        step: 2,
        min: 50,
        max: 2
      }, {
        suffix: () => h(VSettingFilled, {
          size: 16
        }),
        prefix: () => h(VSettingFilled, {
          size: 16
        }),
        default: () => "text"
      }), h(VInputNumber, {
        placeholder: "Outlined",
        variant: "outlined",
        disabled: true,
        modelValue: 1
      }), h(VInputNumber, {
        placeholder: "Filled",
        variant: "filled",
        modelValue: 1
      }), h(VInputNumber, {
        placeholder: "Borderless",
        variant: "borderless",
        modelValue: 1,
        status: "error"
      }), h(VInputNumber, {
        placeholder: "Underline",
        variant: "underline",
        modelValue: 1
      })]);
    }
  }),
  args: {}
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const v=["Primary","AllInOne"];export{a as AllInOne,r as Primary,v as __namedExportsOrder,V as default};
