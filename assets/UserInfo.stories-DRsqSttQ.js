import{b6 as e,h as r}from"./iframe-C561pEjZ.js";const d={title:"Components/UserInfo",component:e,tags:["autodocs"],argTypes:{}},c=n=>({components:{VUserInfo:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n})])}}),s=c.bind({});s.args={name:"Full Name",username:"username"};const a={render:n=>({components:{VUserInfo:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n}),r(e,{...n,size:"large"}),r(e,{...n,size:"small"})])}}),args:{name:"Full Name",username:"username"}};var o,t,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    VUserInfo
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
    }, [h(VUserInfo, {
      ...args
    })]);
  }
})`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VUserInfo
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
      }, [h(VUserInfo, {
        ...args
      }), h(VUserInfo, {
        ...args,
        size: "large"
      }), h(VUserInfo, {
        ...args,
        size: "small"
      })]);
    }
  }),
  args: {
    name: "Full Name",
    username: "username"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["Primary","AllInOne"];export{a as AllInOne,s as Primary,f as __namedExportsOrder,d as default};
