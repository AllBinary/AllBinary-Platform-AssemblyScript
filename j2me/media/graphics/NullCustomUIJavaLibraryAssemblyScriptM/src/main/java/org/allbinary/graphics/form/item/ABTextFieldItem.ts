// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Font
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.visitor.Visitor

@global export class ABTextFieldItem extends ABTextItem {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABTextFieldItem";
    }
    font: Font | null = null;

    jfields_ABTextFieldItem(): void {
    
    }
    

    jinit_ABTextFieldItem_10(canvas: Canvas | null, visitor: Visitor | null, label: string | null, value: string | null, maxSize: i32, layout: i32, altText: string | null, font: Font | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABTextFieldItem {
        super.jinit_ABTextItem_5(label, layout, altText, backgroundBasicColor, foregroundBasicColor);
        this.jfields_ABTextFieldItem();
        this.font = font;
        return this;
    }
    

    getLabel(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    setLabel(label: string | null): void {
    }
    

    getString(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    setString(string: string | null): void {
    }
    

    setFocus(state: bool): void {
    }
    

    getFontHeight(): i32 {
        return this.font!.getHeight();
    }
    

    setBackgroundBasicColorP(basicColor: BasicColor | null): void {
    }
    

    setForegroundBasicColorP(basicColor: BasicColor | null): void {
    }
}

