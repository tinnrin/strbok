import{al as t,h as n,j as r,r as I,_ as o,l as P,m as T,g as m}from"./iframe-C561pEjZ.js";const k={title:"Components/Popper",component:t,tags:["autodocs"],argTypes:{}},C=e=>({components:{VPopper:t},setup(){const a=I(0),y=n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[n(o,{onClick:()=>{a.value=1}},()=>"SWITCH"),n(P,{options:[],autofocus:!0,placeholder:"TextArea"})]}),V=n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[n(o,{onClick:()=>{a.value=0}},()=>"SWITCH"),n(T,{autofocus:!0,placeholder:"Input"})]});return{args:e,flag:a,content:y,content2:V}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(t,{...e},{default:()=>n(r,{fit:!0,ellipsis:!0},()=>"Текст для поппера"),content:()=>this.flag?this.content2:this.content})])}}),i=C.bind({});i.args={disabled:!1};const s={render:e=>({components:{VPopper:t},setup(){const a=[n(r,{},()=>"Пункт 1"),n(r,{},()=>"Пункт 2"),n(r,{},()=>"Пункт 3"),n(m,{}),n(r,{},()=>"Пункт 4")];return{args:e,contentInteractive:a}},render(){return n("div",{style:{display:"flex",gap:"20px",flexDirection:"column",border:"1px solid var(--ksd-border-color)",padding:"var(--ksd-padding",height:"100%",overflow:"auto"}},[n("div",{display:"flex",gap:"20px",flexDirection:"column"},[n("div",{style:{display:"flex",height:"400px",minHeight:"400px"}},["Контент"]),n(t,{...e,triggers:["click"]},{default:()=>n(o,{},()=>"Click"),content:()=>this.contentInteractive}),n("div",{style:{display:"flex",height:"400px",minHeight:"400px"}},["Контент"])])])}}),args:{}},c={render:e=>({components:{VPopper:t},setup(){const a=[n(r,{},()=>"Пункт 1"),n(r,{},()=>"Пункт 2"),n(r,{},()=>"Пункт 3"),n(m,{}),n(r,{},()=>"Пункт 4")];return{args:e,contentInteractive:a}},render(){return n("div",{style:{display:"flex",gap:"20px"}},[n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(t,{...e,triggers:["hover"]},{default:()=>n(o,{},()=>"Popper Hover"),content:()=>this.contentInteractive}),n(t,{...e,triggers:["contextMenu"]},{default:()=>n(o,{},()=>"Popper Context Menu"),content:()=>this.contentInteractive}),n(t,{...e},{default:()=>n(o,{},()=>"Popper Click"),content:()=>this.contentInteractive}),n(t,{...e,fit:!1},{default:()=>n(o,{},()=>"Popper no fit"),content:()=>this.contentInteractive}),n(t,{...e,arrow:!0,closeByScroll:!0},{default:()=>n(o,{},()=>"Popper arrow"),content:()=>this.contentInteractive})])])}}),args:{}};var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    VPopper
  },
  setup() {
    const flag = ref(0);
    const content = h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, {
      default: () => [h(VButton, {
        onClick: () => {
          flag.value = 1;
        }
      }, () => "SWITCH"), h(VSelect, {
        options: [],
        autofocus: true,
        placeholder: "TextArea"
      })]
    });
    const content2 = h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, {
      default: () => [h(VButton, {
        onClick: () => {
          flag.value = 0;
        }
      }, () => "SWITCH"), h(VInput, {
        autofocus: true,
        placeholder: "Input"
      })]
    });
    return {
      args,
      flag,
      content,
      content2
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VPopper, {
      ...args
    }, {
      default: () => h(VText, {
        fit: true,
        ellipsis: true
      }, () => "Текст для поппера"),
      content: () => this.flag ? this.content2 : this.content
    })]);
  }
})`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPopper
    },
    setup() {
      const contentInteractive = [h(VText, {}, () => "Пункт 1"), h(VText, {}, () => "Пункт 2"), h(VText, {}, () => "Пункт 3"), h(VDivider, {}), h(VText, {}, () => "Пункт 4")];
      return {
        args,
        contentInteractive
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          border: "1px solid var(--ksd-border-color)",
          padding: "var(--ksd-padding",
          height: "100%",
          overflow: "auto"
        }
      }, [h("div", {
        display: "flex",
        gap: "20px",
        flexDirection: "column"
      }, [h("div", {
        style: {
          display: "flex",
          height: "400px",
          minHeight: "400px"
        }
      }, ["Контент"]), h(VPopper, {
        ...args,
        triggers: ["click"]
      }, {
        default: () => h(VButton, {}, () => "Click"),
        content: () => this.contentInteractive
      }), h("div", {
        style: {
          display: "flex",
          height: "400px",
          minHeight: "400px"
        }
      }, ["Контент"])])]);
    }
  }),
  args: {}
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,g,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPopper
    },
    setup() {
      const contentInteractive = [h(VText, {}, () => "Пункт 1"), h(VText, {}, () => "Пункт 2"), h(VText, {}, () => "Пункт 3"), h(VDivider, {}), h(VText, {}, () => "Пункт 4")];
      return {
        args,
        contentInteractive
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          gap: "20px"
        }
      }, [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(VPopper, {
        ...args,
        triggers: ["hover"]
      }, {
        default: () => h(VButton, {}, () => "Popper Hover"),
        content: () => this.contentInteractive
      }), h(VPopper, {
        ...args,
        triggers: ["contextMenu"]
      }, {
        default: () => h(VButton, {}, () => "Popper Context Menu"),
        content: () => this.contentInteractive
      }), h(VPopper, {
        ...args
      }, {
        default: () => h(VButton, {}, () => "Popper Click"),
        content: () => this.contentInteractive
      }), h(VPopper, {
        ...args,
        fit: false
      }, {
        default: () => h(VButton, {}, () => "Popper no fit"),
        content: () => this.contentInteractive
      }), h(VPopper, {
        ...args,
        arrow: true,
        closeByScroll: true
      }, {
        default: () => h(VButton, {}, () => "Popper arrow"),
        content: () => this.contentInteractive
      })])]);
    }
  }),
  args: {}
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const D=["Primary","Scroll","AllInOne"];export{c as AllInOne,i as Primary,s as Scroll,D as __namedExportsOrder,k as default};
