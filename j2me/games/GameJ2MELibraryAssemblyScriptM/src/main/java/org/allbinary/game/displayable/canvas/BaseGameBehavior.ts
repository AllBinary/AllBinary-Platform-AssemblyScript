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
// import org.allbinary.business.advertisement.GameAdStateFactory
// import org.allbinary.game.GameAdState
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.opengles.CurrentDisplayableFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class BaseGameBehavior extends DemoGameBehavior {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BaseGameBehavior";
    }
    @lazy static jv_instanceC: BaseGameBehavior | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): BaseGameBehavior | null {
        if (!BaseGameBehavior.js_instanceC) {
            BaseGameBehavior.js_instanceC = true;
            BaseGameBehavior.jv_instanceC = new BaseGameBehavior().jinit_BaseGameBehavior_0();
        }
        return BaseGameBehavior.jv_instanceC;
    }
    static set instanceC(value: BaseGameBehavior | null) {
        BaseGameBehavior.js_instanceC = true;
        BaseGameBehavior.jv_instanceC = value;
    }

    jinit_BaseGameBehavior_0(): BaseGameBehavior {
        super.jinit_DemoGameBehavior_0();
        return this;
    }
    

    static getInstance(): DemoGameBehavior | null {
        return BaseGameBehavior.instanceC;
    }
    

    init(): void {
        let gameAdState: GameAdState | null = GameAdStateFactory.getInstance()!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        gameAdState!.playingAdState(); if (JThrowable.pending !== null) return;
    }
    

    pause(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD)) {
            let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) return;
            currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gamePauseRunnable); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    unPause(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        if (Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD)) {
            let currentDisplayableFactory: CurrentDisplayableFactory | null = CurrentDisplayableFactory.getInstance(); if (JThrowable.pending !== null) return;
            currentDisplayableFactory!.setRunnable(allBinaryGameCanvas!.gameRunnable); if (JThrowable.pending !== null) return;
            currentDisplayableFactory!.setDisplayable(allBinaryGameCanvas); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateTouch(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.updateTouch2(); if (JThrowable.pending !== null) return;
    }
    

    updateScreenButtonPaintable(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.updateScreenButtonPaintable2(); if (JThrowable.pending !== null) return;
    }
    

    setGameState(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.updateGameState(); if (JThrowable.pending !== null) return;
    }
    

    removeAllGameKeyInputListeners(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.removeAllGameKeyInputListeners2(); if (JThrowable.pending !== null) return;
    }
    

    updateEndGameProcessor(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.updateEndGameProcessor2(); if (JThrowable.pending !== null) return;
    }
    

    buildGame(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.buildGame2(); if (JThrowable.pending !== null) return;
    }
    

    run(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.run2(); if (JThrowable.pending !== null) return;
    }
    

    setHighScore(abeClientInformation: AbeClientInformationInterface | null, allBinaryGameCanvas: AllBinaryGameCanvas | null, name: string | null, score: i64, autoSubmit: bool, isLast: bool): void {
        allBinaryGameCanvas!.setHighScore2(abeClientInformation, name, score, autoSubmit, isLast); if (JThrowable.pending !== null) return;
    }
}

