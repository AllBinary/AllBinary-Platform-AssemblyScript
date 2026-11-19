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
// package org.allbinary.graphics.pipeline
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.math.AngleFactory
// import org.allbinary.util.BasicArrayList

@global export class RandomRotationFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.pipeline.RandomRotationFactory";
    }
    @lazy static jv_instance: RandomRotationFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): RandomRotationFactory | null {
        if (!RandomRotationFactory.js_instance) {
            RandomRotationFactory.js_instance = true;
            RandomRotationFactory.jv_instance = new RandomRotationFactory().jinit_RandomRotationFactory_0();
        }
        return RandomRotationFactory.jv_instance;
    }
    static set instance(value: RandomRotationFactory | null) {
        RandomRotationFactory.js_instance = true;
        RandomRotationFactory.jv_instance = value;
    }
    myRandomFactory: MyRandomFactory | null = null;
    angleFactory: AngleFactory | null = null;

    jfields_RandomRotationFactory(): void {
    this.myRandomFactory = MyRandomFactory.getInstance();
    this.angleFactory = AngleFactory.getInstance();
    }

    jinit_RandomRotationFactory_0(): RandomRotationFactory {
        super.jinit_JObject_0();
        this.jfields_RandomRotationFactory();
        return this;
    }
    

    static getInstance(): RandomRotationFactory | null {
        return RandomRotationFactory.instance;
    }
    

    getInstanceList(vector: BasicArrayList | null, howMuch: i32): BasicArrayList | null {
        let graphicsPipe: BasicGraphicsPipeline | null = new BasicGraphicsPipeline().jinit_BasicGraphicsPipeline_1(vector); if (JThrowable.pending !== null) return null;
        graphicsPipe!.createMatrix(); if (JThrowable.pending !== null) return null;
        graphicsPipe!.rotateToAngle(this.angleFactory!.getAt(this.getNextRandomAngle(howMuch))); if (JThrowable.pending !== null) return null;
        return graphicsPipe!.getMatrix();
    }
    

    getNextRandomAngle(howMuch: i32): i32 {
        return this.myRandomFactory!.getNextInt(howMuch * 10);
    }
}

