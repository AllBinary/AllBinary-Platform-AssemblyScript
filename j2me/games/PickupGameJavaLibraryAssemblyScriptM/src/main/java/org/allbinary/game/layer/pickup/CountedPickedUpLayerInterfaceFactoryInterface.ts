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
// package org.allbinary.game.layer.pickup
// import org.allbinary.layer.LayerInterfaceFactoryInterface

@global export interface CountedPickedUpLayerInterfaceFactoryInterface extends PickedUpLayerInterfaceFactoryInterface /* Java also extends LayerInterfaceFactoryInterface */ {
    

    getId(): i32;
    

    getTotal(): i32;

    getNextInstance(p0: ABHashtable | null, p1: i32, p2: i32, p3: i32): AllBinaryLayer | null;
}

