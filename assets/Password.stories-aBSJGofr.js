import{ai as n,h as e,S as l,r as m}from"./iframe-C561pEjZ.js";const f={title:"Components/Password",component:n,tags:["autodocs"],argTypes:{}},h=s=>({components:{VPassword:n},setup(){return{args:s}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{...s})])}}),r=h.bind({});r.args={};const a={render:s=>({components:{VPassword:n},setup(){const t=m("");return{args:s,value:t}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{modelValue:this.value,onInput:t=>{this.value=t.target.value},placeholder:"Outlined",variant:"outlined",checked:!0}),e(n,{placeholder:"Filled",variant:"filled"}),e(n,{placeholder:"Borderless",variant:"borderless",status:"error"}),e(n,{placeholder:"Underline",variant:"underline"},{suffix:()=>e(l,{size:16}),prefix:()=>e(l,{size:16})})])}}),args:{}};var o,d,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    VPassword
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
    }, [h(VPassword, {
      ...args
    })]);
  }
})`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPassword
    },
    setup() {
      const value = ref("");
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
      }, [h(VPassword, {
        modelValue: this.value,
        onInput: (event: InputEvent) => {
          this.value = (event.target as HTMLInputElement).value;
        },
        placeholder: "Outlined",
        variant: "outlined",
        checked: true
      }), h(VPassword, {
        placeholder: "Filled",
        variant: "filled"
      }), h(VPassword, {
        placeholder: "Borderless",
        variant: "borderless",
        status: "error"
      }), h(VPassword, {
        placeholder: "Underline",
        variant: "underline"
      }, {
        suffix: () => h(VSettingFilled, {
          size: 16
        }),
        prefix: () => h(VSettingFilled, {
          size: 16
        })
      })]);
    }
  }),
  args: {}
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const g=["Primary","AllInOne"];export{a as AllInOne,r as Primary,g as __namedExportsOrder,f as default};
