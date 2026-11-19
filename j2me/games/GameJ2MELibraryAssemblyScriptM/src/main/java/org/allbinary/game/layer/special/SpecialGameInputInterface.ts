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
// package org.allbinary.game.layer.special
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.layer.AllBinaryLayerManager

@global export interface SpecialGameInputInterface extends PaintableInterface {
    

    up(): void;
    

    down(): void;
    

    right(): void;
    

    left(): void;
    

    strafeLeft(): void;
    

    strafeRight(): void;
    

    fire(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
    

    special1(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
    

    special2(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
    

    special3(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
    

    special4(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
    

    special5(layerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void;
}

