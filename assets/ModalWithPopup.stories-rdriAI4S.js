import{a0 as _,A as C,B as b,z as w,M as S,K as p,l as i,h as e,_ as l,ad as D,aj as d,n as u,S as m,j as a,aR as y,s as r,k as h,i as T,ak as $,r as f}from"./iframe-C561pEjZ.js";const v={};function P(n,t){return b(),C("div")}const B=_(v,[["render",P]]);v.__docgenInfo={exportName:"default",displayName:"Empty",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[],sourceFiles:"C:/Users/polina/Documents/JS/bbt/vue-ui/src/tech/Empty.vue"};const V=w({__name:"SelectTech",setup(n){const t=Array.from({length:20},(c,s)=>({label:`Значение ${s}`,value:s}));return(c,s)=>(b(),S(p(i),{"class-name-positioner-content":c.$style.test,options:p(t)},null,8,["class-name-positioner-content","options"]))}}),q="_test_4a2i1_1",A={test:q},N={$style:A},R=_(V,[["__cssModules",N]]);V.__docgenInfo={exportName:"default",displayName:"SelectTech",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[],sourceFiles:"C:/Users/polina/Documents/JS/bbt/vue-ui/src/tech/SelectTech.vue"};const E={title:"Tech/ModalWithPopup",component:B,tags:["autodocs"],argTypes:{}},W=()=>({setup(){const n=f(!1),t=f(!1);return{open:n,open2:t}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(l,{onClick:()=>{this.open=!0}},()=>"Modal"),e(l,{onClick:()=>{this.open2=!0}},()=>"Drawer"),e(D,{header:"title",style:{minWidth:"50%"},modelValue:this.open,"onUpdate:modelValue":n=>{this.open=n}},{content:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(R,{}),e(d,{title:"title",text:"text"},()=>e(l,{},()=>"Активен")),e(u,{triggers:["click"],menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2"},{key:"3",label:"Пункт 3"},{key:"0",divider:!0},{key:"4",onClick:n=>console.log(n),label:e(a,{},()=>"Компонент"),icon:e(m,{size:16})}]},{default:()=>e(l,{},()=>"Dropdown Click")}),e(y,{placeholder:"Поиск",options:Array.from({length:300},(n,t)=>({value:t,label:r(50)}))}),e(h,{text:"Tooltip"},()=>e(a,{ellipsis:!0,fit:!0,style:{maxWidth:"100px"}},()=>"Hover"))])]}),e(T,{header:"title",style:{minWidth:"50%"},modelValue:this.open2,"onUpdate:modelValue":n=>{this.open2=n}},{content:()=>[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",overflow:"auto"}},[e("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minHeight:"2000px",marginTop:"300px"}},[e(i,{options:Array.from({length:20},(n,t)=>({label:`Значение ${t}`,value:t}))},()=>"Выбрать значение"),e(d,{title:"title",text:"text"},()=>e(l,{},()=>"Активен")),e(u,{triggers:["click"],menu:[{key:"1",link:!0,label:e("a",{href:"#test"},["Пункт 1"])},{key:"2",label:"Пункт 2"},{key:"3",label:"Пункт 3"},{key:"0",divider:!0},{key:"4",onClick:n=>console.log(n),label:e(a,{},()=>"Компонент"),icon:e(m,{size:16})}]},{default:()=>e(l,{},()=>"Dropdown Click")}),e(y,{placeholder:"Поиск",options:Array.from({length:300},(n,t)=>({value:t,label:r(50)}))}),e($,{},{default:()=>e(l,{},()=>"Click"),content:()=>e(i,{nested:!0,placeholder:"Поиск",options:Array.from({length:300},(n,t)=>({value:t,label:r(50)})),style:{width:"200px"}})}),e(h,{text:"Tooltip"},()=>e(a,{ellipsis:!0,fit:!0,style:{maxWidth:"100px"}},()=>"Hover"))])])]})])}}),o=W.bind({});o.args={};var g,k,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  setup() {
    const open = ref(false);
    const open2 = ref(false);
    return {
      open,
      open2
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
      onClick: () => {
        this.open = true;
      }
    }, () => "Modal"), h(VButton, {
      onClick: () => {
        this.open2 = true;
      }
    }, () => "Drawer"), h(VModal, {
      header: "title",
      style: {
        minWidth: "50%"
      },
      modelValue: this.open,
      "onUpdate:modelValue": value => {
        this.open = value;
      }
    }, {
      content: () => [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h(SelectTech, {}), h(VPopConfirm, {
        title: "title",
        text: "text"
      }, () => h(VButton, {}, () => "Активен")), h(VDropDown, {
        triggers: ["click"],
        menu: [{
          key: "1",
          link: true,
          label: h("a", {
            href: "#test"
          }, ["Пункт 1"])
        }, {
          key: "2",
          label: "Пункт 2"
        }, {
          key: "3",
          label: "Пункт 3"
        }, {
          key: "0",
          divider: true
        }, {
          key: "4",
          // eslint-disable-next-line no-console
          onClick: event => console.log(event),
          label: h(VText, {}, () => "Компонент"),
          icon: h(VSettingFilled, {
            size: 16
          })
        }]
      }, {
        default: () => h(VButton, {}, () => "Dropdown Click")
      }), h(VSearch, {
        placeholder: "Поиск",
        options: Array.from<unknown, SelectItem>({
          length: 300
        }, (_, i) => ({
          value: i,
          label: randomString(50)
        }))
      }), h(VTooltip, {
        text: "Tooltip"
      }, () => h(VText, {
        ellipsis: true,
        fit: true,
        style: {
          maxWidth: "100px"
        }
      }, () => "Hover"))])]
    }), h(VDrawer, {
      header: "title",
      style: {
        minWidth: "50%"
      },
      modelValue: this.open2,
      "onUpdate:modelValue": value => {
        this.open2 = value;
      }
    }, {
      content: () => [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "auto"
        }
      }, [h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minHeight: "2000px",
          marginTop: "300px"
        }
      }, [h(VSelect, {
        options: Array.from({
          length: 20
        }, (_, i) => ({
          label: \`Значение \${i}\`,
          value: i
        }))
      }, () => "Выбрать значение"), h(VPopConfirm, {
        title: "title",
        text: "text"
      }, () => h(VButton, {}, () => "Активен")), h(VDropDown, {
        triggers: ["click"],
        menu: [{
          key: "1",
          link: true,
          label: h("a", {
            href: "#test"
          }, ["Пункт 1"])
        }, {
          key: "2",
          label: "Пункт 2"
        }, {
          key: "3",
          label: "Пункт 3"
        }, {
          key: "0",
          divider: true
        }, {
          key: "4",
          // eslint-disable-next-line no-console
          onClick: event => console.log(event),
          label: h(VText, {}, () => "Компонент"),
          icon: h(VSettingFilled, {
            size: 16
          })
        }]
      }, {
        default: () => h(VButton, {}, () => "Dropdown Click")
      }), h(VSearch, {
        placeholder: "Поиск",
        options: Array.from<unknown, SelectItem>({
          length: 300
        }, (_, i) => ({
          value: i,
          label: randomString(50)
        }))
      }), h(VPopover, {}, {
        default: () => h(VButton, {}, () => "Click"),
        content: () => h(VSelect, {
          nested: true,
          placeholder: "Поиск",
          options: Array.from<unknown, SelectItem>({
            length: 300
          }, (_, i) => ({
            value: i,
            label: randomString(50)
          })),
          style: {
            width: "200px"
          }
        })
      }), h(VTooltip, {
        text: "Tooltip"
      }, () => h(VText, {
        ellipsis: true,
        fit: true,
        style: {
          maxWidth: "100px"
        }
      }, () => "Hover"))])])]
    })]);
  }
})`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const M=["Primary"];export{o as Primary,M as __namedExportsOrder,E as default};
