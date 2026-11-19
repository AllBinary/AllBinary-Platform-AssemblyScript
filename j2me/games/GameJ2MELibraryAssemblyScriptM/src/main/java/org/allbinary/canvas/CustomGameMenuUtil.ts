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
// package org.allbinary.canvas
// import org.allbinary.AppletUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.graphics.displayable.MyCanvas

@global export class CustomGameMenuUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.CustomGameMenuUtil";
    }

    jinit_CustomGameMenuUtil_0(): CustomGameMenuUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static add(canvas: MyCanvas | null): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (AppletUtil.isAppletLoader(canvas)) {
        } else if (J2MEUtil.isHTML()) {
        } else {
            canvas!.addCommand(gameCommandsFactory!.EXIT_COMMAND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

