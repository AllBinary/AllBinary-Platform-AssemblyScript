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
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class NoGameNotificationHudSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.notification.NoGameNotificationHudSingleton";
    }
    @lazy static jv_instance: NoGameNotificationHudSingleton | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoGameNotificationHudSingleton | null {
        if (!NoGameNotificationHudSingleton.js_instance) {
            NoGameNotificationHudSingleton.js_instance = true;
            NoGameNotificationHudSingleton.jv_instance = new NoGameNotificationHudSingleton().jinit_NoGameNotificationHudSingleton_0();
        }
        return NoGameNotificationHudSingleton.jv_instance;
    }
    static set instance(value: NoGameNotificationHudSingleton | null) {
        NoGameNotificationHudSingleton.js_instance = true;
        NoGameNotificationHudSingleton.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    gameNotificationHud: GameNotificationHud | null = null;

    jfields_NoGameNotificationHudSingleton(): void {
    this.logUtil = LogUtil.getInstance();
    this.gameNotificationHud = GameNotificationHud.NULL_GAME_NOTIFICATION;
    }
    

    static getInstance(): NoGameNotificationHudSingleton | null {
        return NoGameNotificationHudSingleton.instance;
    }
    

    jinit_NoGameNotificationHudSingleton_0(): NoGameNotificationHudSingleton {
        super.jinit_JObject_0();
        this.jfields_NoGameNotificationHudSingleton();
        do {
            let basicHudFactory: BasicHudFactory | null = BasicHudFactory.getInstance(); if (JThrowable.pending !== null) break;
            this.gameNotificationHud = new NoGameGameNotificationHud().jinit_NoGameGameNotificationHud_0(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getGameNotificationHud(): GameNotificationHud | null {
        return this.gameNotificationHud;
    }
}

