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
// import org.allbinary.game.input.event.DownGameKeyEventHandler
// import org.allbinary.game.input.event.UpGameKeyEventHandler

@global export class GameEventHandlerUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameEventHandlerUtil";
    }

    jinit_GameEventHandlerUtil_0(): GameEventHandlerUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static removeAllListeners(): void {
        UpGameKeyEventHandler.getInstance()!.removeAllListeners(); if (JThrowable.pending !== null) return;
        DownGameKeyEventHandler.getInstance()!.removeAllListeners(); if (JThrowable.pending !== null) return;
    }
}

