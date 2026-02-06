import{b2 as e,h as n}from"./iframe-C561pEjZ.js";const x={title:"Components/TextArea",component:e,tags:["autodocs"],argTypes:{}},c=t=>({components:{VTextArea:e},setup(){return{args:t}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(e,{...t})])}}),r=c.bind({});r.args={};const o={render:t=>({components:{VTextArea:e},setup(){return{args:t}},render(){return n("div",{style:{display:"flex",gap:"50px"}},[n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},[n(e,{placeholder:"AutoSize empty",autoSize:!0}),n(e,{modelValue:"Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content ",placeholder:"AutoSize filled",autoSize:!0}),n(e,{placeholder:"Disabled with placeholder",disabled:!0,rows:3}),n(e,{modelValue:"Disabled with content",placeholder:"Disabled",disabled:!0,rows:3})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},[n(e,{placeholder:"Outlined",variant:"outlined",rows:3}),n(e,{placeholder:"Filled",variant:"filled",rows:3}),n(e,{placeholder:"Borderless",variant:"borderless",rows:3}),n(e,{placeholder:"Underline",variant:"underline",rows:3}),n(e,{placeholder:"Small",size:"small",rows:3}),n(e,{placeholder:"Large",size:"large",rows:3})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},[n(e,{placeholder:"Resize Vertical",resize:"vertical",rows:3}),n(e,{placeholder:"Resize Horizontal",resize:"horizontal",rows:3}),n(e,{placeholder:"Resize Both",resize:"both",rows:3}),n(e,{placeholder:"Rows 5",rows:5}),n(e,{placeholder:"Max Length 5",maxLength:5,rows:3})])])}}),args:{}};var l,a,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    VTextArea
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
    }, [h(VTextArea, {
      ...args
    })]);
  }
})`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTextArea
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
          gap: "50px"
        }
      }, [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px"
        }
      }, [h(VTextArea, {
        placeholder: "AutoSize empty",
        autoSize: true
      }), h(VTextArea, {
        modelValue: "Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content Inner Content ",
        placeholder: "AutoSize filled",
        autoSize: true
      }), h(VTextArea, {
        placeholder: "Disabled with placeholder",
        disabled: true,
        rows: 3
      }), h(VTextArea, {
        modelValue: "Disabled with content",
        placeholder: "Disabled",
        disabled: true,
        rows: 3
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px"
        }
      }, [h(VTextArea, {
        placeholder: "Outlined",
        variant: "outlined",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Filled",
        variant: "filled",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Borderless",
        variant: "borderless",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Underline",
        variant: "underline",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Small",
        size: "small",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Large",
        size: "large",
        rows: 3
      })]), h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px"
        }
      }, [h(VTextArea, {
        placeholder: "Resize Vertical",
        resize: "vertical",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Resize Horizontal",
        resize: "horizontal",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Resize Both",
        resize: "both",
        rows: 3
      }), h(VTextArea, {
        placeholder: "Rows 5",
        rows: 5
      }), h(VTextArea, {
        placeholder: "Max Length 5",
        maxLength: 5,
        rows: 3
      })])]);
    }
  }),
  args: {}
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const I=["Primary","AllInOne"];export{o as AllInOne,r as Primary,I as __namedExportsOrder,x as default};
