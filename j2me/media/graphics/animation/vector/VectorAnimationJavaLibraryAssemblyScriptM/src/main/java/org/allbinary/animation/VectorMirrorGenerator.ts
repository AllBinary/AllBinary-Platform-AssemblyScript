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
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.pipeline.BasicGraphicsPipeline
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListS

@global export class VectorMirrorGenerator extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.VectorMirrorGenerator";
    }
    @lazy static jv_instance: VectorMirrorGenerator | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): VectorMirrorGenerator | null {
        if (!VectorMirrorGenerator.js_instance) {
            VectorMirrorGenerator.js_instance = true;
            VectorMirrorGenerator.jv_instance = new VectorMirrorGenerator().jinit_VectorMirrorGenerator_0();
        }
        return VectorMirrorGenerator.jv_instance;
    }
    static set instance(value: VectorMirrorGenerator | null) {
        VectorMirrorGenerator.js_instance = true;
        VectorMirrorGenerator.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    vectorAnimationUtil: VectorAnimationUtil | null = null;

    jfields_VectorMirrorGenerator(): void {
    this.logUtil = LogUtil.getInstance();
    this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
    }
    

    static getInstance(): VectorMirrorGenerator | null {
        return VectorMirrorGenerator.instance;
    }
    

    jinit_VectorMirrorGenerator_0(): VectorMirrorGenerator {
        super.jinit_JObject_0();
        this.jfields_VectorMirrorGenerator();
        return this;
    }
    

    getInstance_2_intAAAint(points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, width: i32): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        do {
            let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) break;
            let pointBasicArrayList: BasicArrayList | null = null;
            let nextPoints: StaticArray<StaticArray<i32> | null> | null = null;
            let size2: i32 = 0;
            let size: i32 = points!.length;
            let pointsBasicArrayList: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(size); if (JThrowable.pending !== null) break;
            for (let frame: i32 = 0; frame < size; frame++) {
                nextPoints = points![frame];
                size2 = nextPoints!.length;
                pointBasicArrayList = new BasicArrayListS().jinit_BasicArrayListS_1(size2); if (JThrowable.pending !== null) break;
                for (let index: i32 = 0; index < size2; index++) {
                    pointBasicArrayList!.add(pointFactory!.createXY(nextPoints![index]![0], nextPoints![index]![1])); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                pointsBasicArrayList!.add(pointBasicArrayList); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            for (let index: i32 = 0; index < points!.length; index++) {
                pointsBasicArrayList!.add(this.getInstance_2_BasicArrayListint(changetype<BasicArrayList | null>(pointsBasicArrayList!.objectArray![index]), width)); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let newPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointList(pointsBasicArrayList); if (JThrowable.pending !== null) break;
            return newPoints;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getInstance_2_BasicArrayListint(pointBasicArrayList: BasicArrayList | null, width: i32): BasicArrayList | null {
        let graphicsPipe: BasicGraphicsPipeline | null = new BasicGraphicsPipeline().jinit_BasicGraphicsPipeline_1(pointBasicArrayList); if (JThrowable.pending !== null) return null;
        graphicsPipe!.createMatrix(); if (JThrowable.pending !== null) return null;
        graphicsPipe!.mirror(width); if (JThrowable.pending !== null) return null;
        return graphicsPipe!.getMatrix();
    }
}

