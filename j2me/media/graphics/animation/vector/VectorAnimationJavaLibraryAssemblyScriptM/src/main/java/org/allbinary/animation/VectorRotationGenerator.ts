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
// import org.allbinary.math.Angle
// import org.allbinary.math.AngleFactory
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListS
// import org.allbinary.vector.VectorInfo

@global export class VectorRotationGenerator extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.VectorRotationGenerator";
    }
    @lazy static jv_instance: VectorRotationGenerator | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): VectorRotationGenerator | null {
        if (!VectorRotationGenerator.js_instance) {
            VectorRotationGenerator.js_instance = true;
            VectorRotationGenerator.jv_instance = new VectorRotationGenerator().jinit_VectorRotationGenerator_0();
        }
        return VectorRotationGenerator.jv_instance;
    }
    static set instance(value: VectorRotationGenerator | null) {
        VectorRotationGenerator.js_instance = true;
        VectorRotationGenerator.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    vectorAnimationUtil: VectorAnimationUtil | null = null;
    angleFactory: AngleFactory | null = null;

    jfields_VectorRotationGenerator(): void {
    this.logUtil = LogUtil.getInstance();
    this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
    this.angleFactory = AngleFactory.getInstance();
    }
    

    static getInstance(): VectorRotationGenerator | null {
        return VectorRotationGenerator.instance;
    }
    

    jinit_VectorRotationGenerator_0(): VectorRotationGenerator {
        super.jinit_JObject_0();
        this.jfields_VectorRotationGenerator();
        return this;
    }
    

    getInstance1(vectorRotationInfo: VectorInfo | null): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        return this.getInstanceFrames(vectorRotationInfo!.getWidth(), vectorRotationInfo!.getHeight(), vectorRotationInfo!.getPoints(), vectorRotationInfo!.getTotalFrames());
    }
    

    getInstanceFrames(width: i32, height: i32, points: StaticArray<StaticArray<i32> | null> | null, frames: i32): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        do {
            let totalAngle: i16 = this.angleFactory!.TOTAL_ANGLE;
            let angleIncrement: i32 = (<i32>(totalAngle)) / frames;
            let pointsBasicArrayList: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1((<i32>(totalAngle)) / angleIncrement); if (JThrowable.pending !== null) break;
            let pointBasicArrayList: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(points!.length); if (JThrowable.pending !== null) break;
            let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) break;
            let size: i32 = points!.length;
            for (let index: i32 = 0; index < size; index++) {
                pointBasicArrayList!.add(pointFactory!.createXY(points![index]![0], points![index]![1])); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let index: i32 = 0;
            while (index < (<i32>(totalAngle))) {
                pointsBasicArrayList!.add(this.getListAtAngle(width, height, pointBasicArrayList, this.angleFactory!.getAt(index))); if (JThrowable.pending !== null) break;
                index += angleIncrement;
            } if (JThrowable.pending !== null) break;
            let newPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, pointBasicArrayList!.size()); if (JThrowable.pending !== null) break;
            return newPoints;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            return NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getListAtAngle(width: i32, height: i32, pointBasicArrayList: BasicArrayList | null, angle: Angle | null): BasicArrayList | null {
        let graphicsPipe: BasicGraphicsPipeline | null = new BasicGraphicsPipeline().jinit_BasicGraphicsPipeline_1(pointBasicArrayList); if (JThrowable.pending !== null) return null;
        graphicsPipe!.createMatrix(); if (JThrowable.pending !== null) return null;
        graphicsPipe!.translate(-(width >> 1), -(height >> 1)); if (JThrowable.pending !== null) return null;
        graphicsPipe!.rotateToAngle(angle); if (JThrowable.pending !== null) return null;
        graphicsPipe!.translate((width >> 1), (height >> 1)); if (JThrowable.pending !== null) return null;
        return graphicsPipe!.getMatrix();
    }
}

