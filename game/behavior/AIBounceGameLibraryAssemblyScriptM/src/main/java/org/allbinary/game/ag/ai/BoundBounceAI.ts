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
// package org.allbinary.game.ag.ai
// import javax.microedition.lcdui.Graphics
// import org.allbinary.bounds.BoundsVisitorInterface
// import org.allbinary.bounds.LayerBounds
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.graphics.Rectangle
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class BoundBounceAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.BoundBounceAI";
    }
    currentRelativeAngle: i32 = 0;
    layerBounds: LayerBounds | null = null;
    boundsVisitorInterface: BoundsVisitorInterface | null = null;

    jfields_BoundBounceAI(): void {
    this.currentRelativeAngle = 0;
    
    
    }
    

    jinit_BoundBounceAI_4(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null, layerBounds: LayerBounds | null, boundsVisitorInterface: BoundsVisitorInterface | null): BoundBounceAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_BoundBounceAI();
        this.layerBounds = layerBounds;
        this.boundsVisitorInterface = boundsVisitorInterface;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        let rectange: Rectangle | null = this.layerBounds!.getRectangleP(); if (JThrowable.pending !== null) return;
        graphics!.drawRect(rectange!.getPoint()!.getX(), rectange!.getPoint()!.getY(), rectange!.getWidth(), rectange!.getHeight()); if (JThrowable.pending !== null) return;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        this.layerBounds!.visit(this.boundsVisitorInterface); if (JThrowable.pending !== null) return;
    }
}

