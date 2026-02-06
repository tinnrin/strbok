import{b as n,h as e,_ as l}from"./iframe-C561pEjZ.js";const f={title:"Components/Collapse",component:n,tags:["autodocs"],argTypes:{}},c=r=>({components:{VCollapse:n},setup(){return{args:r}},render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{...r},{default:()=>"Содержимое"})])}),a=c.bind({});a.args={header:"Заголовок",initialOpen:!0};const t={render:r=>({components:{VCollapse:n},setup(){return{args:r}},render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(n,{initialOpen:!1,size:"small",header:"small"},{default:()=>[e(l,{},()=>"Кнопка"),e(l,{},()=>"Кнопка"),e(l,{},()=>"Кнопка")]}),e(n,{initialOpen:!0,size:"default",header:"default"},{default:()=>"Содержимое"}),e(n,{initialOpen:!0,size:"large",header:"large"},{default:()=>"Содержимое"}),e(n,{initialOpen:!0,ghost:!0,header:"ghost"},{default:()=>"Содержимое"}),e(n,{initialOpen:!0,borderless:!0,header:"borderless"},{default:()=>"Содержимое"})])}),args:{initialOpen:!0,header:"Header"}};var s,i,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VCollapse
  },
  setup() {
    return {
      args
    };
  },
  render: () => h("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, [h(VCollapse, {
    ...args
  }, {
    default: () => "Содержимое"
  })])
})`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VCollapse
    },
    setup() {
      return {
        args
      };
    },
    render: () => h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VCollapse, {
      initialOpen: false,
      size: "small",
      header: "small"
    }, {
      default: () => [h(VButton, {}, () => "Кнопка"), h(VButton, {}, () => "Кнопка"), h(VButton, {}, () => "Кнопка")]
    }), h(VCollapse, {
      initialOpen: true,
      size: "default",
      header: "default"
    }, {
      default: () => "Содержимое"
    }), h(VCollapse, {
      initialOpen: true,
      size: "large",
      header: "large"
    }, {
      default: () => "Содержимое"
    }), h(VCollapse, {
      initialOpen: true,
      ghost: true,
      header: "ghost"
    }, {
      default: () => "Содержимое"
    }), h(VCollapse, {
      initialOpen: true,
      borderless: true,
      header: "borderless"
    }, {
      default: () => "Содержимое"
    })])
  }),
  args: {
    initialOpen: true,
    header: "Header"
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["Primary","AllInOne"];export{t as AllInOne,a as Primary,h as __namedExportsOrder,f as default};
