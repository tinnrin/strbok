import{ad as i,h as n,_ as t,r as c,l as h,j as g,m,ae as T}from"./iframe-C561pEjZ.js";const V={title:"Components/Modal",component:i,tags:["autodocs"],argTypes:{}},x=e=>({components:{VModal:i},setup(){const o=c(0),p=n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[n(t,{onClick:()=>{o.value=1}},()=>"SWITCH"),n(h,{options:[],autofocus:!0,placeholder:"TextArea"}),n(g,{},{default:()=>"Содержимое модального окна"}),n(g,{},{default:()=>"Содержимое модального окна"}),n(t,{},{default:()=>"Содержимое модального окна"}),n(t,{},{default:()=>"Содержимое модального окна"})]}),f=n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[n(t,{onClick:()=>{o.value=0}},()=>"SWITCH"),n(m,{autofocus:!0,placeholder:"Input"}),n(g,{},{default:()=>"Содержимое модального окна"}),n(g,{},{default:()=>"Содержимое модального окна"}),n(t,{},{default:()=>"Содержимое модального окна"}),n(t,{},{default:()=>"Содержимое модального окна"})]});return{args:e,flag:o,content:p,content2:f}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(i,{...e,style:{minWidth:"50%"}},{content:()=>this.flag?this.content2:this.content,default:()=>n(t,{},()=>"Default")})])}}),B=x.bind({});B.args={header:"Title"};const C={render:e=>({components:{VModal:i},setup(){const o=c(!1);return{args:e,open4:o}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",transform:"translate(0, 0)",width:"calc(100vw - 50px)",height:"calc(100vh - 50px)"}},[n(i,{...e,style:{minWidth:"80%"}},{content:()=>"Контент",default:()=>n(t,{},()=>"Default")}),n(i,{...e,style:{minWidth:"50%"}},{default:()=>n(t,{},()=>"Custom"),content:()=>"Контент",header:()=>n("div",{style:{display:"flex",gap:"10px",alignItems:"center"}},[n(T,{size:14}),n(g,{},()=>"Кастомный хедер")]),footer:()=>n(t,{onClick:()=>{this.open2=!1},type:"dashed"},()=>"Кастомный футер")}),n(i,{...e,header:"Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title",style:{minWidth:"50%",maxWidth:"50%"}},{content:()=>"Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content ",default:()=>n(t,{},()=>"Big")}),n(t,{onClick:()=>{this.open4=!0},style:{position:"absolute",inset:"auto 0 0 auto"}},()=>"Default"),n(i,{...e,style:{minWidth:"50%"},modelValue:this.open4,"onUpdate:modelValue":o=>{this.open4=o}},{content:()=>"Контент"})])}}),args:{header:"Заголовок"}};var l,a,s;B.parameters={...B.parameters,docs:{...(l=B.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    VModal
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
      }), h(VText, {}, {
        default: () => "Содержимое модального окна"
      }), h(VText, {}, {
        default: () => "Содержимое модального окна"
      }), h(VButton, {}, {
        default: () => "Содержимое модального окна"
      }), h(VButton, {}, {
        default: () => "Содержимое модального окна"
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
      }), h(VText, {}, {
        default: () => "Содержимое модального окна"
      }), h(VText, {}, {
        default: () => "Содержимое модального окна"
      }), h(VButton, {}, {
        default: () => "Содержимое модального окна"
      }), h(VButton, {}, {
        default: () => "Содержимое модального окна"
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
    }, [h(VModal, {
      ...args,
      style: {
        minWidth: "50%"
      }
    }, {
      content: () => this.flag ? this.content2 : this.content,
      default: () => h(VButton, {}, () => "Default")
    })]);
  }
})`,...(s=(a=B.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,r,u;C.parameters={...C.parameters,docs:{...(d=C.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VModal
    },
    setup() {
      const open4 = ref(false);
      return {
        args,
        open4
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          transform: "translate(0, 0)",
          width: "calc(100vw - 50px)",
          height: "calc(100vh - 50px)"
        }
      }, [h(VModal, {
        ...args,
        style: {
          minWidth: "80%"
        }
      }, {
        content: () => "Контент",
        default: () => h(VButton, {}, () => "Default")
      }), h(VModal, {
        ...args,
        style: {
          minWidth: "50%"
        }
      }, {
        default: () => h(VButton, {}, () => "Custom"),
        content: () => "Контент",
        header: () => h("div", {
          style: {
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }
        }, [h(VSettingOutlined, {
          size: 14
        }), h(VText, {}, () => "Кастомный хедер")]),
        footer: () => h(VButton, {
          onClick: () => {
            this.open2 = false;
          },
          type: "dashed"
        }, () => "Кастомный футер")
      }), h(VModal, {
        ...args,
        header: "Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title Big Title",
        style: {
          minWidth: "50%",
          maxWidth: "50%"
        }
      }, {
        content: () => "Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big ContentBig Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content Big Content ",
        default: () => h(VButton, {}, () => "Big")
      }), h(VButton, {
        onClick: () => {
          this.open4 = true;
        },
        style: {
          position: "absolute",
          inset: "auto 0 0 auto"
        }
      }, () => "Default"), h(VModal, {
        ...args,
        style: {
          minWidth: "50%"
        },
        modelValue: this.open4,
        "onUpdate:modelValue": value => {
          this.open4 = value;
        }
      }, {
        content: () => "Контент"
      })]);
    }
  }),
  args: {
    header: "Заголовок"
  }
}`,...(u=(r=C.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const v=["Primary","AllInOne"];export{C as AllInOne,B as Primary,v as __namedExportsOrder,V as default};
