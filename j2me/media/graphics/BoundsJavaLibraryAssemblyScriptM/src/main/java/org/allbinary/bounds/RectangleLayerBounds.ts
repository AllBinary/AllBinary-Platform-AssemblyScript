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
// package org.allbinary.bounds
// import org.allbinary.graphics.Rectangle

@global export class RectangleLayerBounds extends LayerBounds {

    jclassName(): string {
        return "org.allbinary.bounds.RectangleLayerBounds";
    }
    

    jinit_RectangleLayerBounds_1(rectangle: Rectangle | null): RectangleLayerBounds {
        super.jinit_LayerBounds_1(rectangle);
        return this;
    }
    

    visit(boundsVisitorInterface: BoundsVisitorInterface | null): void {
        if (boundsVisitorInterface!.getX() > this.rectangle!.getMaxX()) {
            boundsVisitorInterface!.maxX(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (boundsVisitorInterface!.getY() > this.rectangle!.getMaxY()) {
            boundsVisitorInterface!.maxY(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (boundsVisitorInterface!.getX() < this.rectangle!.getPoint()!.getX()) {
            boundsVisitorInterface!.minX(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (boundsVisitorInterface!.getY() < this.rectangle!.getPoint()!.getY()) {
            boundsVisitorInterface!.minY(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

