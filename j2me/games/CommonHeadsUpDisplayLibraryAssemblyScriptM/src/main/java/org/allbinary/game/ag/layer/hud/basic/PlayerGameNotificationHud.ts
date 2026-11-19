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
// package org.allbinary.game.ag.layer.hud.basic
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.business.advertisement.GameAdStateFactory
// import org.allbinary.canvas.Processor
// import org.allbinary.game.GameAdState
// import org.allbinary.game.ag.layer.hud.basic.notification.GameNotification
// import org.allbinary.game.ag.layer.hud.basic.notification.GameNotificationHud
// import org.allbinary.game.layer.hud.event.GameNotificationEventHandler
// import org.allbinary.graphics.CustomGPoint
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.CircularIndexUtil

@global export class PlayerGameNotificationHud extends GameNotificationHud implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.PlayerGameNotificationHud";
    }
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;
    EMPTY_STRING: string | null = null;
    displayInfo: DisplayInfoSingleton | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;
    gameNotification: GameNotification | null = null;
    permanentGameNotification: GameNotification | null = null;
    setAndRemoveProcessor: Processor | null = null;
    nextUnremoveableProcessor: Processor | null = null;
    processor: Processor | null = null;
    PERMANENT_GAME_NOTIFICATION: string | null = null;
    lastString: string | null = null;
    string: string | null = null;
    point: CustomGPoint | null = null;
    width: i32 = 0;

    jfields_PlayerGameNotificationHud(): void {
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    this.displayInfo = DisplayInfoSingleton.getInstance();
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    
    this.gameNotification = new GameNotification().jinit_GameNotification_0();
    this.permanentGameNotification = new GameNotification().jinit_GameNotification_0();
    this.setAndRemoveProcessor = new SetAndRemoveProcessor().jinit_SetAndRemoveProcessor_1(this);
    this.nextUnremoveableProcessor = new NextUnremoveableProcessor().jinit_NextUnremoveableProcessor_1(this);
    this.processor = Processor.getInstance();
    this.PERMANENT_GAME_NOTIFICATION = "Permanent Game Notification: ";
    this.lastString = StringUtil.getInstance()!.EMPTY_STRING;
    this.string = this.EMPTY_STRING;
    this.point = CustomGPoint.NULL_CUSTOM_POINT;
    this.width = 0;
    }
    

    jinit_PlayerGameNotificationHud_4(location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null): PlayerGameNotificationHud {
        super.jinit_GameNotificationHud_4(location, direction, bufferZone, basicColor);
        this.jfields_PlayerGameNotificationHud();
        this.circularIndexUtil = CircularIndexUtil.createInstance(0); if (JThrowable.pending !== null) return this;
        let gameNotificationEventHandler: GameNotificationEventHandler | null = GameNotificationEventHandler.getInstance(); if (JThrowable.pending !== null) return this;
        gameNotificationEventHandler!.removeAllListeners(); if (JThrowable.pending !== null) return this;
        gameNotificationEventHandler!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        do {
            super.updateMeasurement(graphics); if (JThrowable.pending !== null) break;
            let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) break;
            this.width = font!.stringWidth(this.string); if (JThrowable.pending !== null) break;
            this.processor!.process(); if (JThrowable.pending !== null) break;
            this.processor = Processor.getInstance(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getPoint(x: i32, y: i32): GPoint | null {
        this.point = CustomGPoint.getInstance3(0, 0); if (JThrowable.pending !== null) return null;
        this.point!.setX(x); if (JThrowable.pending !== null) return null;
        this.point!.setY(y); if (JThrowable.pending !== null) return null;
        return this.point;
    }
    

    add(string: string | null, seconds: JInteger | null, basicColor: BasicColor | null, permanent: JBoolean | null): void {
        if (permanent!.booleanValue()) {
            if (this.lastString != string) {
                this.lastString = string;
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.PERMANENT_GAME_NOTIFICATION)!.append(string)), this, this.commonStrings!.ADD); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.permanentGameNotification!.add(string, seconds, basicColor); if (JThrowable.pending !== null) return;
            this.circularIndexUtil!.setSize(this.permanentGameNotification!.getSize()); if (JThrowable.pending !== null) return;
        } else {
            this.gameNotification!.add(string, seconds, basicColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processTick(): void {
        if (this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            let gameAdState: GameAdState | null = GameAdStateFactory.getInstance()!.getCurrentInstance(); if (JThrowable.pending !== null) return;
            if (gameAdState!.isShowingAtLocation(this.getLocation())) {
                this.offsetY = -54;
            } else {
                this.offsetY = 0;
            } if (JThrowable.pending !== null) return;
            if (this.gameNotification!.getSize() > 0) {
                this.setAndRemove(); if (JThrowable.pending !== null) return;
            } else if (this.permanentGameNotification!.getSize() > 0) {
                this.setNextUnremoveable(); if (JThrowable.pending !== null) return;
            } else {
                this.string = this.EMPTY_STRING;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAndRemove(): void {
        this.string = changetype<string | null>(this.gameNotification!.stringList!.removeAt(0)); if (JThrowable.pending !== null) return;
        this.processor = this.setAndRemoveProcessor;
    }
    

    setAndRemoveProcess(): void {
        this.setX((this.displayInfo!.getLastWidth() - this.width) >> 1); if (JThrowable.pending !== null) return;
        this.point!.setX(this.getX()); if (JThrowable.pending !== null) return;
        this.point!.setY(this.getY()); if (JThrowable.pending !== null) return;
        let time: JInteger | null = changetype<JInteger | null>(this.gameNotification!.timeList!.removeAt(0)); if (JThrowable.pending !== null) return;
        let iTime: i32 = time!.intValue() * 1000; if (JThrowable.pending !== null) return;
        if (iTime == 0) {
            iTime = 500;
        }
        this.timeDelayHelper!.delay = iTime;
        this.setBasicColorP(changetype<BasicColor | null>(this.gameNotification!.colorList!.removeAt(0))); if (JThrowable.pending !== null) return;
    }
    

    setNextUnremoveable(): void {
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.string = changetype<string | null>(this.permanentGameNotification!.stringList!.objectArray![index]);
        this.processor = this.nextUnremoveableProcessor;
    }
    

    setNextUnremoveableProcess(): void {
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.setX((this.displayInfo!.getLastWidth() - this.width) >> 1); if (JThrowable.pending !== null) return;
        this.point!.setX(this.getX()); if (JThrowable.pending !== null) return;
        this.point!.setY(this.getY()); if (JThrowable.pending !== null) return;
        let time: JInteger | null = changetype<JInteger | null>(this.permanentGameNotification!.timeList!.objectArray![index]);
        this.timeDelayHelper!.delay = time!.intValue() * 1000; if (JThrowable.pending !== null) return;
        this.setBasicColorP(changetype<BasicColor | null>(this.permanentGameNotification!.colorList!.objectArray![index])); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    clear(): void {
        this.gameNotification!.clear(); if (JThrowable.pending !== null) return;
        this.permanentGameNotification!.clear(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        super.paintString(graphics, this.string); if (JThrowable.pending !== null) return;
    }
}

