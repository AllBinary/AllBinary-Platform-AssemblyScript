/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.layer.AllBinaryGameLayerManager

@global export class NullAllBinaryGameCanvas extends JObject implements AllBinaryGameCanvasInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullAllBinaryGameCanvas";
    }
    @lazy static jv_NULL_ALLBINARY_GAME_CANVAS: NullAllBinaryGameCanvas | null = null;
    @lazy static js_NULL_ALLBINARY_GAME_CANVAS: bool = false;
    static get NULL_ALLBINARY_GAME_CANVAS(): NullAllBinaryGameCanvas | null {
        if (!NullAllBinaryGameCanvas.js_NULL_ALLBINARY_GAME_CANVAS) {
            NullAllBinaryGameCanvas.js_NULL_ALLBINARY_GAME_CANVAS = true;
            NullAllBinaryGameCanvas.jv_NULL_ALLBINARY_GAME_CANVAS = new NullAllBinaryGameCanvas().jinit_NullAllBinaryGameCanvas_0();
        }
        return NullAllBinaryGameCanvas.jv_NULL_ALLBINARY_GAME_CANVAS;
    }
    static set NULL_ALLBINARY_GAME_CANVAS(value: NullAllBinaryGameCanvas | null) {
        NullAllBinaryGameCanvas.js_NULL_ALLBINARY_GAME_CANVAS = true;
        NullAllBinaryGameCanvas.jv_NULL_ALLBINARY_GAME_CANVAS = value;
    }

    jinit_NullAllBinaryGameCanvas_0(): NullAllBinaryGameCanvas {
        super.jinit_JObject_0();
        return this;
    }
    

    getLayerManager(): AllBinaryGameLayerManager | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    addCommand(cmd: Command | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    getHeight(): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    getWidth(): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    removeCommand(cmd: Command | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    setCommandListener(l: CommandListener | null): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
}

