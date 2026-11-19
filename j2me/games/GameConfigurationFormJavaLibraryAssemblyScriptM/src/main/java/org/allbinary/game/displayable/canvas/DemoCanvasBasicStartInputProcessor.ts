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
// import javax.microedition.lcdui.NullCanvas
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.input.GameInputStrings
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList

@global export class DemoCanvasBasicStartInputProcessor extends BasicMenuInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoCanvasBasicStartInputProcessor";
    }
    

    jinit_DemoCanvasBasicStartInputProcessor_2(gameKeyEventList: BasicArrayList | null, gameCanvas: RunnableCanvas | null): DemoCanvasBasicStartInputProcessor {
        super.jinit_BasicMenuInputProcessor_3(gameKeyEventList, -1, gameCanvas);
        return this;
    }
    

    processInputList(): i32 {
        let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) return 0;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return 0;
        let gameKeyEvent: GameKeyEvent | null = null;
        for (let index: i32 = 0; index < size; index++) {
            gameKeyEvent = changetype<GameKeyEvent | null>(list!.objectArray![index]);
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Start GameKey: ")!.append(StringUtil.getInstance()!.toString1(gameKeyEvent))), this, GameInputStrings.getInstance()!.PROCESS_INPUT); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        this.getCanvas()!.getCustomCommandListener()!.commandAction(GameCommandsFactory.getInstance()!.START_COMMAND, NullCanvas.NULL_CANVAS); if (JThrowable.pending !== null) return 0;
        return size;
    }
}

