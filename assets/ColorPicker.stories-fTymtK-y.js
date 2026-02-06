import{d as n,h as r}from"./iframe-C561pEjZ.js";const g={title:"Components/ColorPicker",component:n,tags:["autodocs"],argTypes:{}},u=e=>({components:{VColorPicker:n},setup(){return{args:e}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(n,{...e,"onUpdate:modelValue":d=>{console.log("update",d)}})])}}),o=u.bind({});o.args={};const s={render:e=>({components:{VColorPicker:n},setup(){return{args:e}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(n,{...e,size:"default"}),r(n,{...e,size:"small"}),r(n,{...e,size:"large"})])}}),args:{}};var a,l,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    VColorPicker
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
    }, [h(VColorPicker, {
      ...args,
      "onUpdate:modelValue": value => {
        // eslint-disable-next-line no-console
        console.log("update", value);
      }
    })]);
  }
})`,...(t=(l=o.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VColorPicker
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
      }, [h(VColorPicker, {
        ...args,
        size: "default"
      }), h(VColorPicker, {
        ...args,
        size: "small"
      }), h(VColorPicker, {
        ...args,
        size: "large"
      })]);
    }
  }),
  args: {}
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const x=["Primary","AllInOne"];export{s as AllInOne,o as Primary,x as __namedExportsOrder,g as default};
