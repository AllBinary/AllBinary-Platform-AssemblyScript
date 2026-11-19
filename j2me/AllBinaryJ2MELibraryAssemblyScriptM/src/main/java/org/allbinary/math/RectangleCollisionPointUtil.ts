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
// package org.allbinary.math
// import org.allbinary.graphics.GPoint
// import org.allbinary.util.BasicArrayList

@global export class RectangleCollisionPointUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.math.RectangleCollisionPointUtil";
    }
    

    jinit_RectangleCollisionPointUtil_0(): RectangleCollisionPointUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static allPointsInside(rectX1: i32, rectY1: i32, rectX2: i32, rectY2: i32, list: BasicArrayList | null): bool {
        let rectangleCollisionUtil: RectangleCollisionUtil | null = RectangleCollisionUtil.getInstance(); if (JThrowable.pending !== null) return false;
        let point: GPoint | null = null;
        for (let index: i32 = list!.size(); --index >= 0; ) {
            point = changetype<GPoint | null>(list!.objectArray![index]);
            if (!rectangleCollisionUtil!.isInside(rectX1, rectY1, rectX2, rectY2, point!.getX(), point!.getY())) {
                return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
    

    static allPointsInsideCell(rectX1: i32, rectY1: i32, rectX2: i32, rectY2: i32, list: BasicArrayList | null, xCellSize: i32, yCellSize: i32): bool {
        let rectangleCollisionUtil: RectangleCollisionUtil | null = RectangleCollisionUtil.getInstance(); if (JThrowable.pending !== null) return false;
        let point: GPoint | null = null;
        for (let index: i32 = list!.size(); --index >= 0; ) {
            point = changetype<GPoint | null>(list!.objectArray![index]);
            if (!rectangleCollisionUtil!.isInside(rectX1, rectY1, rectX2, rectY2, point!.getX() * xCellSize, point!.getY() * yCellSize)) {
                return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return true;
    }
}

