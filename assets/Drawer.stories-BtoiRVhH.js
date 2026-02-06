import{i as e,j as l,_ as n,h as t,r as g,k as B,l as D,m as y,u as d}from"./iframe-C561pEjZ.js";const v={title:"Components/Drawer",component:e,tags:["autodocs"],argTypes:{}},T=a=>({components:{VDrawer:e},setup(){const o=g(!1);function c(){o.value=!o.value}return{args:a,toggleDrawer:c,open:o}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[t(n,{onClick:this.toggleDrawer},{default:()=>"Открыть"}),t(e,{...a,modelValue:this.open,"onUpdate:modelValue":o=>this.open=o})])}}),s=T.bind({});s.args={header:"Заголовок"};const r={render:()=>({components:{VButton:n,VDrawer:e,VText:l},setup(){const a=g(0),o=t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[t(n,{onClick:()=>{a.value=1}},()=>"SWITCH"),t(D,{options:[],autofocus:!0,placeholder:"TextArea"}),t(l,{},{default:()=>"Содержимое модального окна"}),t(l,{},{default:()=>"Содержимое модального окна"}),t(n,{},{default:()=>"Содержимое модального окна"}),t(n,{},{default:()=>"Содержимое модального окна"})]}),c=t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},{default:()=>[t(n,{onClick:()=>{a.value=0}},()=>"SWITCH"),t(y,{autofocus:!0,placeholder:"Input"}),t(l,{},{default:()=>"Содержимое модального окна"}),t(l,{},{default:()=>"Содержимое модального окна"}),t(n,{},{default:()=>"Содержимое модального окна"}),t(n,{},{default:()=>"Содержимое модального окна"})]}),x=d("modal-root"),V=d("modal-root-2");return{content:o,content2:c,flag:a,modalRoot:x,modalRoot2:V}},render(){return t("div",{id:"modal-root",ref:"modal-root",style:{display:"flex",justifyContent:"space-between",height:"calc(100vh - 50px)",overflow:"hidden"}},[t("div",{ref:"modal-root-2",style:{display:"flex",flexDirection:"column",gap:"20px",flex:1}},[t(e,{autofocus:!1,header:"Right Modal"},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Right Modal")}),t(e,{header:"Bottom Modal",placement:"bottom"},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Bottom Modal")}),t(e,{header:"Left Modal",placement:"left"},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Left Modal")}),t(e,{header:"Top Modal",placement:"top"},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Top Modal")}),t(e,{header:"Without Mask",mask:!1},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Without Mask")}),t(e,{header:"Tooltip",mask:!1},{content:()=>this.flag?this.content2:this.content,default:()=>t(B,{text:"Drawer"},()=>t(n,{},()=>"Tooltip"))}),t(e,{},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Custom Header"),"custom-header":()=>"Custom Header"}),t(e,{header:"Block right",block:!0,target:this.modalRoot},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Block right")}),t(e,{header:"Block bottom",block:!0,target:this.modalRoot2,placement:"bottom"},{content:()=>this.flag?this.content2:this.content,default:()=>t(n,{},()=>"Block bottom")}),t("div",{style:{display:"flex",flex:1}})]),t("span",{},"right content")])}}),args:{}};var i,h,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    VDrawer
  },
  setup() {
    const open = ref(false);
    function toggleDrawer() {
      open.value = !open.value;
    }
    return {
      args,
      toggleDrawer,
      open
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VButton, {
      onClick: this.toggleDrawer
    }, {
      default: () => "Открыть"
    }), h(VDrawer, {
      ...args,
      modelValue: this.open,
      "onUpdate:modelValue": value => this.open = value
    })]);
  }
})`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,p,m;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VButton,
      VDrawer,
      VText
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
      const modalRoot = useTemplateRef("modal-root");
      const modalRoot2 = useTemplateRef("modal-root-2");
      return {
        content,
        content2,
        flag,
        modalRoot,
        modalRoot2
      };
    },
    render() {
      return h("div", {
        id: "modal-root",
        ref: "modal-root",
        style: {
          display: "flex",
          justifyContent: "space-between",
          height: "calc(100vh - 50px)",
          overflow: "hidden"
        }
      }, [h("div", {
        ref: "modal-root-2",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: 1
        }
      }, [h(VDrawer, {
        autofocus: false,
        header: "Right Modal"
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Right Modal")
      }), h(VDrawer, {
        header: "Bottom Modal",
        placement: "bottom"
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Bottom Modal")
      }), h(VDrawer, {
        header: "Left Modal",
        placement: "left"
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Left Modal")
      }), h(VDrawer, {
        header: "Top Modal",
        placement: "top"
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Top Modal")
      }), h(VDrawer, {
        header: "Without Mask",
        mask: false
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Without Mask")
      }), h(VDrawer, {
        header: "Tooltip",
        mask: false
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VTooltip, {
          text: "Drawer"
        }, () => h(VButton, {}, () => "Tooltip"))
      }), h(VDrawer, {}, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Custom Header"),
        "custom-header": () => "Custom Header"
      }), h(VDrawer, {
        header: "Block right",
        block: true,
        target: this.modalRoot as HTMLElement | undefined
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Block right")
      }), h(VDrawer, {
        header: "Block bottom",
        block: true,
        target: this.modalRoot2 as HTMLElement | undefined,
        placement: "bottom"
      }, {
        content: () => this.flag ? this.content2 : this.content,
        default: () => h(VButton, {}, () => "Block bottom")
      }), h("div", {
        style: {
          display: "flex",
          flex: 1
        }
      })]), h("span", {}, "right content")]);
    }
  }),
  args: {}
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Primary","AllInOne"];export{r as AllInOne,s as Primary,w as __namedExportsOrder,v as default};
