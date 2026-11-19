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
// package org.allbinary.animation.resource
// import org.allbinary.game.configuration.feature.GameFeatureControlledInterface
// import org.allbinary.game.resource.RectangleResourceFactoryInterface
// import org.allbinary.util.ABHashtable

@global export interface FeatureResourceAnimationInterfaceFactoryInterface extends ResourceAnimationInterfaceFactoryInterface /* Java also extends RectangleResourceFactoryInterface GameFeatureControlledInterface */ {
    

    getHashtable(): ABHashtable | null;

    getRectangle(p0: string | null): Rectangle | null;

    getRectangleArrayOfArrays(p0: string | null): StaticArray<StaticArray<Rectangle | null> | null> | null;

    init(p0: i32): void;

    isFeature(): bool;

    isLoadingLevel(p0: i32): bool;
}

