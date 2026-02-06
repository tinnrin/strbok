import{aj as o,h as n,_ as r}from"./iframe-C561pEjZ.js";const g={title:"Components/PopConfirm",component:o,tags:["autodocs"],argTypes:{}},m=e=>({components:{VPopConfirm:o},setup(){return{args:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(o,{...e,onClick:()=>console.log("clicked")},()=>n(r,{},()=>"Нажать"))])}}),t=m.bind({});t.args={text:"Большое спасибо за внимание?",title:"Внимание",active:!0};const l={render:e=>({components:{VPopConfirm:o},setup(){return{args:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"100px"}},[n(o,{...e,onClick:()=>console.log("clicked")},()=>n(r,{},()=>"Активен")),n(o,{...e,active:!1,onClick:()=>console.log("clicked")},()=>n(r,{},()=>"Неактивен")),n(o,{...e,title:"Внимание, Внимание, Внимание, Внимание, Внимание, Внимание, Внимание, Внимание",text:"Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание?",onClick:()=>console.log("clicked")},()=>n(r,{},()=>"Много буков"))])}}),args:{text:"Большое спасибо за внимание?",title:"Внимание"}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VPopConfirm
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
    }, [
    // eslint-disable-next-line no-console
    h(VPopConfirm, {
      ...args,
      onClick: () => console.log("clicked")
    }, () => h(VButton, {}, () => "Нажать"))]);
  }
})`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var a,p,d;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPopConfirm
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
          gap: "20px",
          padding: "100px"
        }
      }, [
      // eslint-disable-next-line no-console
      h(VPopConfirm, {
        ...args,
        onClick: () => console.log("clicked")
      }, () => h(VButton, {}, () => "Активен")),
      // eslint-disable-next-line no-console
      h(VPopConfirm, {
        ...args,
        active: false,
        onClick: () => console.log("clicked")
      }, () => h(VButton, {}, () => "Неактивен")), h(VPopConfirm, {
        ...args,
        title: "Внимание, Внимание, Внимание, Внимание, Внимание, Внимание, Внимание, Внимание",
        text: "Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание? Большое спасибо за внимание?",
        // eslint-disable-next-line no-console
        onClick: () => console.log("clicked")
      }, () => h(VButton, {}, () => "Много буков"))]);
    }
  }),
  args: {
    text: "Большое спасибо за внимание?",
    title: "Внимание"
  }
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["Primary","AllInOne"];export{l as AllInOne,t as Primary,x as __namedExportsOrder,g as default};
