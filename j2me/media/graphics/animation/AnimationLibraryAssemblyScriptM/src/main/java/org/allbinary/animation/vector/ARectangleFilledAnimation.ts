// Generated Code Do Not Modify
// package org.allbinary.animation.vector
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColorFactory

@global export class ARectangleFilledAnimation extends RectangleFilledAnimation {

    jclassName(): string {
        return "org.allbinary.animation.vector.ARectangleFilledAnimation";
    }
    x: i32 = 0;
    y: i32 = 0;

    jfields_ARectangleFilledAnimation(): void {
    this.x = 0;
    this.y = 0;
    }
    

    jinit_ARectangleFilledAnimation_0(): ARectangleFilledAnimation {
        super.jinit_RectangleFilledAnimation_3(0, 0, BasicColorFactory.getInstance()!.BLACK);
        this.jfields_ARectangleFilledAnimation();
        return this;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, unusedX: i32, unusedY: i32): void {
        super.paintXY(graphics, this.x, this.y); if (JThrowable.pending !== null) return;
    }
}

