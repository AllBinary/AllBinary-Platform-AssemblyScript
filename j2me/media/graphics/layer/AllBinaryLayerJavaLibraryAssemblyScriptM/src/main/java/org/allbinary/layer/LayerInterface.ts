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
// package org.allbinary.layer
// import org.allbinary.game.identification.GroupInterfaceCompositeInterface
// import org.allbinary.graphics.paint.PaintableInterface

@global export interface LayerInterface extends NamedInterface /* Java also extends PaintableInterface GroupInterfaceCompositeInterface PositionInterface */ {
    

    getHeight(): i32;
    

    getWidth(): i32;
    

    getHalfHeight(): i32;
    

    getHalfWidth(): i32;
    

    getXP(): i32;
    

    getYP(): i32;
    

    getZP(): i32;
    

    getX2(): i32;
    

    getY2(): i32;
    

    getZ2(): i32;
    

    isVisible(): bool;
    

    moveDXYZ(dx: i32, dy: i32, dz: i32): void;
    

    setVisible(visible: bool): void;
    

    implmentsTickableInterface(): bool;
    

    implmentsCollidableInterface(): bool;
    

    implmentsGameInputInterface(): bool;
    

    implmentsArtificialIntelligenceCompositeInterface(): bool;
    

    getType(): i32;

    paint(p0: Graphics | null): void;

    paintThreed(p0: Graphics | null): void;

    getGroupInterface(): StaticArray<Group | null> | null;

    setPosition(p0: i32, p1: i32, p2: i32): void;
}

