/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.game.GameTypeFactory
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings

@global export class DemoGameBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.DemoGameBehavior";
    }
    @lazy static jv_instance: DemoGameBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DemoGameBehavior | null {
        if (!DemoGameBehavior.js_instance) {
            DemoGameBehavior.js_instance = true;
            DemoGameBehavior.jv_instance = new DemoGameBehavior().jinit_DemoGameBehavior_0();
        }
        return DemoGameBehavior.jv_instance;
    }
    static set instance(value: DemoGameBehavior | null) {
        DemoGameBehavior.js_instance = true;
        DemoGameBehavior.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_DemoGameBehavior(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_DemoGameBehavior_0(): DemoGameBehavior {
        super.jinit_JObject_0();
        this.jfields_DemoGameBehavior();
        return this;
    }
    

    static getInstance(): DemoGameBehavior | null {
        return DemoGameBehavior.instance;
    }
    

    init(): void {
    }
    

    pause(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    unPause(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.setTouchPaintableP(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
    }
    

    setGameState(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    buildGame(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    run(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(GameTypeFactory.getInstance()!.BOT), this, commonStrings!.RUN); if (JThrowable.pending !== null) return;
    }
    

    setHighScore(abeClientInformation: AbeClientInformationInterface | null, allBinaryGameCanvas: AllBinaryGameCanvas | null, name: string | null, score: i64, autoSubmit: bool, isLast: bool): void {
    }
}

