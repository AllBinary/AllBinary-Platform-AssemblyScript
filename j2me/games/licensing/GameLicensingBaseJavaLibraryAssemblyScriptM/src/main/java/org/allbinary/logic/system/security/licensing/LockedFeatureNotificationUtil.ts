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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.game.layer.hud.event.GameNotificationEvent
// import org.allbinary.game.layer.hud.event.GameNotificationEventHandler
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.media.audio.ErrorSound
// import org.allbinary.media.audio.PrimaryPlayerQueueFactory

@global export class LockedFeatureNotificationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LockedFeatureNotificationUtil";
    }
    @lazy static jv_instance: LockedFeatureNotificationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LockedFeatureNotificationUtil | null {
        if (!LockedFeatureNotificationUtil.js_instance) {
            LockedFeatureNotificationUtil.js_instance = true;
            LockedFeatureNotificationUtil.jv_instance = new LockedFeatureNotificationUtil().jinit_LockedFeatureNotificationUtil_0();
        }
        return LockedFeatureNotificationUtil.jv_instance;
    }
    static set instance(value: LockedFeatureNotificationUtil | null) {
        LockedFeatureNotificationUtil.js_instance = true;
        LockedFeatureNotificationUtil.jv_instance = value;
    }
    gameNotificationEvent: GameNotificationEvent | null = null;

    jfields_LockedFeatureNotificationUtil(): void {
    this.gameNotificationEvent = new GameNotificationEvent().jinit_GameNotificationEvent_5(this, LicenseStrings.getInstance()!.LOCKED, SmallIntegerSingletonFactory.getInstance()!.getAt(3), BasicColorFactory.getInstance()!.RED, BooleanFactory.getInstance()!.FALSE);
    }

    jinit_LockedFeatureNotificationUtil_0(): LockedFeatureNotificationUtil {
        super.jinit_JObject_0();
        this.jfields_LockedFeatureNotificationUtil();
        return this;
    }
    

    static getInstance(): LockedFeatureNotificationUtil | null {
        return LockedFeatureNotificationUtil.instance;
    }
    

    fire(): void {
        PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance()); if (JThrowable.pending !== null) return;
        GameNotificationEventHandler.getInstance()!.fireEvent(this.gameNotificationEvent); if (JThrowable.pending !== null) return;
    }
    

    fireWithColor(basicColor: BasicColor | null): void {
        PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance()); if (JThrowable.pending !== null) return;
        this.gameNotificationEvent!.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        GameNotificationEventHandler.getInstance()!.fireEvent(this.gameNotificationEvent); if (JThrowable.pending !== null) return;
    }
}

