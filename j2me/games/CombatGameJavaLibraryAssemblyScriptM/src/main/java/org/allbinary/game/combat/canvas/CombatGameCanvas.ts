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
// package org.allbinary.game.combat.canvas
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.combat.destroy.DestroyedLayerProcessor
// import org.allbinary.game.combat.destroy.event.DestroyEventCircularStaticPool
// import org.allbinary.game.combat.destroy.event.DestroyedEventHandler
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.game.init.BasicBuildGameInitializerFactory
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.drop.DropLayerProcessor
// import org.allbinary.game.layer.identification.GroupLayerManagerListener
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.layer.BasicLayerProcessor
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class CombatGameCanvas extends AllBinaryGameCanvas {

    jclassName(): string {
        return "org.allbinary.game.combat.canvas.CombatGameCanvas";
    }
    @lazy static jv_basicLayerProcessor: StaticArray<BasicLayerProcessor | null> | null = null;
    @lazy static js_basicLayerProcessor: bool = false;
    static get basicLayerProcessor(): StaticArray<BasicLayerProcessor | null> | null {
        if (!CombatGameCanvas.js_basicLayerProcessor) {
            CombatGameCanvas.js_basicLayerProcessor = true;
            CombatGameCanvas.jv_basicLayerProcessor = new StaticArray<BasicLayerProcessor | null>(0);
        }
        return CombatGameCanvas.jv_basicLayerProcessor;
    }
    static set basicLayerProcessor(value: StaticArray<BasicLayerProcessor | null> | null) {
        CombatGameCanvas.js_basicLayerProcessor = true;
        CombatGameCanvas.jv_basicLayerProcessor = value;
    }
    

    jinit_CombatGameCanvas_5(cmdListener: CommandListener | null, gameLayerManager: AllBinaryGameLayerManager | null, highScoresFactoryInterface: HighScoresFactoryInterface | null, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null, buffered: bool): CombatGameCanvas {
        super.jinit_AllBinaryGameCanvas_5(cmdListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered);
        return this;
    }
    

    CombatGameCanvas_init(): void {
        DestroyEventCircularStaticPool.getInstance()!.init(this); if (JThrowable.pending !== null) return;
        ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Destroy Events"); if (JThrowable.pending !== null) return;
    }
    

    initApp(abeClientInformation: AbeClientInformationInterface | null): void {
        this.CombatGameCanvas_init(); if (JThrowable.pending !== null) return;
        super.initApp(abeClientInformation); if (JThrowable.pending !== null) return;
    }
    

    initConfigurablePortion(portion: i32): void {
        DestroyedLayerProcessor.init(); if (JThrowable.pending !== null) return;
        ProgressCanvasFactory.getInstance()!.addNormalPortion(portion, "Basic Processors"); if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let gameFeatureFactory: GameFeatureFactory | null = GameFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(gameFeatureFactory!.DROPPED_ITEMS) && features!.isFeature(gameFeatureFactory!.DROPPED_ITEMS_FROM_DEATH)) {
            CombatGameCanvas.basicLayerProcessor = new StaticArray<BasicLayerProcessor | null>(2);
            CombatGameCanvas.basicLayerProcessor![0] = DestroyedLayerProcessor.getInstance(); if (JThrowable.pending !== null) return;
            CombatGameCanvas.basicLayerProcessor![1] = DropLayerProcessor.getInstance(); if (JThrowable.pending !== null) return;
        } else {
            CombatGameCanvas.basicLayerProcessor = new StaticArray<BasicLayerProcessor | null>(1);
            CombatGameCanvas.basicLayerProcessor![0] = DestroyedLayerProcessor.getInstance(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processPlayingGame(): void {
        super.processPlayingGame(); if (JThrowable.pending !== null) return;
        for (let index: i32 = CombatGameCanvas.basicLayerProcessor!.length; --index >= 0; ) {
            CombatGameCanvas.basicLayerProcessor![index]!.process(this.gameLayerManager); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    cleanupGame(): void {
        super.cleanupGame(); if (JThrowable.pending !== null) return;
        for (let index: i32 = CombatGameCanvas.basicLayerProcessor!.length; --index >= 0; ) {
            CombatGameCanvas.basicLayerProcessor![index]!.getList()!.clear(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        GroupLayerManagerListener.getInstance()!.clear(); if (JThrowable.pending !== null) return;
        GroupLayerManagerListener.getInstance()!.log(); if (JThrowable.pending !== null) return;
        DestroyedEventHandler.getInstance()!.removeAllListeners(); if (JThrowable.pending !== null) return;
        this.cleanupManager(); if (JThrowable.pending !== null) return;
    }
    

    cleanupManager(): void {
        this.gameLayerManager!.cleanup(); if (JThrowable.pending !== null) return;
    }
}

