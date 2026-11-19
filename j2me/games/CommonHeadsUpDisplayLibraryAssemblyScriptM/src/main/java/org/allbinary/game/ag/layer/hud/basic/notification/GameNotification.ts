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
// package org.allbinary.game.ag.layer.hud.basic.notification
// import org.allbinary.game.layer.hud.event.GameNotificationEvent
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameNotification extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.notification.GameNotification";
    }
    @lazy static jv_NULL_GAME_NOTIFICATION_EVENT: GameNotificationEvent | null = null;
    @lazy static js_NULL_GAME_NOTIFICATION_EVENT: bool = false;
    static get NULL_GAME_NOTIFICATION_EVENT(): GameNotificationEvent | null {
        if (!GameNotification.js_NULL_GAME_NOTIFICATION_EVENT) {
            GameNotification.js_NULL_GAME_NOTIFICATION_EVENT = true;
            GameNotification.jv_NULL_GAME_NOTIFICATION_EVENT = new GameNotificationEvent().jinit_GameNotificationEvent_5(NullUtil.getInstance()!.NULL_OBJECT, StringUtil.getInstance()!.EMPTY_STRING, new JInteger().jinit_JInteger_1(0), BasicColorFactory.getInstance()!.RED, BooleanFactory.getInstance()!.FALSE);
        }
        return GameNotification.jv_NULL_GAME_NOTIFICATION_EVENT;
    }
    static set NULL_GAME_NOTIFICATION_EVENT(value: GameNotificationEvent | null) {
        GameNotification.js_NULL_GAME_NOTIFICATION_EVENT = true;
        GameNotification.jv_NULL_GAME_NOTIFICATION_EVENT = value;
    }
    stringList: BasicArrayList | null = null;
    timeList: BasicArrayList | null = null;
    colorList: BasicArrayList | null = null;

    jfields_GameNotification(): void {
    this.stringList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.timeList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.colorList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_GameNotification_0(): GameNotification {
        super.jinit_JObject_0();
        this.jfields_GameNotification();
        return this;
    }
    

    add(string: string | null, seconds: JInteger | null, basicColor: BasicColor | null): void {
        if (!this.stringList!.contains(string)) {
            this.stringList!.add(string); if (JThrowable.pending !== null) return;
            this.timeList!.add(seconds); if (JThrowable.pending !== null) return;
            this.colorList!.add(basicColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    clear(): void {
        this.stringList!.clear(); if (JThrowable.pending !== null) return;
        this.timeList!.clear(); if (JThrowable.pending !== null) return;
        this.colorList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    getSize(): i32 {
        return this.stringList!.size();
    }
}

