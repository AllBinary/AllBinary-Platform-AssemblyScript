// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullImage
// import org.allbinary.graphics.color.BasicColor

@global export class ABCustomImageItem extends ABCustomItem {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABCustomImageItem";
    }
    yOffset: i32 = 0;

    jfields_ABCustomImageItem(): void {
    this.yOffset = 0;
    }
    

    jinit_ABCustomImageItem_6(label: string | null, image: Image | null, layout: i32, altText: string | null, basicColor: BasicColor | null, yOffset: i32): ABCustomImageItem {
        super.jinit_ABCustomItem_3(label, basicColor, basicColor);
        this.jfields_ABCustomImageItem();
        return this;
    }
    

    getImage(): Image | null {
        return NullImage.NULL_IMAGE;
    }
}

