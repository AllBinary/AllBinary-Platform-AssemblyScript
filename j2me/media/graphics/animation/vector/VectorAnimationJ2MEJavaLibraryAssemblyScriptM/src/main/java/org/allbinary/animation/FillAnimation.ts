// Generated Code Do Not Modify
// package org.allbinary.animation
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor

@global export class FillAnimation extends IndexedAnimation {

    jclassName(): string {
        return "org.allbinary.animation.FillAnimation";
    }
    pixelBuffer: StaticArray<i32> | null = null;
    width: i32 = 0;
    height: i32 = 0;

    jfields_FillAnimation(): void {
    
    
    
    }
    

    jinit_FillAnimation_4(pixelBuffer: StaticArray<i32> | null, width: i32, height: i32, animationBehavior: AnimationBehavior | null): FillAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_FillAnimation();
        this.width = 100;
        this.height = 100;
        this.pixelBuffer = pixelBuffer;
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getBasicColorP() == null || this.getBasicColorP()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    changeBasicColor(basicColor: BasicColor | null): void {
        let changed: bool = false;
        if (this.getChangeBasicColor() == null || this.getChangeBasicColor()!.intValue() != basicColor!.intValue()) {
            changed = true;
        } if (JThrowable.pending !== null) return;
        super.changeBasicColor(basicColor); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAlpha(alpha: i32): void {
        let changed: bool = false;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha); if (JThrowable.pending !== null) return;
        if (changed) {
            this.updateModifiers(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setScale(scaleX: f32, scaleY: f32): void {
    }
    

    setMaxScale(maxScaleX: f32, maxScaleY: f32): void {
    }
    

    updateModifiers(): void {
    }
    

    paint(g: Graphics | null): void {
        g!.drawRGB(this.pixelBuffer, 0, this.width, 0, 0, this.width, this.height, true); if (JThrowable.pending !== null) return;
    }
}

