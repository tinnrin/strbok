import{b4 as e,h as r}from"./iframe-C561pEjZ.js";const u={title:"Components/UserAvatar",component:e,tags:["autodocs"],argTypes:{}},c=n=>({components:{VUserAvatar:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n},()=>"Выбрать значение")])}}),a=c.bind({});a.args={name:"Full Name",avatar:void 0};const s={render:n=>({components:{VUserAvatar:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n}),r(e,{...n,size:"large"}),r(e,{...n,size:"small"})])}}),args:{name:"Full Name",avatar:void 0}};var t,o,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    VUserAvatar
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
    }, [h(VUserAvatar, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,m,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VUserAvatar
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
      }, [h(VUserAvatar, {
        ...args
      }), h(VUserAvatar, {
        ...args,
        size: "large"
      }), h(VUserAvatar, {
        ...args,
        size: "small"
      })]);
    }
  }),
  args: {
    name: "Full Name",
    avatar: undefined
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const v=["Primary","AllInOne"];export{s as AllInOne,a as Primary,v as __namedExportsOrder,u as default};
