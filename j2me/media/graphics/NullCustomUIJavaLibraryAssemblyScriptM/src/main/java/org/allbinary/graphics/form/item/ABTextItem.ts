// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor

@global export class ABTextItem extends CustomCustomItem implements ABCustomItemInterface {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABTextItem";
    }
    

    jinit_ABTextItem_5(label: string | null, layout: i32, altText: string | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABTextItem {
        super.jinit_CustomCustomItem_3(label, backgroundBasicColor, foregroundBasicColor);
        return this;
    }
    

    keyPressed(keyCode: i32): void {
    }
    

    paintUnselected(graphics: Graphics | null, x: i32, y: i32): void {
    }
    

    getLabelStringComponent(): ABStringComponent | null {
        return ABStringComponent.NULL_STRING_COMPONENT;
    }
    

    getMinimumWidth(): i32 {
        return super.getMinimumWidth();
    }
    

    getMinimumHeight(): i32 {
        return super.getMinimumHeight();
    }
    

    getLabel(): string | null {
        return super.getLabel();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        super.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
}

