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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.game.layer.hud.event.GameNotificationEvent
// import org.allbinary.game.layer.hud.event.GameNotificationListenerInterface
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings

@global export class GameNotificationHud extends BasicHud implements GameNotificationListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.notification.GameNotificationHud";
    }
    @lazy static jv_NULL_GAME_NOTIFICATION: GameNotificationHud | null = null;
    @lazy static js_NULL_GAME_NOTIFICATION: bool = false;
    static get NULL_GAME_NOTIFICATION(): GameNotificationHud | null {
        if (!GameNotificationHud.js_NULL_GAME_NOTIFICATION) {
            GameNotificationHud.js_NULL_GAME_NOTIFICATION = true;
            GameNotificationHud.jv_NULL_GAME_NOTIFICATION = new GameNotificationHud().jinit_GameNotificationHud_4(BasicHudFactory.getInstance()!.TOPCENTER, BasicHudFactory.getInstance()!.HORIZONTAL, 0, BasicColorFactory.getInstance()!.RED);
        }
        return GameNotificationHud.jv_NULL_GAME_NOTIFICATION;
    }
    static set NULL_GAME_NOTIFICATION(value: GameNotificationHud | null) {
        GameNotificationHud.js_NULL_GAME_NOTIFICATION = true;
        GameNotificationHud.jv_NULL_GAME_NOTIFICATION = value;
    }
    METHOD_NAME: string | null = null;
    lastGameNotificationEvent: GameNotificationEvent | null = null;

    jfields_GameNotificationHud(): void {
    this.METHOD_NAME = "onGameNotificationEvent";
    this.lastGameNotificationEvent = GameNotification.NULL_GAME_NOTIFICATION_EVENT;
    }
    

    jinit_GameNotificationHud_4(location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null): GameNotificationHud {
        super.jinit_BasicHud_4(location, direction, bufferZone, basicColor);
        this.jfields_GameNotificationHud();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onGameNotificationEvent(gameNotificationEvent: GameNotificationEvent | null): void {
        if (this.lastGameNotificationEvent != gameNotificationEvent) {
            this.lastGameNotificationEvent = gameNotificationEvent;
            this.logUtil!.putF(gameNotificationEvent!.getString(), this, this.METHOD_NAME); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.add(gameNotificationEvent!.getString(), gameNotificationEvent!.getSeconds(), gameNotificationEvent!.getBasicColorP(), gameNotificationEvent!.getPermanent()); if (JThrowable.pending !== null) return;
    }
    

    add(string: string | null, seconds: JInteger | null, basicColor: BasicColor | null, permanent: JBoolean | null): void {
    }
    

    processTick(): void {
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    clear(): void {
    }
}

