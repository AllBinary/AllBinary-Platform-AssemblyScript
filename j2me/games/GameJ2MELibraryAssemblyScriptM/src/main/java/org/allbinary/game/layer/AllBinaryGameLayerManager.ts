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
// package org.allbinary.game.layer
// import org.allbinary.game.GameInfo
// import org.allbinary.game.input.NullPlayerGameInputComposite
// import org.allbinary.game.input.PlayerGameInputCompositeInterface
// import org.allbinary.graphics.ItemColorFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerProcessor
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.util.BasicArrayList

@global export class AllBinaryGameLayerManager extends AllBinaryLayerManager {

    jclassName(): string {
        return "org.allbinary.game.layer.AllBinaryGameLayerManager";
    }
    @lazy static jv_NULL_ALLBINARY_LAYER_MANAGER: Object | null = null;
    @lazy static js_NULL_ALLBINARY_LAYER_MANAGER: bool = false;
    static get NULL_ALLBINARY_LAYER_MANAGER(): Object | null {
        if (!AllBinaryGameLayerManager.js_NULL_ALLBINARY_LAYER_MANAGER) {
            AllBinaryGameLayerManager.js_NULL_ALLBINARY_LAYER_MANAGER = true;
            AllBinaryGameLayerManager.jv_NULL_ALLBINARY_LAYER_MANAGER = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return AllBinaryGameLayerManager.jv_NULL_ALLBINARY_LAYER_MANAGER;
    }
    static set NULL_ALLBINARY_LAYER_MANAGER(value: Object | null) {
        AllBinaryGameLayerManager.js_NULL_ALLBINARY_LAYER_MANAGER = true;
        AllBinaryGameLayerManager.jv_NULL_ALLBINARY_LAYER_MANAGER = value;
    }
    @lazy static jv_ID: JInteger | null = null;
    @lazy static js_ID: bool = false;
    static get ID(): JInteger | null {
        if (!AllBinaryGameLayerManager.js_ID) {
            AllBinaryGameLayerManager.js_ID = true;
            AllBinaryGameLayerManager.jv_ID = SmallIntegerSingletonFactory.getInstance()!.getAt(22);
        }
        return AllBinaryGameLayerManager.jv_ID;
    }
    static set ID(value: JInteger | null) {
        AllBinaryGameLayerManager.js_ID = true;
        AllBinaryGameLayerManager.jv_ID = value;
    }
    backgroundBasicColor: BasicColor | null = null;
    foregroundBasicColor: BasicColor | null = null;
    gameInfo: GameInfo | null = null;
    playerGameInputCompositeInterface: PlayerGameInputCompositeInterface | null = null;

    jfields_AllBinaryGameLayerManager(): void {
    
    
    
    this.playerGameInputCompositeInterface = NullPlayerGameInputComposite.NULL_PLAYER_GAME_INPUT_COMPOSITE;
    }
    

    static getNullInstance(): AllBinaryGameLayerManager | null {
        if (AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER = new AllBinaryGameLayerManager().jinit_AllBinaryGameLayerManager_3(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE, GameInfo.NONE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<AllBinaryGameLayerManager | null>(AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER);
    }
    

    jinit_AllBinaryGameLayerManager_3(backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null, gameInfo: GameInfo | null): AllBinaryGameLayerManager {
        super.jinit_AllBinaryLayerManager_0();
        this.jfields_AllBinaryGameLayerManager();
        this.backgroundBasicColor = backgroundBasicColor;
        this.foregroundBasicColor = foregroundBasicColor;
        let itemColorFactory: ItemColorFactory | null = ItemColorFactory.getInstance(); if (JThrowable.pending !== null) return this;
        itemColorFactory!.INVERT_PAINT = this.backgroundBasicColor!.intValue(); if (JThrowable.pending !== null) return this;
        itemColorFactory!.PAINT = this.foregroundBasicColor!.intValue(); if (JThrowable.pending !== null) return this;
        this.gameInfo = gameInfo;
        return this;
    }
    

    getLayerManager(): AllBinaryLayerManager | null {
        return this;
    }
    

    init(): void {
    }
    

    getBackgroundBasicColor(): BasicColor | null {
        return this.backgroundBasicColor;
    }
    

    setBackgroundBasicColor(backgroundBasicColor: BasicColor | null): void {
        this.backgroundBasicColor = backgroundBasicColor;
        ItemColorFactory.getInstance()!.INVERT_PAINT = this.backgroundBasicColor!.intValue(); if (JThrowable.pending !== null) return;
    }
    

    getForegroundBasicColor(): BasicColor | null {
        return this.foregroundBasicColor;
    }
    

    setForegroundBasicColor(foregroundBasicColor: BasicColor | null): void {
        this.foregroundBasicColor = foregroundBasicColor;
        ItemColorFactory.getInstance()!.PAINT = this.foregroundBasicColor!.intValue(); if (JThrowable.pending !== null) return;
    }
    

    getGameInfo(): GameInfo | null {
        return this.gameInfo;
    }
    

    setGameInfo(gameInfo: GameInfo | null): void {
        this.gameInfo = gameInfo;
    }
    

    setLayerProcessorList(list: BasicArrayList | null): void {
        let layerProcessorInterfaceArray: StaticArray<LayerProcessor | null> | null = new StaticArray<LayerProcessor | null>(list!.size()); if (JThrowable.pending !== null) return;
        let size: i32 = layerProcessorInterfaceArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            layerProcessorInterfaceArray![index] = changetype<LayerProcessor | null>(list!.objectArray![index]);
        }
        this.setLayerProcessorArray(layerProcessorInterfaceArray); if (JThrowable.pending !== null) return;
    }
    

    setPlayerGameInputCompositeInterface(playerGameInputCompositeInterface: PlayerGameInputCompositeInterface | null): void {
        this.playerGameInputCompositeInterface = playerGameInputCompositeInterface;
    }
    

    getPlayerGameInputCompositeInterface(): PlayerGameInputCompositeInterface | null {
        return this.playerGameInputCompositeInterface;
    }
}

