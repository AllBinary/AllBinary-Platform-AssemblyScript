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
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.Command
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.form.ScreenInfo
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.util.visitor.Visitor

@global export class LimitCommandsVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.LimitCommandsVisitor";
    }
    isNotSmallDisplay: bool = false;

    jfields_LimitCommandsVisitor(): void {
    
    }
    

    jinit_LimitCommandsVisitor_0(): LimitCommandsVisitor {
        super.jinit_Visitor_0();
        this.jfields_LimitCommandsVisitor();
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return this;
        this.isNotSmallDisplay = (displayInfo!.isPortrait() && displayInfo!.getLastHeight() > ScreenInfo.getInstance()!.SMALL_WIDTH) || (!displayInfo!.isPortrait() && displayInfo!.getLastHeight() > ScreenInfo.getInstance()!.SMALL_HEIGHT); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    visit(anyType: Object | null): Object | null {
        let command: Command | null = changetype<Command | null>(anyType);
        let booleanFactory: BooleanFactory | null = BooleanFactory.getInstance(); if (JThrowable.pending !== null) return null;
        if (this.isNotSmallDisplay || command!.getPriority() == 1 || command == GameCommandsFactory.getInstance()!.EXIT_COMMAND || command == GameCommandsFactory.getInstance()!.EXIT_WITHOUT_PROGRESS_COMMAND) {
            return booleanFactory!.TRUE;
        } else {
            return booleanFactory!.FALSE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

