// Generated Code Do Not Modify
// package org.allbinary.graphics.form
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class ABCustomForm extends CustomScreen {

    jclassName(): string {
        return "org.allbinary.graphics.form.ABCustomForm";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;

    jfields_ABCustomForm(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    }
    

    jinit_ABCustomForm_4(title: string | null, items: StaticArray<ABCustomItem | null> | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABCustomForm {
        super.jinit_CustomScreen_0();
        this.jfields_ABCustomForm();
        return this;
    }
    

    getAllitems(): StaticArray<ABCustomItem | null> | null {
        return changetype<StaticArray<ABCustomItem | null> | null>(new StaticArray<ABCustomItem | null>(0));
    }
    

    size(): i32 {
        return 0;
    }
    

    setSelectedIndex(index: i32): void {
    }
    

    getSelectedIndex(): i32 {
        return 0;
    }
    

    deleteAll(): void {
    }
    

    delete_(itemNum: i32): void {
    }
    

    append(item: ABCustomItem | null): i32 {
        return -1;
    }
    

    insert(itemNum: i32, item: ABCustomItem | null): void {
    }
    

    set(itemNum: i32, item: ABCustomItem | null): void {
    }
    

    get(itemNum: i32): ABCustomItem | null {
        return ABCustomItem.getNullInstance();
    }
    

    getWidth(): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    getTitle(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
}

