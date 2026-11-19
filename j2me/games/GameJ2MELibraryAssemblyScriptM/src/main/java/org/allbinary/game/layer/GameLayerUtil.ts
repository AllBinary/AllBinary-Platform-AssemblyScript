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
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.view.ViewPositionBase

@global export class GameLayerUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.GameLayerUtil";
    }
    

    jinit_GameLayerUtil_0(): GameLayerUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static isOnScreen(layer: AllBinaryLayer | null): bool {
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return false;
        let viewPosition: ViewPositionBase | null = layer!.getViewPosition(); if (JThrowable.pending !== null) return false;
        return GameLayerUtil.isInside(viewPosition!.getX(), viewPosition!.getY(), viewPosition!.getX2(), viewPosition!.getY2(), 0, 0, displayInfo!.getLastWidth(), displayInfo!.getLastHeight());
    }
    

    static isInside(rectX1: i32, rectY1: i32, rectX2: i32, rectY2: i32, rect2X1: i32, rect2Y1: i32, rect2X2: i32, rect2Y2: i32): bool {
        if (rectX1 > rect2X1 && rectX2 < rect2X2 && rectY1 > rect2Y1 && rectY2 < rect2Y2) {
            return true;
        } else {
            return false;
        }
        return false;
    }
}

