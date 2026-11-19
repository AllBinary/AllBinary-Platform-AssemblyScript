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
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.layer.AllBinaryGameLayer
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.view.ViewPosition

@global export class TestingInputSingleton extends AllBinaryGameLayer implements GameInputInterface {

    jclassName(): string {
        return "org.allbinary.game.input.TestingInputSingleton";
    }
    @lazy static jv_instance: TestingInputSingleton | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TestingInputSingleton | null {
        if (!TestingInputSingleton.js_instance) {
            TestingInputSingleton.js_instance = true;
            TestingInputSingleton.jv_instance = new TestingInputSingleton().jinit_TestingInputSingleton_0();
        }
        return TestingInputSingleton.jv_instance;
    }
    static set instance(value: TestingInputSingleton | null) {
        TestingInputSingleton.js_instance = true;
        TestingInputSingleton.jv_instance = value;
    }
    inputProcessorArray: StaticArray<GameInputProcessor | null> | null = null;
    testInputPaintable: PaintableInterface | null = null;

    jfields_TestingInputSingleton(): void {
    this.inputProcessorArray = new StaticArray<GameInputProcessor | null>(InputFactory.getInstance()!.MAX);
    this.testInputPaintable = NullPaintable.getInstance();
    }
    

    static getInstance(): TestingInputSingleton | null {
        return TestingInputSingleton.instance;
    }
    

    jinit_TestingInputSingleton_0(): TestingInputSingleton {
        super.jinit_AllBinaryGameLayer_3(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPosition.getInstanceD());
        this.jfields_TestingInputSingleton();
        GameInputProcessorUtil.init(this.inputProcessorArray); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initInputProcessors(): void {
    }
    

    initInputProcessorsForTestInput(aTestInputInterface: TestInputInterface | null): void {
        let testInputInterface: TestInputInterface | null = aTestInputInterface;
        this.testInputPaintable = testInputInterface;
        this.inputProcessorArray![Canvas.UP] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.up();
            } */; if (JThrowable.pending !== null) return;
        this.inputProcessorArray![Canvas.DOWN] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.down();
            } */; if (JThrowable.pending !== null) return;
        this.inputProcessorArray![Canvas.LEFT] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.left();
            } */; if (JThrowable.pending !== null) return;
        this.inputProcessorArray![Canvas.RIGHT] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.right();
            } */; if (JThrowable.pending !== null) return;
        this.inputProcessorArray![Canvas.KEY_NUM7] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.strafeLeft();
            } */; if (JThrowable.pending !== null) return;
        this.inputProcessorArray![Canvas.KEY_NUM9] = changetype<GameInputProcessor | null>(0) /* Java anonymous class: not converted
            

            processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
                testInputInterface!.strafeRight();
            } */; if (JThrowable.pending !== null) return;
        GameInputProcessorUtil.init(this.inputProcessorArray); if (JThrowable.pending !== null) return;
    }
    

    processInputList(allbinaryLayerManager: AllBinaryLayerManager | null, list: BasicArrayList | null): void {
        let key: i32 = 0;
        let gameKeyEvent: GameKeyEvent | null = null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            gameKeyEvent = (changetype<GameKeyEvent | null>(list!.objectArray![index]));
            key = gameKeyEvent!.getKey(); if (JThrowable.pending !== null) return;
            this.inputProcessorArray![key]!.processEvent(allbinaryLayerManager, GameKeyEvent.NONE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processInput(allbinaryLayerManager: AllBinaryLayerManager | null): void {
        this.processInputList(allbinaryLayerManager, this.getGameKeyEventList()); if (JThrowable.pending !== null) return;
        this.getGameKeyEventList()!.clear(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.testInputPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    implmentsGameInputInterface(): bool {
        return true;
    }
}

