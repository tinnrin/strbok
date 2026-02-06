import{_ as e,h as n,S as l}from"./iframe-C561pEjZ.js";const g={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{}},f=a=>({components:{VButton:e},setup(){return{args:a}},render:()=>n(e,{...a},{default:()=>"Кнопка"})}),t=f.bind({});t.args={type:"primary"};const d={render:a=>({components:{VButton:e},setup(){function y(){console.log("click")}return{args:a,onClick:y}},render:()=>n("div",{style:{display:"flex",gap:"20px"}},[n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Type"),n(e,{type:"default"},{default:()=>"Default"}),n(e,{type:"dashed"},{default:()=>"Dashed"}),n(e,{type:"primary"},{default:()=>"Primary"}),n(e,{type:"text"},{default:()=>"Text"}),n(e,{type:"link"},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",background:"#272727FF",padding:"10px"}},[n("span",{style:{marginBottom:"10px",color:"#ffffff"}},"Ghost"),n(e,{type:"default",ghost:!0},{default:()=>"Default"}),n(e,{type:"dashed",ghost:!0},{default:()=>"Dashed"}),n(e,{type:"primary",ghost:!0},{default:()=>"Primary"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Loading"),n(e,{type:"default",loading:!0,iconPosition:"right"},{default:()=>"Default"}),n(e,{type:"dashed",loading:!0},{default:()=>"Dashed"}),n(e,{type:"primary",loading:!0},{default:()=>"Primary"}),n(e,{type:"text",loading:!0},{default:()=>"Text"}),n(e,{type:"link",loading:!0},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Small"),n(e,{type:"default",size:"small"},{default:()=>"Default"}),n(e,{type:"dashed",size:"small"},{default:()=>"Dashed"}),n(e,{type:"primary",size:"small"},{default:()=>"Primary"}),n(e,{type:"text",size:"small"},{default:()=>"Text"}),n(e,{type:"link",size:"small"},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Large"),n(e,{type:"default",size:"large"},{default:()=>"Default"}),n(e,{type:"dashed",size:"large"},{default:()=>"Dashed"}),n(e,{type:"primary",size:"large"},{default:()=>"Primary"}),n(e,{type:"text",size:"large"},{default:()=>"Text"}),n(e,{type:"link",size:"large"},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Danger"),n(e,{type:"default",danger:!0},{default:()=>"Default"}),n(e,{type:"dashed",danger:!0},{default:()=>"Dashed"}),n(e,{type:"primary",danger:!0},{default:()=>"Primary"}),n(e,{type:"text",danger:!0},{default:()=>"Text"}),n(e,{type:"link",danger:!0},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Disabled"),n(e,{type:"default",disabled:!0},{default:()=>"Default"}),n(e,{type:"dashed",disabled:!0},{default:()=>"Dashed"}),n(e,{type:"primary",disabled:!0},{default:()=>"Primary"}),n(e,{type:"text",disabled:!0},{default:()=>"Text"}),n(e,{type:"link",disabled:!0},{default:()=>"Link"})]),n("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"}},[n("span",{style:{marginBottom:"10px"}},"Shape"),n(e,{type:"default",shape:"round"},{default:()=>"Default"}),n(e,{type:"dashed",shape:"round"},{default:()=>"Dashed",icon:()=>n(l,{size:14})}),n(e,{type:"dashed",shape:"default",iconPosition:"right"},{default:()=>"Dashed",icon:()=>n(l,{size:14})}),n(e,{type:"primary",shape:"circle"},{icon:()=>n(l,{size:14})}),n(e,{type:"primary",shape:"default"},{icon:()=>n(l,{size:14})})])])}),args:{}};var i,p,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    VButton
  },
  setup() {
    return {
      args
    };
  },
  render: () => h(VButton, {
    ...args
  }, {
    default: () => "Кнопка"
  })
})`,...(r=(p=t.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var u,s,o;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VButton
    },
    setup() {
      function onClick() {
        // eslint-disable-next-line no-console
        console.log("click");
      }
      return {
        args,
        onClick
      };
    },
    render: () => h("div", {
      style: {
        display: "flex",
        gap: "20px"
      }
    }, [h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Type"), h(VButton, {
      type: "default"
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed"
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary"
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text"
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link"
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#272727FF",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px",
        color: "#ffffff"
      }
    }, "Ghost"), h(VButton, {
      type: "default",
      ghost: true
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      ghost: true
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      ghost: true
    }, {
      default: () => "Primary"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Loading"), h(VButton, {
      type: "default",
      loading: true,
      iconPosition: "right"
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      loading: true
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      loading: true
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text",
      loading: true
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link",
      loading: true
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Small"), h(VButton, {
      type: "default",
      size: "small"
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      size: "small"
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      size: "small"
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text",
      size: "small"
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link",
      size: "small"
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Large"), h(VButton, {
      type: "default",
      size: "large"
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      size: "large"
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      size: "large"
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text",
      size: "large"
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link",
      size: "large"
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Danger"), h(VButton, {
      type: "default",
      danger: true
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      danger: true
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      danger: true
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text",
      danger: true
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link",
      danger: true
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Disabled"), h(VButton, {
      type: "default",
      disabled: true
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      disabled: true
    }, {
      default: () => "Dashed"
    }), h(VButton, {
      type: "primary",
      disabled: true
    }, {
      default: () => "Primary"
    }), h(VButton, {
      type: "text",
      disabled: true
    }, {
      default: () => "Text"
    }), h(VButton, {
      type: "link",
      disabled: true
    }, {
      default: () => "Link"
    })]), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }
    }, [h("span", {
      style: {
        marginBottom: "10px"
      }
    }, "Shape"), h(VButton, {
      type: "default",
      shape: "round"
    }, {
      default: () => "Default"
    }), h(VButton, {
      type: "dashed",
      shape: "round"
    }, {
      default: () => "Dashed",
      icon: () => h(VSettingFilled, {
        size: 14
      })
    }), h(VButton, {
      type: "dashed",
      shape: "default",
      iconPosition: "right"
    }, {
      default: () => "Dashed",
      icon: () => h(VSettingFilled, {
        size: 14
      })
    }), h(VButton, {
      type: "primary",
      shape: "circle"
    }, {
      icon: () => h(VSettingFilled, {
        size: 14
      })
    }), h(VButton, {
      type: "primary",
      shape: "default"
    }, {
      icon: () => h(VSettingFilled, {
        size: 14
      })
    })])])
  }),
  args: {}
}`,...(o=(s=d.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const m=["Primary","AllInOne"];export{d as AllInOne,t as Primary,m as __namedExportsOrder,g as default};
