// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor

@global export class CustomCustomItem extends ABCustomItem implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.CustomCustomItem";
    }
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;

    jfields_CustomCustomItem(): void {
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    jinit_CustomCustomItem_3(label: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CustomCustomItem {
        super.jinit_ABCustomItem_3(label, backgroundBasicColor, foregroundBasicColor);
        this.jfields_CustomCustomItem();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
    }
}

