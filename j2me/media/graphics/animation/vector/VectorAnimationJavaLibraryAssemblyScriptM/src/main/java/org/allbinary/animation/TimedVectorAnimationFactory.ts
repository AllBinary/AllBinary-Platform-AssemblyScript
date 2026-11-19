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
// package org.allbinary.animation
// import org.allbinary.graphics.color.BasicColor

@global export class TimedVectorAnimationFactory extends JObject implements VectorAnimationFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.TimedVectorAnimationFactory";
    }

    jinit_TimedVectorAnimationFactory_0(): TimedVectorAnimationFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance2(points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null): VectorAnimation | null {
        return new TimedVectorAnimation().jinit_TimedVectorAnimation_3(points, basicColor, AnimationBehavior.getInstance());
    }
}

