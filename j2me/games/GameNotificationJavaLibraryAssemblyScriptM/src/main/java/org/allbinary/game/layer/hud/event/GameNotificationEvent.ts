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
// package org.allbinary.game.layer.hud.event
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameNotificationEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.layer.hud.event.GameNotificationEvent";
    }
    string: string | null = null;
    seconds: JInteger | null = null;
    basicColor: BasicColor | null = null;
    removeable: JBoolean | null = null;

    jfields_GameNotificationEvent(): void {
    this.string = StringUtil.getInstance()!.EMPTY_STRING;
    
    this.basicColor = BasicColorFactory.getInstance()!.BLACK;
    
    }
    

    jinit_GameNotificationEvent_5(anyType: Object | null, string: string | null, seconds: JInteger | null, basicColor: BasicColor | null, permanent: JBoolean | null): GameNotificationEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_GameNotificationEvent();
        this.setString(string); if (JThrowable.pending !== null) return this;
        this.seconds = seconds;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        this.removeable = permanent;
        return this;
    }
    

    getString(): string | null {
        return this.string;
    }
    

    getSeconds(): JInteger | null {
        return this.seconds;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    getPermanent(): JBoolean | null {
        return this.removeable;
    }
    

    setString(string: string | null): void {
        this.string = string;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
}

