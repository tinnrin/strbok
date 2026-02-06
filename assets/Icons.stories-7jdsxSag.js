import{a3 as l,h as t,m as x,_ as m,r as f}from"./iframe-C561pEjZ.js";const h=Object.values(l)[0],g={title:"Components/Icons",component:h,tags:["autodocs"],argTypes:{}},y=p=>({components:{},setup(){const n=f("");function r(a){if(navigator.clipboard!=null&&window.isSecureContext)return navigator.clipboard.writeText(a);const e=document.createElement("textarea");return e.value=a,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),new Promise((d,u)=>{document.execCommand("copy")?d():u(),e.remove()})}return{args:p,search:n,copyToClipboard:r}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"20px",overflow:"hidden",maxHeight:"calc(100vh - 30px)"}},[t(x,{modelValue:this.search,"onUpdate:modelValue":n=>{this.search=n}}),t("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",overflow:"auto"}},[Object.entries(l).map(([n,r])=>n.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())?t(m,{onClick:()=>this.copyToClipboard(n),style:{flexDirection:"column",height:"fit-content",paddingBlock:"5px"}},{default:()=>n,icon:()=>t(r,{size:24})}):null)])])}}),o=y.bind({});o.args={};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {},
  setup() {
    const search = ref("");
    function copyToClipboard(textToCopy: string) {
      if (navigator.clipboard != undefined && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy);
      }
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise<void>((res, rej) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, @typescript-eslint/no-deprecated
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
      });
    }
    return {
      args,
      search,
      copyToClipboard
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        overflow: "hidden",
        maxHeight: "calc(100vh - 30px)"
      }
    }, [h(VInput, {
      modelValue: this.search,
      "onUpdate:modelValue": value => {
        this.search = value;
      }
    }), h("div", {
      style: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        overflow: "auto"
      }
    }, [Object.entries(IconsLibrary).map(([name, icon]) => {
      if (!name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) return null;
      return h(VButton, {
        onClick: () => this.copyToClipboard(name),
        style: {
          flexDirection: "column",
          height: "fit-content",
          paddingBlock: "5px"
        }
      }, {
        default: () => name,
        icon: () => h(icon, {
          size: 24
        })
      });
    })])]);
  }
})`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const C=["Primary"];export{o as Primary,C as __namedExportsOrder,g as default};
