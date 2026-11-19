// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory

@global export class ABStringComponent extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABStringComponent";
    }
    @lazy static jv_NULL_STRING_COMPONENT: ABStringComponent | null = null;
    @lazy static js_NULL_STRING_COMPONENT: bool = false;
    static get NULL_STRING_COMPONENT(): ABStringComponent | null {
        if (!ABStringComponent.js_NULL_STRING_COMPONENT) {
            ABStringComponent.js_NULL_STRING_COMPONENT = true;
            ABStringComponent.jv_NULL_STRING_COMPONENT = new ABStringComponent().jinit_ABStringComponent_2(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        }
        return ABStringComponent.jv_NULL_STRING_COMPONENT;
    }
    static set NULL_STRING_COMPONENT(value: ABStringComponent | null) {
        ABStringComponent.js_NULL_STRING_COMPONENT = true;
        ABStringComponent.jv_NULL_STRING_COMPONENT = value;
    }
    

    getBackgroundBasicColor(): BasicColor | null {
        return BasicColorFactory.getInstance()!.WHITE;
    }
    

    jinit_ABStringComponent_2(backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABStringComponent {
        super.jinit_JObject_0();
        return this;
    }
    

    getForegroundBasicColor(): BasicColor | null {
        return BasicColorFactory.getInstance()!.WHITE;
    }
    

    setForegroundBasicColor(foregroundBasicColor: BasicColor | null): void {
    }
}

