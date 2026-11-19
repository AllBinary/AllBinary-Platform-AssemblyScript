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
// import org.allbinary.game.layer.hud.event.GameNotificationEvent
// import org.allbinary.game.layer.hud.event.GameNotificationEventHandler
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.media.audio.ErrorSound
// import org.allbinary.media.audio.PrimaryPlayerQueueFactory
// import org.allbinary.media.audio.SelectSound

@global export class TextNotificationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.TextNotificationUtil";
    }
    @lazy static jv_instance: TextNotificationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TextNotificationUtil | null {
        if (!TextNotificationUtil.js_instance) {
            TextNotificationUtil.js_instance = true;
            TextNotificationUtil.jv_instance = new TextNotificationUtil().jinit_TextNotificationUtil_0();
        }
        return TextNotificationUtil.jv_instance;
    }
    static set instance(value: TextNotificationUtil | null) {
        TextNotificationUtil.js_instance = true;
        TextNotificationUtil.jv_instance = value;
    }
    TWO: JInteger | null = null;
    FALSE: JBoolean | null = null;
    gameNotificationEventHandler: GameNotificationEventHandler | null = null;

    jfields_TextNotificationUtil(): void {
    this.TWO = SmallIntegerSingletonFactory.getInstance()!.getAt(2);
    this.FALSE = BooleanFactory.getInstance()!.FALSE;
    this.gameNotificationEventHandler = GameNotificationEventHandler.getInstance();
    }

    jinit_TextNotificationUtil_0(): TextNotificationUtil {
        super.jinit_JObject_0();
        this.jfields_TextNotificationUtil();
        return this;
    }
    

    static getInstance(): TextNotificationUtil | null {
        return TextNotificationUtil.instance;
    }
    

    fireError(message: string | null): void {
        PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance()); if (JThrowable.pending !== null) return;
        this.fire(message); if (JThrowable.pending !== null) return;
    }
    

    fireNew(message: string | null): void {
        PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return;
        this.fire(message); if (JThrowable.pending !== null) return;
    }
    

    fireSuccess(message: string | null): void {
        PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance()); if (JThrowable.pending !== null) return;
        this.fire(message); if (JThrowable.pending !== null) return;
    }
    

    fire(message: string | null): void {
        let gameNotificationEvent: GameNotificationEvent | null = new GameNotificationEvent().jinit_GameNotificationEvent_5(this, message, this.TWO, BasicColorFactory.getInstance()!.RED, this.FALSE); if (JThrowable.pending !== null) return;
        this.gameNotificationEventHandler!.fireEvent(gameNotificationEvent); if (JThrowable.pending !== null) return;
    }
}

