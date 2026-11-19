/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *   
 */
// Generated Code Do Not Modify
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Canvas
// import org.allbinary.string.CommonPhoneStrings

@global export class CanvasUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.CanvasUtil";
    }
    

    jinit_CanvasUtil_0(): CanvasUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getKeyName(key: i32): string | null {
        let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return null;
        if (key == Canvas.UP) {
            return commonPhoneStrings!.UP;
        } else if (key == Canvas.DOWN) {
            return commonPhoneStrings!.DOWN;
        } else if (key == Canvas.RIGHT) {
            return commonPhoneStrings!.RIGHT;
        } else if (key == Canvas.LEFT) {
            return commonPhoneStrings!.LEFT;
        } else if (key == Canvas.FIRE) {
            return commonPhoneStrings!.FIRE;
        }
        return "UNKNOWN KEY";
    }
}

