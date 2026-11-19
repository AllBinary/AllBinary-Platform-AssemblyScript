// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Screen
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil

@global export class ABCustomItem extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABCustomItem";
    }
    @lazy static jv_NULL_CUSTOM_ITEM: Object | null = null;
    @lazy static js_NULL_CUSTOM_ITEM: bool = false;
    static get NULL_CUSTOM_ITEM(): Object | null {
        if (!ABCustomItem.js_NULL_CUSTOM_ITEM) {
            ABCustomItem.js_NULL_CUSTOM_ITEM = true;
            ABCustomItem.jv_NULL_CUSTOM_ITEM = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ABCustomItem.jv_NULL_CUSTOM_ITEM;
    }
    static set NULL_CUSTOM_ITEM(value: Object | null) {
        ABCustomItem.js_NULL_CUSTOM_ITEM = true;
        ABCustomItem.jv_NULL_CUSTOM_ITEM = value;
    }
    

    static getNullInstance(): ABCustomItem | null {
        if (ABCustomItem.NULL_CUSTOM_ITEM == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ABCustomItem.NULL_CUSTOM_ITEM = new ABCustomItem().jinit_ABCustomItem_3(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<ABCustomItem | null>(ABCustomItem.NULL_CUSTOM_ITEM);
    }
    

    jinit_ABCustomItem_3(label: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABCustomItem {
        super.jinit_JObject_0();
        return this;
    }
    

    setOwner(owner: Screen | null): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
    }
    

    paintUnselected(graphics: Graphics | null, x: i32, y: i32): void {
    }
    

    isFocusable(): bool {
        return false;
    }
    

    getLabel(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    setLabel(label: string | null): void {
    }
    

    getHeight(): i32 {
        return 0;
    }
    

    setHeight(height: i32): void {
    }
    

    getValue(): f32 {
        return (<f32>0.0);
    }
    

    setValue(value: f32): void {
    }
    

    getMinimumWidth(): i32 {
        return 0;
    }
    

    getMinimumHeight(): i32 {
        return 0;
    }
    

    preMeasurement(graphics: Graphics | null): void {
    }
}

