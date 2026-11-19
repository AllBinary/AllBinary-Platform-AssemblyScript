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
// package org.allbinary.game.displayable.canvas
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventUtil
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.layer.special.SpecialGameInputFactory
// import org.allbinary.game.layer.special.SpecialGameInputInterface
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CheatGameInputProcessor extends PlayerGameInput {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.CheatGameInputProcessor";
    }
    @lazy static jv_inputProcessor: SpecialGameInputInterface | null = null;
    @lazy static js_inputProcessor: bool = false;
    static get inputProcessor(): SpecialGameInputInterface | null {
        if (!CheatGameInputProcessor.js_inputProcessor) {
            CheatGameInputProcessor.js_inputProcessor = true;
            CheatGameInputProcessor.jv_inputProcessor = SpecialGameInputFactory.NO_SPECIAL_GAME_INPUT;
        }
        return CheatGameInputProcessor.jv_inputProcessor;
    }
    static set inputProcessor(value: SpecialGameInputInterface | null) {
        CheatGameInputProcessor.js_inputProcessor = true;
        CheatGameInputProcessor.jv_inputProcessor = value;
    }
    PROCESS_GAME: string | null = null;
    gameCanvas: AllBinaryGameCanvas | null = null;
    gameKeyFactory: GameKeyFactory | null = null;

    jfields_CheatGameInputProcessor(): void {
    this.PROCESS_GAME = "processGame";
    
    this.gameKeyFactory = GameKeyFactory.getInstance();
    }
    

    jinit_CheatGameInputProcessor_1(gameCanvas: AllBinaryGameCanvas | null): CheatGameInputProcessor {
        super.jinit_PlayerGameInput_3(new BasicArrayListD().jinit_BasicArrayListD_0(), new BasicArrayListD().jinit_BasicArrayListD_0(), -1);
        this.jfields_CheatGameInputProcessor();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    update(): void {
        do {
            let gameLayerManager: AllBinaryGameLayerManager | null = this.gameCanvas!.getLayerManager(); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) break;
            let size: i32 = list!.size(); if (JThrowable.pending !== null) break;
            for (let index: i32 = 0; index < size; index++) {
                let anyType: Object | null = list!.objectArray![index];
                let key: i32 = GameKeyEventUtil.getKey(anyType); if (JThrowable.pending !== null) break;
                if (key == this.gameKeyFactory!.LEVEL_DOWN!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.strafeLeft(); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.LEVEL_UP!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.strafeRight(); if (JThrowable.pending !== null) break;
                    break;
                } if (JThrowable.pending !== null) break;
                if (key == this.gameKeyFactory!.LEFT!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.left(); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.RIGHT!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.right(); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.UP!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.up(); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.DOWN!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.down(); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.KEY_NUM1!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.special1(gameLayerManager, GameKeyEvent.NONE); if (JThrowable.pending !== null) break;
                    break;
                } else if (key == this.gameKeyFactory!.KEY_NUM3!.getId()) {
                    CheatGameInputProcessor.inputProcessor!.special2(gameLayerManager, GameKeyEvent.NONE); if (JThrowable.pending !== null) break;
                    break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            list!.clear(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

