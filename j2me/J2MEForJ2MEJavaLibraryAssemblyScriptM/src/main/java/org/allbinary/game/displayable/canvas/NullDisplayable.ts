// Generated Code Do Not Modify
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Graphics
// import org.allbinary.canvas.BaseGameStatistics
// import org.allbinary.canvas.GameStatisticsFactory

//J2MEForJ2ME
@global export class NullDisplayable extends Canvas {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullDisplayable";
    }
    @lazy static jv_SINGLETON: NullDisplayable | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NullDisplayable | null {
        if (!NullDisplayable.js_SINGLETON) {
            NullDisplayable.js_SINGLETON = true;
            NullDisplayable.jv_SINGLETON = new NullDisplayable().jinit_NullDisplayable_0();
        }
        return NullDisplayable.jv_SINGLETON;
    }
    static set SINGLETON(value: NullDisplayable | null) {
        NullDisplayable.js_SINGLETON = true;
        NullDisplayable.jv_SINGLETON = value;
    }
    baseGameStatistics: BaseGameStatistics | null = null;

    jfields_NullDisplayable(): void {
    this.baseGameStatistics = GameStatisticsFactory.getInstance();
    }
    

    static getInstance(): NullDisplayable | null {
        return NullDisplayable.SINGLETON;
    }
    

    jinit_NullDisplayable_0(): NullDisplayable {
        super.jinit_Canvas_0();
        this.jfields_NullDisplayable();
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.baseGameStatistics!.nextRefresh(); if (JThrowable.pending !== null) return;
    }
}

