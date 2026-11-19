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
// package org.allbinary.game.input
// import javax.microedition.lcdui.Canvas

@global export class InputProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.InputProcessor";
    }
    gameInputStrings: GameInputStrings | null = null;

    jfields_InputProcessor(): void {
    this.gameInputStrings = GameInputStrings.getInstance();
    }

    jinit_InputProcessor_0(): InputProcessor {
        super.jinit_JObject_0();
        this.jfields_InputProcessor();
        return this;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
    }
    

    keyReleasedByDevice(canvas: Canvas | null, keyCode: i32, deviceId: i32): void {
    }
}

